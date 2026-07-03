"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { getFeaturedProducts } from "@/data/products";

export default function FeaturedProducts() {
  const featured = getFeaturedProducts();

  return (
    <section className="featured-products-section">
      <span className="cap-tag">PRIORITY SYSTEMS</span>
      <h2 className="featured-products-heading">Featured Testing Solutions</h2>

      <div className="featured-products-grid">
        {featured.map((product, i) => {
          const isPlaceholder = !product.image;

          const cardInner = (
            <>
              <div className="featured-product-img-wrap">
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="featured-product-img"
                  />
                ) : (
                  <div className="featured-product-img-placeholder">
                    <span className="featured-product-coming-soon">Coming Soon</span>
                  </div>
                )}
              </div>
              <div className="featured-product-body">
                <p className="featured-product-name">{product.name}</p>
                {!isPlaceholder && (
                  <span className="featured-product-link">
                    More Info <span className="arrow">→</span>
                  </span>
                )}
              </div>
            </>
          );

          return (
            <motion.div
              key={product.slug}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.45, delay: i * 0.15, ease: "easeOut" }}
            >
              {isPlaceholder ? (
                <div className="featured-product-card featured-product-card-disabled">
                  {cardInner}
                </div>
              ) : (
                <Link
                  href={`/products/${product.slug}`}
                  className="featured-product-card"
                >
                  {cardInner}
                </Link>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}