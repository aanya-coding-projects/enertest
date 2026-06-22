"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Check, Package } from "lucide-react";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { storeProducts } from "@/data/storeProducts";
import { useCart } from "@/context/CartContext";

const CATEGORIES = ["All", "Maintenance & Auxiliary", "Test Accessories", "Test Equipment"];

export default function StorePage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [addedIds, setAddedIds] = useState<Set<string>>(new Set());
  const { addItem } = useCart();

  const filtered = activeCategory === "All"
    ? storeProducts
    : storeProducts.filter(p => p.category === activeCategory);

  const handleAddToCart = (product: typeof storeProducts[0]) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
    });
    setAddedIds(prev => new Set(prev).add(product.id));
    setTimeout(() => {
      setAddedIds(prev => {
        const next = new Set(prev);
        next.delete(product.id);
        return next;
      });
    }, 2000);
  };

  return (
    <main className="store-main">
      <Navbar />

      {/* Header */}
      <section className="store-header">
        <motion.span
          className="cap-tag"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          STORE
        </motion.span>
        <motion.h1
          className="store-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Maintenance &amp; Auxiliary Equipment
        </motion.h1>
        <motion.p
          className="store-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Accessories, test tools, and auxiliary systems available for direct purchase.
          For large capital equipment, use{" "}
          <Link href="/quote" className="store-subtitle-link">Request a Quote</Link>.
        </motion.p>
      </section>

      {/* Filters */}
      <section className="store-filters-section">
        <div className="store-container">
          <div className="store-filters">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                className={`store-filter-btn ${activeCategory === cat ? "active" : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="store-products-section">
        <div className="store-container">
          <div className="store-grid">
            {filtered.map((product, idx) => {
              const isAdded = addedIds.has(product.id);
              return (
                <motion.div
                  key={product.id}
                  className="store-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.07 }}
                >
                  <div className="store-card-img-wrap">
                    <img src={product.image} alt={product.name} className="store-card-img" />
                    {!product.inStock && <div className="store-card-badge">Out of Stock</div>}
                    <div className="store-card-category-tag">{product.category}</div>
                  </div>

                  <div className="store-card-body">
                    <div className="store-card-top">
                      <h3 className="store-card-name">{product.name}</h3>
                      <p className="store-card-desc">{product.shortDesc}</p>
                    </div>

                    <div className="store-card-specs">
                      {product.specs.slice(0, 3).map((spec, i) => (
                        <div key={i} className="store-spec-item">
                          <span className="store-spec-dot" />
                          <span className="store-spec-text">{spec}</span>
                        </div>
                      ))}
                    </div>

                    <div className="store-card-footer">
                      <div className="store-card-price-row">
                        <span className="store-price">${product.price.toLocaleString()}</span>
                        <span className="store-lead-time">
                          <Package size={12} />
                          {product.leadTime}
                        </span>
                      </div>
                      <button
                        className={`store-add-btn ${isAdded ? "added" : ""} ${!product.inStock ? "out-of-stock" : ""}`}
                        onClick={() => product.inStock && handleAddToCart(product)}
                        disabled={!product.inStock}
                      >
                        {!product.inStock ? (
                          "Out of Stock"
                        ) : isAdded ? (
                          <><Check size={14} />Added</>
                        ) : (
                          <><ShoppingCart size={14} />Add to Cart</>
                        )}
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* CTA Banner */}
          <motion.div
            className="store-cta-banner"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="store-cta-inner">
              <div>
                <h3 className="store-cta-title">Need capital equipment?</h3>
                <p className="store-cta-text">
                  Battery cyclers, climatic chambers, and full production lines require a custom quote.
                  Our engineers will scope the right system for your application.
                </p>
              </div>
              <Link href="/quote" className="store-cta-btn">Request a Quote →</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
