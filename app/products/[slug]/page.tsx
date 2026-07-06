import { Metadata } from "next";
import { getProductBySlug } from "@/data/products";
import { IEST_PRODUCT_DATA } from "@/data/iestProducts";
import ProductPageClient from "./ProductPageClient";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const iestProduct = IEST_PRODUCT_DATA[slug];
  if (iestProduct) {
    return {
      title: iestProduct.seoTitle,
      description: iestProduct.seoDescription,
    };
  }

  const result = getProductBySlug(slug);
  if (!result) return { title: "Product | EnerTest Solutions" };

  return {
    title: `${result.product.name} | EnerTest Solutions`,
    description:
      result.product.description ??
      `Explore the ${result.product.name} from EnerTest Solutions — industrial battery testing and manufacturing equipment.`,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  await params;
  return <ProductPageClient />;
}
