"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import StandardProductLayout from "@/components/products/StandardProductLayout";
import AdvancedProductLayout from "@/components/products/AdvancedProductLayout";
import { Turnstile } from "@marsidev/react-turnstile";
import type { SanityProduct } from "@/sanity/lib/types";

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
          <button className="carousel-arrow carousel-arrow-left" onClick={prev} aria-label="Previous image">‹</button>
          <button className="carousel-arrow carousel-arrow-right" onClick={next} aria-label="Next image">›</button>
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
        <motion.span className="accordion-icon" animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.22 }}>+</motion.span>
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
                <motion.li key={i} className="accordion-item" initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.035, duration: 0.2 }}>
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

// ─── IEST Inquiry Form ────────────────────────────────────────────────────────

function IESTProductInquiryForm({ productName }: { productName: string }) {
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [turnstileToken, setTurnstileToken] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/product-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, productName, turnstileToken }),
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
          <input id="inq-name" className="form-input" type="text" name="name" value={form.name} onChange={handleChange} required placeholder="Jane Smith" />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="inq-company">Company *</label>
          <input id="inq-company" className="form-input" type="text" name="company" value={form.company} onChange={handleChange} required placeholder="Acme Battery Co." />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label className="form-label" htmlFor="inq-email">Email *</label>
          <input id="inq-email" className="form-input" type="email" name="email" value={form.email} onChange={handleChange} required placeholder="jane@example.com" />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="inq-phone">Phone</label>
          <input id="inq-phone" className="form-input" type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+1 (555) 000-0000" />
        </div>
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="inq-message">Message</label>
        <textarea id="inq-message" className="form-input form-textarea" name="message" value={form.message} onChange={handleChange} rows={4} placeholder="Describe your application, quantity requirements, or any questions about the product." />
      </div>
      {error && <p className="form-error">{error}</p>}
      <Turnstile
        siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "1x00000000000000000000AA"}
        onSuccess={setTurnstileToken}
        onError={() => setTurnstileToken("")}
        onExpire={() => setTurnstileToken("")}
      />
      <button type="submit" className="form-submit-btn" disabled={submitting || !turnstileToken}>
        {submitting ? "Sending…" : "Send Inquiry"}
      </button>
    </form>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ProductPageClient({
  product,
  categoryInfo,
}: {
  product: SanityProduct;
  categoryInfo: { categoryId: string; title: string } | null;
}) {
  const [openSection, setOpenSection] = useState<"applications" | "features" | null>("features");
  const toggleIEST = (s: "applications" | "features") =>
    setOpenSection((prev) => (prev === s ? null : s));

  // ─── IEST layout ────────────────────────────────────────────────────────────
  if (product.layout === "iest") {
    return (
      <main className="pd-main">
        <Navbar />
        <div className="pd-container">
          <nav className="pd-breadcrumb">
            <Link href="/products">Products</Link>
            <span className="pd-crumb-sep">›</span>
            <Link href="/products#iest-products">IEST Characterization &amp; Testing Instruments</Link>
            <span className="pd-crumb-sep">›</span>
            <span className="pd-crumb-current">{product.name}</span>
          </nav>

          <div className="pd-grid">
            <motion.div className="pd-left" initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.55 }}>
              {(product.carouselImages?.length ?? 0) === 1 ? (
                <div className="carousel-root">
                  <img src={product.carouselImages![0]} alt={product.name} className="carousel-img" />
                </div>
              ) : (product.carouselImages?.length ?? 0) > 1 ? (
                <ImageCarousel slides={product.carouselImages!} />
              ) : null}
            </motion.div>

            <motion.div className="pd-right" initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.55, delay: 0.1 }}>
              <p className="pd-category-tag">{product.iestCategory}</p>
              <h1 className="pd-title">{product.name}</h1>
              {product.model && <p className="iest-model-badge">Model: {product.model}</p>}
              <hr className="pd-divider" />
              <p className="pd-description">{product.description}</p>
              <div className="pd-accordions">
                <AccordionSection
                  title="Features"
                  items={product.features ?? []}
                  isOpen={openSection === "features"}
                  onToggle={() => toggleIEST("features")}
                />
                <AccordionSection
                  title="Applications"
                  items={product.applications ?? []}
                  isOpen={openSection === "applications"}
                  onToggle={() => toggleIEST("applications")}
                />
              </div>
            </motion.div>
          </div>

          <section className="iest-inquiry-section">
            <div className="pd-supplements-divider" />
            <h2 className="pd-supplements-title">Inquire About This Product</h2>
            <IESTProductInquiryForm productName={product.name} />
          </section>
        </div>
      </main>
    );
  }

  // ─── EnerTest layouts (standard + advanced) ─────────────────────────────────
  // Adapt Sanity data to the shape the layout components expect
  const adaptedProduct = {
    slug: product.slug,
    name: product.name,
    image: product.image ?? undefined,
    description: product.description ?? undefined,
    comingSoon: product.comingSoon,
  };
  const adaptedCategory = {
    id: categoryInfo?.categoryId ?? "",
    title: categoryInfo?.title ?? "",
    description: "",
    subcategories: [],
  };

  return (
    <main className="pd-main">
      <Navbar />
      <div className="pd-container">
        <nav className="pd-breadcrumb">
          <Link href="/products">Products</Link>
          <span className="pd-crumb-sep">›</span>
          <Link href={`/products#${adaptedCategory.id}`}>{adaptedCategory.title}</Link>
          <span className="pd-crumb-sep">›</span>
          <span className="pd-crumb-current">{product.name}</span>
        </nav>

        {product.layout === "advanced" ? (
          <AdvancedProductLayout
            product={adaptedProduct as any}
            category={adaptedCategory as any}
            data={product as any}
          />
        ) : (
          <StandardProductLayout
            product={adaptedProduct as any}
            category={adaptedCategory as any}
            data={product as any}
          />
        )}
      </div>
    </main>
  );
}
