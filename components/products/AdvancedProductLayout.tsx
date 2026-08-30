"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import type { Product, Category } from "@/data/products";
import type { AdvancedProductEntry } from "@/data/productDetails";

type Tab = "description" | "applications" | "video" | "specs" | "download";

// ─── Carousel (same as standard layout) ────────────────────────────────────

function ImageCarousel({ slides }: { slides: string[] }) {
  const [current, setCurrent] = useState(0);
  const next = () => setCurrent((c) => (c + 1) % slides.length);
  const prev = () => setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1));

  return (
    <div className="carousel-root">
      <AnimatePresence mode="wait">
        <motion.img
          key={current}
          src={slides[current]}
          alt={`Product view ${current + 1}`}
          className="carousel-img"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
      </AnimatePresence>
      {slides.length > 1 && (
        <>
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={prev}
            aria-label="Previous image"
          >
            ‹
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={next}
            aria-label="Next image"
          >
            ›
          </button>
        </>
      )}
    </div>
  );
}

// ─── Accordion (same as standard layout) ───────────────────────────────────

function AccordionSection({
  title,
  items,
  isOpen,
  onToggle,
}: {
  title: string;
  items: string[];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className={`accordion-section${isOpen ? " open" : ""}`}>
      <button className="accordion-header" onClick={onToggle}>
        <span className={`accordion-title${isOpen ? " active" : ""}`}>
          {title}
        </span>
        <motion.span
          className="accordion-icon"
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.22 }}
        >
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="body"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="accordion-body"
          >
            <ul className="accordion-list">
              {items.map((item, i) => (
                <motion.li
                  key={i}
                  className="accordion-item"
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.035, duration: 0.2 }}
                >
                  <span className="accordion-bullet" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Advanced Product Layout ────────────────────────────────────────────────

export default function AdvancedProductLayout({
  product,
  category,
  data,
}: {
  product: Product;
  category: Category;
  data: AdvancedProductEntry;
}) {
  const [openSection, setOpenSection] = useState<
    "applications" | "features" | null
  >("applications");
  const toggleAccordion = (s: "applications" | "features") =>
    setOpenSection((prev) => (prev === s ? null : s));

  // Short bullet list for the top accordion (matches every other product's hero).
  // The richer applicationCards (with images) power the tab section below.
  const shortApplications = (data.applicationCards ?? []).map((c) => c.title);

  const availableTabs: Tab[] = [
    "description",
    ...((data.applicationCards?.length ?? 0) > 0 ? (["applications"] as Tab[]) : []),
    ...(data.videoEmbedUrl ? (["video"] as Tab[]) : []),
    ...(data.specsImage ? (["specs"] as Tab[]) : []),
    ...(data.downloadUrl ? (["download"] as Tab[]) : []),
  ];
  const [activeTab, setActiveTab] = useState<Tab>("description");

  return (
    <>
      {/* Hero: same structure as every other product page */}
      <div className="pd-grid">
        <motion.div
          className="pd-left"
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55 }}
        >
          {(data.carouselImages?.length ?? 0) === 1 ? (
            <div className="carousel-root">
              <img
                src={data.carouselImages![0]}
                alt={product.name}
                className="carousel-img"
              />
            </div>
          ) : (data.carouselImages?.length ?? 0) > 1 ? (
            <ImageCarousel slides={data.carouselImages!} />
          ) : null}
        </motion.div>

        <motion.div
          className="pd-right"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
        >
          <p className="pd-category-tag">{category.title}</p>
          <h1 className="pd-title">{product.name}</h1>
          <hr className="pd-divider" />

          {product.description && (
            <p className="pd-description">{product.description}</p>
          )}

          {shortApplications.length > 0 && (data.features?.length ?? 0) > 0 && (
            <div className="pd-accordions">
              <AccordionSection
                title="Applications"
                items={shortApplications}
                isOpen={openSection === "applications"}
                onToggle={() => toggleAccordion("applications")}
              />
              <AccordionSection
                title="Features"
                items={data.features ?? []}
                isOpen={openSection === "features"}
                onToggle={() => toggleAccordion("features")}
              />
            </div>
          )}

          <Link
            href={`/quote?product=${encodeURIComponent(product.name)}`}
            className="pd-cta-link"
          >
            Request a Quote →
          </Link>
        </motion.div>
      </div>

      {/* Richer technical content: tabs */}
      <div className="pd-tabs-wrapper">
        <div className="pd-tabs">
          {availableTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pd-tab ${activeTab === tab ? "active" : ""}`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="pd-tab-content">
        {activeTab === "description" && (
          <div className="pd-description-section">
            {(data.intro ?? []).map((block, i) => (
              <div
                key={i}
                className={`pd-block${block.reverse ? " reverse" : ""}`}
              >
                <div className="pd-text">
                  <h2>{block.heading}</h2>
                  {block.body && <p>{block.body}</p>}
                  {block.list && (
                    <ul>
                      {block.list.map((item, j) => (
                        <li key={j}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
                <img src={block.image} alt={block.heading} />
              </div>
            ))}
          </div>
        )}

        {activeTab === "applications" && (
          <div className="pd-app-grid">
            {(data.applicationCards ?? []).map((card, i) => (
              <div key={i} className="pd-app-card">
                <img src={card.image} alt={card.title} />
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "video" && data.videoEmbedUrl && (
          <div className="pd-video">
            <iframe
              width="100%"
              height="500"
              src={data.videoEmbedUrl}
              allowFullScreen
            />
          </div>
        )}

        {activeTab === "specs" && data.specsImage && (
          <img
            src={data.specsImage}
            className="pd-spec-img"
            alt={`${product.name} specifications`}
          />
        )}

        {activeTab === "download" && data.downloadUrl && (
          <div className="pd-download">
            <a
              href={data.downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="pd-download-btn"
            >
              Download PDF
            </a>
          </div>
        )}
      </div>
    </>
  );
}
