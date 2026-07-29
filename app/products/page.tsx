import { client } from "@/sanity/lib/client";
import { CATEGORIES_QUERY } from "@/sanity/lib/queries";
import type { SanityCategory } from "@/sanity/lib/types";
import ProductsClient from "./ProductsClient";

export default async function ProductsPage() {
  const categories = await client.fetch<SanityCategory[]>(CATEGORIES_QUERY, {}, { next: { tags: ["sanity"] } });
  return <ProductsClient categories={categories} />;
}
