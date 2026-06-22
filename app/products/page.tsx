"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { categories } from "@/data/products";

export default function Products() {
  const [openCategory, setOpenCategory] = useState<string | null>("test-system-solutions");

  return (
    <main>
      <Navbar />

      {/* Page Header */}
      <section className="products-header">
        <motion.span className="cap-tag" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          PRODUCTS
        </motion.span>
        <motion.h1 className="products-title" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}>
          Industrial Battery Solutions
        </motion.h1>
        <motion.p className="products-subtitle" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
          Factory-scale equipment engineered for cell, module, and pack production.
          Capital equipment is available via direct consultation.{" "}
          <Link href="/store" className="products-subtitle-store-link">
            Looking for accessories or smaller items? Visit the Store →
          </Link>
        </motion.p>
      </section>

      {/* Category Accordion */}
      <section className="products-categories">
        <div className="products-container">
          {categories.map((category, idx) => {
            const isOpen = openCategory === category.id;
            const isMaintenance = category.id === "maintenance-auxiliary";
            const isServices = category.id === "engineering-services";

            return (
              <motion.div
                key={category.id}
                className="category-block"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
              >
                {/* Category Header */}
                <div
                  className={`category-header ${isOpen ? "category-header-open" : ""}`}
                  onClick={() => setOpenCategory(isOpen ? null : category.id)}
                >
                  <div className="category-header-left">
                    <div className={`category-indicator ${isOpen ? "visible" : ""}`} />
                    <h2 className={`category-title ${isOpen ? "active" : ""}`}>{category.title}</h2>
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
                        const activeProducts = sub.products.filter(p => !p.comingSoon);
                        const comingSoonProducts = sub.products.filter(p => p.comingSoon);

                        return (
                          <div key={sub.name} className="subcategory-block">
                            <h3 className="subcategory-title">{sub.name}</h3>

                            {isServices ? (
                              /* Engineering Services: service cards */
                              <div className="service-grid">
                                {sub.products.map(product => (
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
                                {/* Active product cards */}
                                {activeProducts.length > 0 && (
                                  <div className="product-grid">
                                    {activeProducts.map(product => {
                                      /* Maintenance & Auxiliary store-linked products */
                                      if (product.storeLink) {
                                        return (
                                          <Link key={product.slug} href="/store" className="product-card">
                                            <div className="product-card-img-wrap">
                                              {product.image ? (
                                                <img src={product.image} alt={product.name} className="product-card-img" />
                                              ) : (
                                                <div className="product-img-placeholder" />
                                              )}
                                            </div>
                                            <div className="product-card-body">
                                              <p className="product-card-name">{product.name}</p>
                                              <span className="product-more-link product-store-link">
                                                Available in Store <span className="arrow">→</span>
                                              </span>
                                            </div>
                                          </Link>
                                        );
                                      }

                                      /* Cell Sorting System: video card */
                                      if (product.slug === "cell-sorting-system") {
                                        return (
                                          <Link key={product.slug} href={`/products/${product.slug}`} className="product-card">
                                            <div className="product-card-img-wrap">
                                              <video src="/Videos/CellSort.mp4" autoPlay loop muted playsInline className="product-card-video" />
                                            </div>
                                            <div className="product-card-body">
                                              <p className="product-card-name">{product.name}</p>
                                              <span className="product-more-link">More Info <span className="arrow">→</span></span>
                                            </div>
                                          </Link>
                                        );
                                      }

                                      /* Standard product card */
                                      return (
                                        <Link key={product.slug} href={`/products/${product.slug}`} className="product-card">
                                          <div className="product-card-img-wrap">
                                            {product.image ? (
                                              <img src={product.image} alt={product.name} className="product-card-img" />
                                            ) : (
                                              <div className="product-img-placeholder" />
                                            )}
                                          </div>
                                          <div className="product-card-body">
                                            <p className="product-card-name">{product.name}</p>
                                            <span className="product-more-link">More Info <span className="arrow">→</span></span>
                                          </div>
                                        </Link>
                                      );
                                    })}
                                  </div>
                                )}

                                {/* Coming Soon consolidated box */}
                                {comingSoonProducts.length > 0 && (
                                  <div className="coming-soon-box">
                                    <div className="coming-soon-box-header">
                                      <span className="coming-soon-box-label">Coming Soon</span>
                                    </div>
                                    <ul className="coming-soon-list">
                                      {comingSoonProducts.map(product => (
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

                      {/* CTA */}
                      <div className="category-cta">
                        <p className="category-cta-text">
                          {isMaintenance
                            ? "Need maintenance equipment or accessories?"
                            : `Interested in ${category.title}?`}
                        </p>
                        <Link
                          href={isMaintenance ? "/store" : "/contact"}
                          className="category-cta-link"
                        >
                          {isMaintenance ? "Visit our Store →" : "Contact our team →"}
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
