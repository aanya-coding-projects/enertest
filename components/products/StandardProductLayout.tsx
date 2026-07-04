"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import type { Product, Category } from "@/data/products";
import type { StandardProductEntry, Supplement } from "@/data/productDetails";

// ─── Carousel ─────────────────────────────────────────────────────────────────

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

// ─── Accordion ────────────────────────────────────────────────────────────────

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

// ─── Supplement: full-width stacked image (default) ───────────────────────────

function SupplementStacked({ src, label }: { src: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.08 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const isVideo = src.endsWith(".mp4") || src.endsWith(".webm");
  const isYouTube = src.includes("youtube.com") || src.includes("youtu.be");

  return (
    <motion.div
      ref={ref}
      className="supplement-block"
      initial={{ opacity: 0, y: 32 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.05, ease: "easeOut" }}
    >
      {isYouTube ? (
        <a
          href={src}
          target="_blank"
          rel="noopener noreferrer"
          className="supplement-video-link"
        >
          {label}
        </a>
      ) : (
        <>
          {label && <p className="supplement-label">{label}</p>}
          {isVideo ? (
            <video
              src={src}
              className="supplement-img"
              autoPlay
              loop
              muted
              playsInline
              controls={false}
            />
          ) : (
            <img src={src} alt={label} className="supplement-img" />
          )}
        </>
      )}
    </motion.div>
  );
}

// ─── Supplement: horizontal 4-column card with image + title + description ────

function SupplementCard({
  src,
  label,
  description,
  index,
}: Supplement & { index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.08 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      className="supplement-card"
      initial={{ opacity: 0, y: 24 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
    >
      <div className="supplement-card-img-wrap">
        <img src={src} alt={label} className="supplement-card-img" />
      </div>
      <h4 className="supplement-card-title">{label}</h4>
      {description && <p className="supplement-card-desc">{description}</p>}
    </motion.div>
  );
}

// ─── Gallery grid ─────────────────────────────────────────────────────────────

function GalleryGrid({ items }: { items: { label: string; src: string }[] }) {
  return (
    <div className="gallery-grid">
      {items.map((item, i) => (
        <motion.div
          key={i}
          className="gallery-item"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: i * 0.08, ease: "easeOut" }}
        >
          <div className="gallery-img-wrap">
            <img src={item.src} alt={item.label} className="gallery-img" />
          </div>
          <p className="gallery-label">{item.label}</p>
        </motion.div>
      ))}
    </div>
  );
}

// ─── Standard Product Layout ────────────────────────────────────────────────

export default function StandardProductLayout({
  product,
  category,
  data,
}: {
  product: Product;
  category: Category;
  data: StandardProductEntry | undefined;
}) {
  const carouselSlides: string[] =
    data?.carouselImages ?? (product.image ? [product.image] : []);

  const [openSection, setOpenSection] = useState<
    "applications" | "features" | null
  >("applications");
  const toggle = (s: "applications" | "features") =>
    setOpenSection((prev) => (prev === s ? null : s));

  const hasSupplements =
    data?.supplements && data.supplements.filter((s) => s.src).length > 0;
  const isGalleryOnly =
    data?.gallery && data.gallery.length > 0 && carouselSlides.length === 0;

  return (
    <>
      {/* Gallery-only layout: full-width header then gallery */}
      {isGalleryOnly ? (
        <>
          <motion.div
            className="pd-right"
            style={{ maxWidth: "100%" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <p className="pd-category-tag">{category.title}</p>
            <h1 className="pd-title">{product.name}</h1>
            <hr className="pd-divider" />
            {product.description && (
              <p className="pd-description">{product.description}</p>
            )}
            <Link
              href={`/quote?product=${encodeURIComponent(product.name)}`}
              className="pd-cta-link"
            >
              Request a Quote →
            </Link>
          </motion.div>

          <section className="pd-supplements">
            <div className="pd-supplements-divider" />
            <h2 className="pd-supplements-title">Product Range</h2>
            <GalleryGrid items={data!.gallery!} />
          </section>
        </>
      ) : (
        <>
          {/* Standard two-column layout */}
          <div className="pd-grid">
            {/* LEFT */}
            <motion.div
              className="pd-left"
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55 }}
            >
              {carouselSlides.length === 1 ? (
                <div className="carousel-root">
                  <img
                    src={carouselSlides[0]}
                    alt={product.name}
                    className="carousel-img"
                  />
                </div>
              ) : carouselSlides.length > 1 ? (
                <ImageCarousel slides={carouselSlides} />
              ) : null}
            </motion.div>

            {/* RIGHT */}
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

              {data &&
                data.applications.length > 0 &&
                data.features.length > 0 && (
                  <div className="pd-accordions">
                    <AccordionSection
                      title="Applications"
                      items={data.applications}
                      isOpen={openSection === "applications"}
                      onToggle={() => toggle("applications")}
                    />
                    <AccordionSection
                      title="Features"
                      items={data.features}
                      isOpen={openSection === "features"}
                      onToggle={() => toggle("features")}
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

          {/* Supplementary section */}
          {hasSupplements && (
            <section className="pd-supplements">
              <div className="pd-supplements-divider" />
              <h2 className="pd-supplements-title">Technical Resources</h2>

              {data!.supplementLayout === "row4" ? (
                <div className="pd-supplements-row4">
                  {data!.supplements
                    .filter((s) => s.src)
                    .map((s, i) => (
                      <SupplementCard key={i} index={i} {...s} />
                    ))}
                </div>
              ) : (
                data!.supplements
                  .filter((s) => s.src)
                  .map((s, i) => (
                    <SupplementStacked key={i} src={s.src} label={s.label} />
                  ))
              )}
            </section>
          )}
        </>
      )}
    </>
  );
}
