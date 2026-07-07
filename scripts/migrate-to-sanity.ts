/**
 * One-time migration: pushes all existing product and category data into Sanity.
 * Run with: npx tsx scripts/migrate-to-sanity.ts
 *
 * Requires in .env.local:
 *   NEXT_PUBLIC_SANITY_PROJECT_ID
 *   NEXT_PUBLIC_SANITY_DATASET
 *   SANITY_API_WRITE_TOKEN
 */

import { createClient } from "@sanity/client";
import { categories } from "../data/products";
import { PRODUCT_DATA } from "../data/productDetails";
import { IEST_PRODUCT_DATA } from "../data/iestProducts";
import * as dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(process.cwd(), ".env.local") });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  apiVersion: "2024-01-01",
  token: process.env.SANITY_API_WRITE_TOKEN!,
  useCdn: false,
});

function productDocId(slug: string) {
  return `product-${slug}`;
}
function categoryDocId(id: string) {
  return `category-${id}`;
}
function key(str: string) {
  return str.replace(/[^a-zA-Z0-9]/g, "_").slice(0, 50);
}

async function run() {
  const transaction = client.transaction();

  // ── 1. Build all product documents ─────────────────────────────────────────
  const seenSlugs = new Set<string>();

  // EnerTest products (from productDetails.ts + products.ts)
  for (const [slug, detail] of Object.entries(PRODUCT_DATA)) {
    seenSlugs.add(slug);
    // Find basic info from categories
    let basicInfo: { name: string; image?: string; description?: string; comingSoon?: boolean } = { name: slug };
    for (const cat of categories) {
      for (const sub of cat.subcategories) {
        const found = sub.products.find((p) => p.slug === slug);
        if (found) {
          basicInfo = found;
          break;
        }
      }
    }

    const isAdvanced = (detail as any).layout === "advanced";
    const layout = isAdvanced ? "advanced" : "standard";

    const doc: any = {
      _id: productDocId(slug),
      _type: "product",
      name: basicInfo.name,
      slug: { _type: "slug", current: slug },
      image: basicInfo.image ?? null,
      description: basicInfo.description ?? null,
      comingSoon: basicInfo.comingSoon ?? false,
      layout,
      carouselImages: (detail as any).carouselImages ?? [],
      features: (detail as any).features ?? [],
      applications: (detail as any).applications ?? [],
    };

    if (layout === "standard") {
      const std = detail as any;
      doc.supplements = (std.supplements ?? []).map((s: any, i: number) => ({
        _type: "supplement",
        _key: `sup_${i}`,
        label: s.label,
        src: s.src,
        description: s.description ?? null,
      }));
      doc.supplementLayout = std.supplementLayout ?? "stacked";
      doc.gallery = (std.gallery ?? []).map((g: any, i: number) => ({
        _type: "object",
        _key: `gal_${i}`,
        label: g.label,
        src: g.src,
      }));
    }

    if (layout === "advanced") {
      const adv = detail as any;
      doc.intro = (adv.intro ?? []).map((block: any, i: number) => ({
        _type: "introBlock",
        _key: `intro_${i}`,
        heading: block.heading,
        body: block.body ?? null,
        list: block.list ?? null,
        image: block.image,
        reverse: block.reverse ?? false,
      }));
      doc.applicationCards = (adv.applicationCards ?? []).map((card: any, i: number) => ({
        _type: "applicationCard",
        _key: `card_${i}`,
        title: card.title,
        description: card.description,
        image: card.image,
      }));
      doc.videoEmbedUrl = adv.videoEmbedUrl ?? null;
      doc.specsImage = adv.specsImage ?? null;
      doc.downloadUrl = adv.downloadUrl ?? null;
    }

    transaction.createOrReplace(doc);
  }

  // IEST products (from iestProducts.ts)
  for (const [slug, iest] of Object.entries(IEST_PRODUCT_DATA)) {
    seenSlugs.add(slug);
    let basicImage: string | undefined;
    for (const cat of categories) {
      for (const sub of cat.subcategories) {
        const found = sub.products.find((p) => p.slug === slug);
        if (found) { basicImage = found.image; break; }
      }
    }

    const doc: any = {
      _id: productDocId(slug),
      _type: "product",
      name: iest.name,
      slug: { _type: "slug", current: slug },
      image: basicImage ?? iest.carouselImages[0] ?? null,
      comingSoon: false,
      layout: "iest",
      model: iest.model,
      iestCategory: iest.category,
      description: iest.description,
      features: iest.features,
      applications: iest.applications,
      carouselImages: iest.carouselImages,
      seoTitle: iest.seoTitle,
      seoDescription: iest.seoDescription,
    };

    transaction.createOrReplace(doc);
  }

  // Any remaining products in categories that have no detail data yet
  // (comingSoon products, engineering services, etc.)
  for (const cat of categories) {
    for (const sub of cat.subcategories) {
      for (const p of sub.products) {
        if (seenSlugs.has(p.slug)) continue;
        seenSlugs.add(p.slug);
        transaction.createOrReplace({
          _id: productDocId(p.slug),
          _type: "product",
          name: p.name,
          slug: { _type: "slug", current: p.slug },
          description: p.description ?? null,
          comingSoon: p.comingSoon ?? false,
          layout: "standard",
          carouselImages: [],
          features: [],
          applications: [],
          supplements: [],
          gallery: [],
        });
      }
    }
  }

  // ── 2. Build category documents ─────────────────────────────────────────────
  categories.forEach((cat, catIdx) => {
    const doc: any = {
      _id: categoryDocId(cat.id),
      _type: "category",
      categoryId: cat.id,
      title: cat.title,
      description: cat.description,
      order: catIdx + 1,
      subcategories: cat.subcategories.map((sub, subIdx) => ({
        _type: "subcategory",
        _key: key(`${cat.id}_${sub.name}`),
        name: sub.name,
        products: sub.products.map((p) => ({
          _type: "reference",
          _ref: productDocId(p.slug),
          _key: key(p.slug),
        })),
      })),
    };
    transaction.createOrReplace(doc);
  });

  console.log("Committing transaction…");
  await transaction.commit();
  console.log("✓ Migration complete.");
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
