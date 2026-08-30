export const revalidate = 3600;

import { Metadata } from "next";
import { notFound } from "next/navigation";
import { client } from "@/sanity/lib/client";
import { PRODUCT_QUERY, PRODUCT_CATEGORY_QUERY, ALL_PRODUCT_SLUGS_QUERY } from "@/sanity/lib/queries";
import type { SanityProduct } from "@/sanity/lib/types";
import ProductPageClient from "./ProductPageClient";

export async function generateStaticParams() {
  const slugs = await client.fetch<string[]>(ALL_PRODUCT_SLUGS_QUERY);
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = await client.fetch<SanityProduct | null>(PRODUCT_QUERY, { slug }, { cache: "force-cache", next: { tags: ["sanity"] } });
  if (!product) return { title: "Product | EnerTest Solutions" };

  return {
    title: product.seoTitle ?? `${product.name} | EnerTest Solutions`,
    description:
      product.seoDescription ??
      product.description ??
      `Explore the ${product.name} from EnerTest Solutions.`,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [product, categoryInfo] = await Promise.all([
    client.fetch<SanityProduct | null>(PRODUCT_QUERY, { slug }, { cache: "force-cache", next: { tags: ["sanity"] } }),
    client.fetch<{ categoryId: string; title: string } | null>(PRODUCT_CATEGORY_QUERY, { slug }, { cache: "force-cache", next: { tags: ["sanity"] } }),
  ]);

  if (!product) notFound();

  return <ProductPageClient product={product} categoryInfo={categoryInfo} />;
}
