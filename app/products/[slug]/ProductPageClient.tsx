"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import { getProductBySlug } from "@/data/products";
import { PRODUCT_DATA } from "@/data/productDetails";
import type { Supplement } from "@/data/productDetails";
import { IEST_PRODUCT_DATA } from "@/data/iestProducts";
import StandardProductLayout from "@/components/products/StandardProductLayout";
import AdvancedProductLayout from "@/components/products/AdvancedProductLayout";

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
          <button className="carousel-arrow carousel-arrow-left" onClick={prev} aria-label="Previous image">
            ‹
          </button>
          <button className="carousel-arrow carousel-arrow-right" onClick={next} aria-label="Next image">
            ›
          </button>
        </>
      )}
    </div>
  );
}

// ─── Accordion ────────────────────────────────────────────────────────────────

function AccordionSection({
  title, items, isOpen, onToggle,
}: {
  title: string; items: string[]; isOpen: boolean; onToggle: () => void;
}) {
  return (
    <div className={`accordion-section${isOpen ? " open" : ""}`}>
      <button className="accordion-header" onClick={onToggle}>
        <span className={`accordion-title${isOpen ? " active" : ""}`}>{title}</span>
        <motion.span
          className="accordion-icon"
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.22 }}
        >+</motion.span>
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

function SupplementStacked({ src, label, index }: { src: string; label: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.08 }
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
        <a href={src} target="_blank" rel="noopener noreferrer" className="supplement-video-link">
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

function SupplementCard({ src, label, description, index }: Supplement & { index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.08 }
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

// ─── IEST Product Inquiry Form ────────────────────────────────────────────────

function IESTProductInquiryForm({ productName }: { productName: string }) {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/product-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, productName }),
      });
      if (!res.ok) throw new Error("Submission failed");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or contact us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="inquiry-success">
        <p className="inquiry-success-title">Inquiry Received</p>
        <p className="inquiry-success-body">
          Thank you for your interest in the {productName}. Our team will follow up with you within 1–2 business days.
        </p>
      </div>
    );
  }

  return (
    <form className="inquiry-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label className="form-label" htmlFor="inq-name">Full Name *</label>
          <input
            id="inq-name"
            className="form-input"
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Jane Smith"
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="inq-company">Company *</label>
          <input
            id="inq-company"
            className="form-input"
            type="text"
            name="company"
            value={form.company}
            onChange={handleChange}
            required
            placeholder="Acme Battery Co."
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label className="form-label" htmlFor="inq-email">Email *</label>
          <input
            id="inq-email"
            className="form-input"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="jane@example.com"
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="inq-phone">Phone</label>
          <input
            id="inq-phone"
            className="form-input"
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="+1 (555) 000-0000"
          />
        </div>
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="inq-message">Message</label>
        <textarea
          id="inq-message"
          className="form-input form-textarea"
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={4}
          placeholder="Describe your application, quantity requirements, or any questions about the product."
        />
      </div>
      {error && <p className="form-error">{error}</p>}
      <button
        type="submit"
        className="form-submit-btn"
        disabled={submitting}
      >
        {submitting ? "Sending…" : "Send Inquiry"}
      </button>
    </form>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ProductPageClient() {
  const params = useParams();
  const slug = typeof params.slug === "string" ? params.slug : "";

  const iestData = IEST_PRODUCT_DATA[slug];

  // All hooks must be called unconditionally before any early return
  const [openSection, setOpenSection] = useState<"applications" | "features" | null>("features");
  const toggleIEST = (s: "applications" | "features") =>
    setOpenSection((prev) => (prev === s ? null : s));

  // ─── IEST product layout ───────────────────────────────────────────────────
  if (iestData) {
    return (
      <main className="pd-main">
        <Navbar />
        <div className="pd-container">
          {/* Breadcrumb */}
          <nav className="pd-breadcrumb">
            <Link href="/products">Products</Link>
            <span className="pd-crumb-sep">›</span>
            <Link href="/products#iest-products">IEST Characterization &amp; Testing Instruments</Link>
            <span className="pd-crumb-sep">›</span>
            <span className="pd-crumb-current">{iestData.name}</span>
          </nav>

          {/* Two-column grid */}
          <div className="pd-grid">
            {/* LEFT — Carousel */}
            <motion.div
              className="pd-left"
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55 }}
            >
              {iestData.carouselImages.length === 1 ? (
                <div className="carousel-root">
                  <img src={iestData.carouselImages[0]} alt={iestData.name} className="carousel-img" />
                </div>
              ) : iestData.carouselImages.length > 1 ? (
                <ImageCarousel slides={iestData.carouselImages} />
              ) : null}
            </motion.div>

            {/* RIGHT — Product info */}
            <motion.div
              className="pd-right"
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
            >
              <p className="pd-category-tag">{iestData.category}</p>
              <h1 className="pd-title">{iestData.name}</h1>
              <p className="iest-model-badge">Model: {iestData.model}</p>
              <hr className="pd-divider" />
              <p className="pd-description">{iestData.description}</p>

              <div className="pd-accordions">
                <AccordionSection
                  title="Features"
                  items={iestData.features}
                  isOpen={openSection === "features"}
                  onToggle={() => toggleIEST("features")}
                />
                <AccordionSection
                  title="Applications"
                  items={iestData.applications}
                  isOpen={openSection === "applications"}
                  onToggle={() => toggleIEST("applications")}
                />
              </div>
            </motion.div>
          </div>

          {/* Inquiry Form Section */}
          <section className="iest-inquiry-section">
            <div className="pd-supplements-divider" />
            <h2 className="pd-supplements-title">Inquire About This Product</h2>
            <IESTProductInquiryForm productName={iestData.name} />
          </section>
        </div>
      </main>
    );
  }

  // ─── Standard EnerTest product layout ─────────────────────────────────────
  const result = getProductBySlug(slug);
  if (!result) notFound();

  const { product, category } = result!;
  const data = PRODUCT_DATA[slug];

  return (
    <main className="pd-main">
      <Navbar />
      <div className="pd-container">
        <nav className="pd-breadcrumb">
          <Link href="/products">Products</Link>
          <span className="pd-crumb-sep">›</span>
          <Link href={`/products#${category.id}`}>{category.title}</Link>
          <span className="pd-crumb-sep">›</span>
          <span className="pd-crumb-current">{product.name}</span>
        </nav>
        {(data as any)?.layout === "advanced" ? (
          <AdvancedProductLayout product={product} category={category} data={data as any} />
        ) : (
          <StandardProductLayout product={product} category={category} data={data as any} />
        )}
      </div>
    </main>
  );
}
