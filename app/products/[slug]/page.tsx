"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import { getProductBySlug } from "@/data/products";

// ─── Product data ─────────────────────────────────────────────────────────────
// carouselImages: 4 paths, can repeat the same image if you only have one.
// supplements: inline images/diagrams shown directly on the page (not clickable cards).

const PRODUCT_DATA: Record<string, {
  applications: string[];
  features: string[];
  carouselImages: [string, string, string, string];
  supplements: { label: string; src: string }[];
}> = {
  "battery-cell-cycler": {
    carouselImages: [
      "/Images/products/Pro1.png",
      "/Images/products/Pro2.png",
      "/Images/products/Pro3.png",
      "/Images/products/Pro4.png",
    ],
    applications: [
      "Cell formation and capacity sorting",
      "DCIR testing",
      "Electrochemical and physical material research",
      "Laboratory testing of battery cells",
      "Quality assurance & failure analysis",
      "EV simulation working condition testing",
      "Battery repurposing and recycling",
    ],
    features: [
      "Intuitive automation control software with powerful test-run editing capabilities",
      "NTC or K-type thermocouple associated with each test channel",
      "Control modes: CC, CV, CP, CR, Pulse, and simulated working conditions",
      "I/O ports for integration of external equipment",
      "Data security against power outage",
      "High-frequency between-channel isolation",
      "Integration of cell expansion test system possible",
      "Customizable power cable length",
      "Battery racks, fixtures, and automated calibration instruments available upon request",
    ],
    supplements: [
      { label: "System Overview", src: "/Images/products/Pro5.png" },
      { label: "Channel Detail", src: "/Images/products/Pro6.png" },
    ],
  },

  "cell-formation-power-electronics": {
    carouselImages: [
      "/Images/products/Pro7.png",
      "/Images/products/Pro8.png",
      "/Images/products/Pro9.png",
      "/Images/products/Pro10.png",
    ],
    applications: [
      "Cell formation and grading",
      "Power electronics validation testing",
      "High-efficiency energy conversion systems",
      "Battery production line integration",
      "Industrial-scale formation equipment",
    ],
    features: [
      "Innovative 2-Stage DC Busbar Architecture",
      "Highest energy conversion efficiency (>80%)",
      "Cost-effective cell testing channel design",
      "Modular hardware design for easy maintenance and scalability",
      "Compact footprint for optimized factory space utilization",
    ],
    supplements: [
      { label: "System Overview", src: "/Images/products/Pro11.png" },
      { label: "Architecture Detail", src: "/Images/products/Pro12.png" },
    ],
  },
  "cell-expansion-test-kit": {
    carouselImages: [
      "/Images/products/Pro13.png",
      "/Images/products/Pro14.png",
      "/Images/products/Pro15.png",
      "/Images/products/Pro15.png",

    ],
    applications: [
      "Measurement of battery cell swelling during charge and discharge cycles",
      "Simulation of real-world operating conditions",
      "Research and development of lithium-ion cells",
      "Cell performance characterization and validation",
      "Quality control and reliability analysis",
    ],
    features: [
      "High-precision servo motor control system",
      "Integrated thickness and expansion force measurement sensors",
      "Multi-channel data logging system",
      "Accurate quantification of cell swelling behavior",
      "Real-time monitoring throughout charge and discharge cycles",
      "Offline software tool for reviewing and analyzing recorded data",
      "Designed to replicate practical battery operating conditions",
    ],
    supplements: [
        { label: "", src: "" },
        { label: "", src: "" },
    ],
    
  },
   "battery-module-pack-cycler": {
    carouselImages: [
      "/Images/products/Pro16.png",
      "/Images/products/Pro17.png",
      "/Images/products/Pro16.png",
      "/Images/products/Pro17.png",
    ],
  applications: [
    "Life cycle testing",
    "Capacity measurement",
    "Performance evaluation under different conditions",
    "Quality control",
    "Battery Management System (BMS) validation",
    "Electric vehicle battery module testing",
    "Energy storage system applications",
  ],
  features: [
    "Repeated charge and discharge cycling for module characterization",
    "Comprehensive analysis of battery performance, capacity, and lifespan",
    "Identification of degradation, safety concerns, and efficiency issues",
    "Supports quality assurance and reliability assessment",
    "Ideal for electric vehicles, energy storage systems, and rechargeable battery applications",
    "Enables validation and optimization of Battery Management Systems (BMS)",
  ],
  supplements: [
    {
      label: "System Overview",
      src: "/Images/products/Pro18.png",
    },
    {
      label: "Module Architecture",
      src: "/Images/products/Pro19.png",
    },
  ],
},
};
// ─── Carousel ─────────────────────────────────────────────────────────────────

function ImageCarousel({ slides }: { slides: string[] }) {
    const [current, setCurrent] = useState(0);

    const nextImage = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
    };

    const prevImage = () => {
    setCurrent((prev) =>
    prev === 0 ? slides.length - 1 : prev - 1
    );
    };

    return ( <div className="carousel-root"> <AnimatePresence mode="wait">
    <motion.img
    key={current}
    src={slides[current]}
    alt={`Product view ${current + 1}`}
    className="carousel-img"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{
    duration: 0.3,
    ease: "easeInOut",
    }}
    /> </AnimatePresence>

    {slides.length > 1 && (
        <>
        <button
            className="carousel-arrow carousel-arrow-left"
            onClick={prevImage}
            aria-label="Previous image"
        >
            ‹
        </button>

        <button
            className="carousel-arrow carousel-arrow-right"
            onClick={nextImage}
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
  title, items, isOpen, onToggle,
}: {
  title: string; items: string[]; isOpen: boolean; onToggle: () => void;
}) {
  return (
    <div className={`accordion-section ${isOpen ? "open" : ""}`}>
      <button className="accordion-header" onClick={onToggle}>
        <span className={`accordion-title ${isOpen ? "active" : ""}`}>{title}</span>
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

// ─── Inline supplement image ──────────────────────────────────────────────────

function SupplementImage({ src, label, index }: { src: string; label: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      className="supplement-img-wrap"
      initial={{ opacity: 0, y: 24 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.12, ease: "easeOut" }}
    >
      <img src={src} alt={label} className="supplement-inline-img" />
      {label && <p className="supplement-inline-label">{label}</p>}
    </motion.div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ProductPage() {
  const params = useParams();
  const slug = typeof params.slug === "string" ? params.slug : "";

  const result = getProductBySlug(slug);
  if (!result) notFound();

  const { product, category } = result;
  const data = PRODUCT_DATA[slug];

  // Carousel: use PRODUCT_DATA if available, otherwise fall back to product.image repeated
  const carouselSlides: string[] = data?.carouselImages
    ?? (product.image ? [product.image] : []);

  const [openSection, setOpenSection] = useState<"applications" | "features" | null>("applications");
  const toggle = (s: "applications" | "features") =>
    setOpenSection((prev) => (prev === s ? null : s));

  return (
    <main className="pd-main">
      <Navbar />

      <div className="pd-container">
        {/* Breadcrumb */}
        <nav className="pd-breadcrumb">
          <Link href="/products">Products</Link>
          <span className="pd-crumb-sep">›</span>
          <span>{category.title}</span>
          <span className="pd-crumb-sep">›</span>
          <span className="pd-crumb-current">{product.name}</span>
        </nav>

        {/* Two-column layout */}
        <div className="pd-grid">
          {/* LEFT */}
          <motion.div
            className="pd-left"
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55 }}
          >
            {carouselSlides.length > 0 && <ImageCarousel slides={carouselSlides} />}
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

{data && (
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

<Link href="/contact" className="pd-cta-btn">
  Interested in this product? →
</Link>
          </motion.div>
        </div>

        {/* Supplementary images — inline, no cards */}
        {data?.supplements && data.supplements.length > 0 && (
          <section className="pd-supplements">
            <h2 className="pd-supplements-title">Technical Resources</h2>
            <div className="pd-supplements-grid">
              {data.supplements.map((s, i) => (
                <SupplementImage key={i} index={i} src={s.src} label={s.label} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}