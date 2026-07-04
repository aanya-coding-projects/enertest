"use client";

import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import { getProductBySlug } from "@/data/products";
import { PRODUCT_DATA } from "@/data/productDetails";
import StandardProductLayout from "@/components/products/StandardProductLayout";
import AdvancedProductLayout from "@/components/products/AdvancedProductLayout";

export default function ProductPage() {
  const params = useParams();
  const slug = typeof params.slug === "string" ? params.slug : "";

  const result = getProductBySlug(slug);
  if (!result) notFound();

  const { product, category } = result;
  const data = PRODUCT_DATA[slug];
  const layout = data?.layout ?? "standard";

  return (
    <main className="pd-main">
      <Navbar />

      <div className="pd-shell">
        <div className="pd-content">
          {/* Breadcrumb */}
          <nav className="pd-breadcrumb">
            <Link href="/products">Products</Link>
            <span className="pd-crumb-sep">›</span>
            <Link href={`/products#${category.id}`}>{category.title}</Link>
            <span className="pd-crumb-sep">›</span>
            <span className="pd-crumb-current">{product.name}</span>
          </nav>

          {layout === "advanced" ? (
            <AdvancedProductLayout
              product={product}
              category={category}
              data={data as any}
            />
          ) : (
            <StandardProductLayout
              product={product}
              category={category}
              data={data as any}
            />
          )}
        </div>
      </div>
    </main>
  );
}
