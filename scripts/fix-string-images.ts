/**
 * Finds any product documents that still have raw string values in image fields
 * (leftover from the first migration) and converts them to {_type:"image", externalUrl}.
 * Run with: npx tsx scripts/fix-string-images.ts
 */

import { createClient } from "@sanity/client";
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

function wrap(val: any): any {
  if (typeof val === "string" && val.length > 0) {
    return { _type: "image", externalUrl: val };
  }
  return val;
}

async function run() {
  const products = await client.fetch(`*[_type == "product"]`);
  console.log(`Fetched ${products.length} products`);

  for (const doc of products) {
    const patch: any = {};
    let dirty = false;

    // Top-level image fields
    if (typeof doc.image === "string") { patch.image = wrap(doc.image); dirty = true; }
    if (typeof doc.specsImage === "string") { patch.specsImage = wrap(doc.specsImage); dirty = true; }

    // carouselImages: convert any string items
    if (Array.isArray(doc.carouselImages)) {
      const fixed = doc.carouselImages.map((item: any, i: number) =>
        typeof item === "string"
          ? { _type: "image", _key: `carousel_${i}`, externalUrl: item }
          : item
      );
      if (fixed.some((v: any, i: number) => v !== doc.carouselImages[i])) {
        patch.carouselImages = fixed;
        dirty = true;
      }
    }

    // supplements[].src
    if (Array.isArray(doc.supplements)) {
      const fixed = doc.supplements.map((s: any) =>
        typeof s.src === "string" ? { ...s, src: wrap(s.src) } : s
      );
      if (fixed.some((v: any, i: number) => v !== doc.supplements[i])) {
        patch.supplements = fixed;
        dirty = true;
      }
    }

    // gallery[].src
    if (Array.isArray(doc.gallery)) {
      const fixed = doc.gallery.map((g: any) =>
        typeof g.src === "string" ? { ...g, src: wrap(g.src) } : g
      );
      if (fixed.some((v: any, i: number) => v !== doc.gallery[i])) {
        patch.gallery = fixed;
        dirty = true;
      }
    }

    // intro[].image
    if (Array.isArray(doc.intro)) {
      const fixed = doc.intro.map((b: any) =>
        typeof b.image === "string" ? { ...b, image: wrap(b.image) } : b
      );
      if (fixed.some((v: any, i: number) => v !== doc.intro[i])) {
        patch.intro = fixed;
        dirty = true;
      }
    }

    // applicationCards[].image
    if (Array.isArray(doc.applicationCards)) {
      const fixed = doc.applicationCards.map((c: any) =>
        typeof c.image === "string" ? { ...c, image: wrap(c.image) } : c
      );
      if (fixed.some((v: any, i: number) => v !== doc.applicationCards[i])) {
        patch.applicationCards = fixed;
        dirty = true;
      }
    }

    if (dirty) {
      await client.patch(doc._id).set(patch).commit();
      console.log(`✓ fixed ${doc.slug?.current ?? doc._id}`);
    }
  }

  console.log("\n✓ Done.");
}

run().catch((err) => { console.error(err); process.exit(1); });
