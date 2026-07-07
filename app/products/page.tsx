"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { categories } from "@/data/products";
import { IEST_PRODUCT_DATA } from "@/data/iestProducts";
import FeaturedProducts from "@/components/FeaturedProducts";

const IEST_FEATURED = [
  {
    slug: "prcd3100",
    name: "Powder Resistivity & Compaction Density Measurement System",
    image: "https://iestbattery.com/wp-content/uploads/2024/04/IEST-Powder-Resistivity-Compaction-Density-Measurement-System-PRCD3100.webp",
  },
  {
    slug: "ber-series",
    name: "Battery Electrode Resistance & Thickness Tester",
    image: "https://iestbattery.com/wp-content/uploads/2024/04/IEST-Lithium-Battery-Electrode-Resistance-Tester.webp",
  },
  {
    slug: "rss1400",
    name: "Silicon-Based Anode Swelling Rapid Screening System",
    image: "https://iestbattery.com/wp-content/uploads/2024/04/IEST-Silicon-Based-Anode-Swelling-In-Situ-Screening-System.webp",
  },
];

export default function Products() {
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const allSearchableProducts = useMemo(() =>
    categories
      .filter((cat) => cat.id !== "engineering-services")
      .flatMap((cat) =>
        cat.subcategories.flatMap((sub) =>
          sub.products
            .filter((p) => !p.comingSoon)
            .map((p) => ({
              ...p,
              categoryTitle: cat.title,
              categoryId: cat.id,
              model: IEST_PRODUCT_DATA[p.slug]?.model ?? "",
            }))
        )
      ), []);

  const searchResults = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return [];
    return allSearchableProducts.filter((p) =>
      p.name.toLowerCase().includes(q) ||
      p.model.toLowerCase().includes(q)
    );
  }, [searchQuery, allSearchableProducts]);

  useEffect(() => {
    console.log("URL:", window.location.href);
    console.log("Hash:", window.location.hash);

    const hash = window.location.hash.replace("#", "");

    if (!hash) return;

    setOpenCategory(hash);

    setTimeout(() => {
      document.getElementById(hash)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
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
        <motion.div
          className="products-search-wrap"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <svg className="products-search-icon" width="16" height="16" viewBox="0 0 20 20" fill="none">
            <circle cx="9" cy="9" r="6.5" stroke="currentColor" strokeWidth="1.6"/>
            <path d="M14 14L18 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
          </svg>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search products…"
            className="products-search-input"
          />
          {searchQuery && (
            <button className="products-search-clear" onClick={() => setSearchQuery("")} aria-label="Clear search">
              ×
            </button>
          )}
        </motion.div>
      </section>

      {searchQuery.trim() ? (
        <section className="products-categories">
          <div className="products-container">
            <p className="search-results-count">
              {searchResults.length} result{searchResults.length !== 1 ? "s" : ""} for &ldquo;{searchQuery}&rdquo;
            </p>
            {searchResults.length > 0 ? (
              <div className="product-grid">
                {searchResults.map((product) => (
                  <Link key={product.slug} href={`/products/${product.slug}`} className="product-card">
                    <div className="product-card-img-wrap">
                      {product.image ? (
                        <img src={product.image} alt={product.name} className="product-card-img" />
                      ) : (
                        <div className="product-img-placeholder" />
                      )}
                    </div>
                    <div className="product-card-body">
                      <p className="search-result-category">{product.categoryTitle}</p>
                      <p className="product-card-name">{product.name}</p>
                      <span className="product-more-link">More Info <span className="arrow">→</span></span>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <p className="search-no-results">No products matched &ldquo;{searchQuery}&rdquo;. Try a different term.</p>
            )}
          </div>
        </section>
      ) : (
        <>
      <FeaturedProducts />

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

                      {/* IEST featured products shown above subcategories */}
                      {category.id === "iest-products" && (
                        <div className="iest-featured-section">
                          <p className="iest-featured-label">Featured Products</p>
                          <div className="product-grid">
                            {IEST_FEATURED.map((product) => (
                              <Link
                                key={product.slug}
                                href={`/products/${product.slug}`}
                                className="product-card product-card-featured"
                              >
                                <div className="product-card-img-wrap">
                                  <img
                                    src={product.image}
                                    alt={product.name}
                                    className="product-card-img"
                                  />
                                </div>
                                <div className="product-card-body">
                                  <p className="product-card-name">{product.name}</p>
                                  <span className="product-more-link">
                                    More Info <span className="arrow">→</span>
                                  </span>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}

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
        </>
      )}
    </main>
  );
}
