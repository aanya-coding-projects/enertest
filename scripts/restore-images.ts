/**
 * Restores original image URLs into Sanity documents as externalUrl values.
 * Run with: npx tsx scripts/restore-images.ts
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

function imgObj(url: string | null | undefined) {
  if (!url) return null;
  return { _type: "image", externalUrl: url };
}

async function run() {
  const patches: Promise<any>[] = [];

  // ── EnerTest products ────────────────────────────────────────────────────────
  for (const [slug, detail] of Object.entries(PRODUCT_DATA)) {
    let basicInfo: { image?: string } = {};
    for (const cat of categories) {
      for (const sub of cat.subcategories) {
        const found = sub.products.find((p) => p.slug === slug);
        if (found) { basicInfo = found; break; }
      }
    }

    const isAdvanced = (detail as any).layout === "advanced";
    const layout = isAdvanced ? "advanced" : "standard";
    const std = detail as any;
    const adv = detail as any;

    const patch: any = {
      image: imgObj(basicInfo.image),
      carouselImages: ((detail as any).carouselImages ?? []).map((url: string, i: number) => ({
        _type: "image",
        _key: `carousel_${i}`,
        externalUrl: url,
      })),
    };

    if (layout === "standard") {
      patch.supplements = (std.supplements ?? []).map((s: any, i: number) => ({
        _type: "supplement",
        _key: `sup_${i}`,
        label: s.label,
        src: imgObj(s.src),
        description: s.description ?? null,
      }));
      patch.gallery = (std.gallery ?? []).map((g: any, i: number) => ({
        _type: "object",
        _key: `gal_${i}`,
        label: g.label,
        src: imgObj(g.src),
      }));
    }

    if (layout === "advanced") {
      patch.intro = (adv.intro ?? []).map((block: any, i: number) => ({
        _type: "introBlock",
        _key: `intro_${i}`,
        heading: block.heading,
        body: block.body ?? null,
        list: block.list ?? null,
        image: imgObj(block.image),
        reverse: block.reverse ?? false,
      }));
      patch.applicationCards = (adv.applicationCards ?? []).map((card: any, i: number) => ({
        _type: "applicationCard",
        _key: `card_${i}`,
        title: card.title,
        description: card.description,
        image: imgObj(card.image),
      }));
      if (adv.specsImage) patch.specsImage = imgObj(adv.specsImage);
    }

    patches.push(
      client.patch(productDocId(slug)).set(patch).commit()
        .then(() => console.log(`✓ ${slug}`))
        .catch((e) => console.error(`✗ ${slug}: ${e.message}`))
    );
  }

  // ── IEST products ────────────────────────────────────────────────────────────
  for (const [slug, iest] of Object.entries(IEST_PRODUCT_DATA)) {
    let basicImage: string | undefined;
    for (const cat of categories) {
      for (const sub of cat.subcategories) {
        const found = sub.products.find((p) => p.slug === slug);
        if (found) { basicImage = found.image; break; }
      }
    }

    const cardImage = basicImage ?? (iest as any).carouselImages?.[0] ?? null;
    const carouselImages = ((iest as any).carouselImages ?? []).map((url: string, i: number) => ({
      _type: "image",
      _key: `carousel_${i}`,
      externalUrl: url,
    }));

    patches.push(
      client.patch(productDocId(slug)).set({
        image: imgObj(cardImage),
        carouselImages,
      }).commit()
        .then(() => console.log(`✓ ${slug}`))
        .catch((e) => console.error(`✗ ${slug}: ${e.message}`))
    );
  }

  await Promise.all(patches);
  console.log("\n✓ Image restore complete.");
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
