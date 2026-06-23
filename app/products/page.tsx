"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import { categories } from "@/data/products";

export default function Products() {
  const searchParams = useSearchParams();
  const [openCategory, setOpenCategory] = useState<string | null>("test-system-solutions");

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      setOpenCategory(hash);
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }, []);

  return (
    <main>
      <Navbar />

      {/* Page Header */}
      <section className="products-header">
        <motion.span
          className="cap-tag"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          PRODUCTS
        </motion.span>
        <motion.h1
          className="products-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Industrial Battery Solutions
        </motion.h1>
        <motion.p
          className="products-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Factory-scale equipment engineered for cell, module, and pack production.
          All solutions are available via direct consultation with our team.
        </motion.p>
      </section>

      {/* Category Accordion */}
      <section className="products-categories">
        <div className="products-container">
          {categories.map((category, idx) => {
            const isOpen = openCategory === category.id;
            return (
              <motion.div
                key={category.id}
                id={category.id}
                className="category-block"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                {/* Category Header */}
                <div
                  className={`category-header ${isOpen ? "category-header-open" : ""}`}
                  onClick={() => setOpenCategory(isOpen ? null : category.id)}
                >
                  <div className="category-header-left">
                    <div className={`category-indicator ${isOpen ? "visible" : ""}`} />
                    <h2 className={`category-title ${isOpen ? "active" : ""}`}>
                      {category.title}
                    </h2>
                  </div>
                  <div className={`category-chevron ${isOpen ? "open" : ""}`}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>

                {/* Expanded Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="category-content"
                    >
                      <p className="category-description">{category.description}</p>

                      {category.subcategories.map((sub) => {
                        const activeProducts = sub.products.filter((p) => !p.comingSoon);
                        const comingSoonProducts = sub.products.filter((p) => p.comingSoon);

                        return (
                          <div key={sub.name} className="subcategory-block">
                            <h3 className="subcategory-title">{sub.name}</h3>

                            {category.id === "engineering-services" ? (
                              <div className="service-grid">
                                {sub.products.map((product) => (
                                  <div key={product.slug} className="service-card">
                                    <div className="service-card-content">
                                      <h4 className="service-card-title">{product.name}</h4>
                                      <p className="service-card-description">{product.description}</p>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            ) : (
                              <>
                                {/* Active products grid */}
                                <div className="product-grid">
                                  {activeProducts.map((product) =>
                                    product.slug === "cell-sorting-system" ? (
                                      <Link
                                        key={product.slug}
                                        href={`/products/${product.slug}`}
                                        className="product-card"
                                      >
                                        <div className="product-card-img-wrap">
                                          <video
                                            src="/Videos/CellSort.mp4"
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                            className="product-card-video"
                                          />
                                        </div>
                                        <div className="product-card-body">
                                          <p className="product-card-name">{product.name}</p>
                                          <span className="product-more-link">
                                            More Info <span className="arrow">→</span>
                                          </span>
                                        </div>
                                      </Link>
                                    ) : (
                                      <Link
                                        key={product.slug}
                                        href={`/products/${product.slug}`}
                                        className="product-card"
                                      >
                                        <div className="product-card-img-wrap">
                                          {product.image ? (
                                            <img
                                              src={product.image}
                                              alt={product.name}
                                              className="product-card-img"
                                            />
                                          ) : (
                                            <div className="product-img-placeholder" />
                                          )}
                                        </div>
                                        <div className="product-card-body">
                                          <p className="product-card-name">{product.name}</p>
                                          <span className="product-more-link">
                                            More Info <span className="arrow">→</span>
                                          </span>
                                        </div>
                                      </Link>
                                    )
                                  )}
                                </div>

                                {/* Coming Soon consolidated box */}
                                {comingSoonProducts.length > 0 && (
                                  <div className="coming-soon-box">
                                    <div className="coming-soon-box-header">
                                      <span className="coming-soon-box-label">Coming Soon</span>
                                    </div>
                                    <ul className="coming-soon-list">
                                      {comingSoonProducts.map((product) => (
                                        <li key={product.slug} className="coming-soon-list-item">
                                          <span className="coming-soon-dot" />
                                          {product.name}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                )}
                              </>
                            )}
                          </div>
                        );
                      })}

                      {/* Contact CTA */}
                      <div className="category-cta">
                        <p className="category-cta-text">Interested in {category.title}?</p>
                        <Link href="/contact" className="category-cta-link">
                          Contact our team →
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </section>
    </main>
  );
}