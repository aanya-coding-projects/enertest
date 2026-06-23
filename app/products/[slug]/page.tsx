"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { ShoppingCart, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import { getProductBySlug } from "@/data/products";
import { getStoreProductById } from "@/data/storeProducts";
import { useCart } from "@/context/CartContext";

// ─── Product data ─────────────────────────────────────────────────────────────
// carouselImages: 4 paths, can repeat the same image if you only have one.
// supplements: inline images/diagrams shown directly on the page (not clickable cards).

// ─── Types ────────────────────────────────────────────────────────────────────

type Supplement = {
  label: string;
  src: string;
  description?: string;
};

type ProductEntry = {
  applications: string[];
  features: string[];
  carouselImages: string[];
  supplements: Supplement[];
  supplementLayout?: "stacked" | "row4";
  gallery?: { label: string; src: string }[];
};

// ─── Product data ─────────────────────────────────────────────────────────────

const PRODUCT_DATA: Record<string, ProductEntry> = {
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
    supplementLayout: "stacked",
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
    supplementLayout: "stacked",
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
    supplements: [],
    supplementLayout: "stacked",
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
      { label: "System Overview", src: "/Images/products/Pro18.png" },
      { label: "Module Architecture", src: "/Images/products/Pro19.png" },
    ],
    supplementLayout: "stacked",
  },

  "cell-climatic-chamber": {
    carouselImages: [
      "/Images/products/Pro28.png",
      "/Images/products/Pro29.png",
      "/Images/products/Pro30.png",
    ],
    applications: [
      "High and low temperature testing of battery cells",
      "Humidity and damp heat environmental simulation",
      "Reliability testing under extreme conditions",
      "R&D validation for electrochemical performance",
      "Quality assurance for battery lifecycle durability",
    ],
    features: [
      "Simulates wide temperature and humidity environments",
      "Supports high and low temperature cycling tests",
      "Damp heat testing for environmental durability validation",
      "High precision temperature and humidity control",
      "Advanced cold balance control mode for energy efficiency",
      "PID control technology for stable environmental regulation",
      "Automatic return-to-normal temperature after test completion for DUT protection",
      "Unique air circulation design reduces dew formation under extreme conditions",
      "Long-term stable operation (1000+ hours) with anti-frost performance",
      "Intelligent compressor control to reduce start/stop frequency and extend lifespan",
      "High sealing performance for long-duration testing stability",
    ],
    supplements: [
      { label: "System Overview", src: "/Images/products/Pro31.png" },
    ],
    supplementLayout: "stacked",
  },

  "battery-emulator": {
    carouselImages: ["/Images/products/Pro20.png"],
    applications: [
      "Research and development testing of battery systems",
      "Production testing for OEMs and auto-parts suppliers",
      "Motor controller validation",
      "Drive motor testing",
      "Vehicle assembly verification",
      "Simulation of battery charge and discharge characteristics",
      "Testing under different battery types and SOC conditions",
    ],
    features: [
      "DC source mode",
      "Battery output characteristic simulation",
      "Customizable battery models",
      "Output simulation based on Simulink battery models (Optional)",
      "Voltage compensation",
      "Energy measurement",
      "Wide output range of voltage and current",
      "High precision output with high resolution",
      "Fast dynamic response in 3–6 ms",
      "Multiple filtering solutions to eliminate load impact",
      "Ripple superposition (Optional)",
      "Fast CAN communication (1 ms)",
      "Standard communication interfaces: RS485 / CAN / LAN / EtherCAT (Optional)",
    ],
    supplements: [
      { label: "Technical Specifications", src: "/Images/products/Pro21.png" },
    ],
    supplementLayout: "stacked",
  },
  "cell-sorting-system": {
    carouselImages: ["/Images/products/Pro48.png"],
    applications: [
      "Sorting 21700 cylindrical cells by voltage and internal resistance",
      "Battery pack assembly quality assurance",
      "OEM cell processing with direct packaging compatibility",
      "High-speed production line cell grading",
      "Factory safety-compliant cell handling and sorting",
    ],
    features: [
      "Specifically designed for 21700 cylindrical cells with or without insulation sleeve",
      "Compatible with direct OEM packaging — simplifies preparation steps",
      "OCV measurement via Kelvin Four-terminal Sensing for highest accuracy and reliability",
      "High-precision PLC controlled gantry robots for consistent throughput",
      "Configurable to factory desired production speed",
      "Highest standard operational safety features supporting factory safety compliance",
      "Highly automated end-to-end sorting process",
    ],
    supplements: [
      {
        label: "System in Operation",
        src: "/Videos/CellSort.mp4",
        description: "ET 21700 sorting machine running at production speed.",
      },
      {
        label: "See Full Video →",
        src: "https://www.youtube.com/watch?v=vSeebkoyhn8",
      },
    ],
    supplementLayout: "stacked",
  },

  "chamber-with-integrated-cycler": {
    carouselImages: ["/Images/products/Pro32.png"],
    applications: [
      "Battery cell development and validation under controlled environments",
      "Large-scale cell testing with cost and space optimization",
      "Lengthy runtime testing with high channel count",
      "Cell formation and grading in temperature-controlled conditions",
      "Quality assurance for battery manufacturers",
    ],
    features: [
      "Initial capital investment 10–15% lower than conventional setup",
      "Balanced charge/discharge channels — more channels, more saving",
      "Potential energy saving of 20–35%",
      "Cell test fixtures customizable to customer specification as part of turn-key solution",
      "Up to 20% cost saving potential",
      "Around 30% facility space saving",
    ],
    supplements: [
      {
        label: "Cell Test Fixture Demo",
        src: "/Videos/CellTest.mp4",
        description: "Customizable cell test fixtures as part of a turn-key solution.",
      },
      { label: "System Specs", src: "/Images/products/Pro33.png" },
    ],
    supplementLayout: "stacked",
  },

  "module-pack-climatic-chamber": {
    carouselImages: [
      "/Images/products/Pro34.png",
      "/Images/products/Pro35.png",
      "/Images/products/Pro36.png",
    ],
    applications: [
      "EV battery pack testing under controlled temperature and humidity",
      "ESS battery cluster environmental validation",
      "Full vehicle testing under extreme climate conditions",
      "Constant high and low temperature endurance testing",
      "Constant humidity and damp heat simulation",
      "Temperature and humidity alternating cycle testing",
    ],
    features: [
      "Designed for large-format DUTs including EV packs, ESS clusters, and full vehicles",
      "Interior and exterior chamber size fully customizable to customer requirements",
      "Highest standard fire suppression system for safe operation in challenging test cases",
      "Constant temperature and humidity control",
      "Temperature and humidity alternating change simulation",
      "Turn-key customization available",
    ],
    supplements: [
      { label: "System Specs", src: "/Images/products/Pro37.png" },
      {
        label: "Chamber Overview",
        src: "/Videos/Module1.mp4",
        description: "Walk-in chamber configuration and interior layout.",
      },
      {
        label: "System in Operation",
        src: "/Videos/Module2.mp4",
        description: "TOF Series chamber operating under test conditions.",
      },
    ],
    supplementLayout: "stacked",
  },

  "battery-test-chiller": {
    carouselImages: [
      "/Images/products/Pro38.png",
      "/Images/products/Pro39.png",
      "/Images/products/Pro40.png",
      "/Images/products/Pro41.png",
      "/Images/products/Pro42.png",
    ],
    applications: [
      "EV and ESS battery pack charge/discharge testing",
      "Battery thermal performance and characteristics testing",
      "Battery cooling system validation",
      "Battery pack reliability testing",
      "Precise temperature control during battery evaluation",
      "Thermal condition simulation for electric vehicle applications",
    ],
    features: [
      "Operating temperature range: -30°C to 85°C",
      "Precise temperature control throughout the test process",
      "Designed for EV and ESS battery pack testing environments",
      "Maintains consistent thermal conditions across charge/discharge cycles",
      "Supports battery cooling system validation workflows",
      "Compatible with battery pack reliability test programs",
    ],
    supplements: [
      { label: "System Specs", src: "/Images/products/Pro43.png" },
      {
        label: "Watch Product Video →",
        src: "https://www.youtube.com/watch?v=f4ddg4skPxk",
      },
    ],
    supplementLayout: "stacked",
  },

  "cell-jigs-and-fixture": {
    carouselImages: [],
    applications: [],
    features: [],
    supplements: [],
    supplementLayout: "stacked",
    gallery: [
      { label: "Prismatic Cell Fixture", src: "/Images/products/Pro44.png" },
      { label: "Multi-Channel Fixture Rack", src: "/Images/products/Pro45.png" },
      { label: "Empty Battery Rack", src: "/Images/products/Pro46.png" },
      { label: "Cell Expansion Test Fixture", src: "/Images/products/Pro47.png" },
    ],
  },

  "simulation-based-testing": {
    carouselImages: [
      "/Images/products/Pro22.png",
      "/Images/products/Pro23.png",
      "/Images/products/Pro22.png",
      "/Images/products/Pro23.png",
    ],
    applications: [
      "Development of xCU systems for electric vehicles",
      "Hardware-in-the-loop (HIL) test systems",
      "Automotive communication and I/O testing",
      "Diagnosis and calibration workflows",
      "Rapid test bench deployment",
    ],
    features: [
      "Communication boards for CAN FD, CAN, Automotive Ethernet, FlexRay, and LIN",
      "Digital I/O board",
      "Analog I/O boards",
      "Relays and fault insertion boards",
      "Sensor simulation resistors",
      "Minimum wiring effort for test setup",
      "Automotive-grade voltage range",
      "Seamless integration into TSMaster",
    ],
    supplementLayout: "row4",
    supplements: [
      {
        label: "TTS9015",
        src: "/Images/products/Pro24.png",
        description:
          "8-channel analog I/O board with CAN bus communication. Each channel supports voltage acquisition, voltage output, current acquisition, and current output. Designed to be embedded in the TTS chassis and integrated into other devices or software systems.",
      },
      {
        label: "TTS9021",
        src: "/Images/products/Pro25.png",
        description:
          "Fault injection board with 6 channels capable of injecting 4 different fault types. Controlled via CAN message commands for precise, repeatable fault simulation.",
      },
      {
        label: "TTS9015 — Analog Acquisition",
        src: "/Images/products/Pro26.png",
        description:
          "Multifunctional analog acquisition board with 8 independent input/output channels. Supports voltage output mode with full voltage function output, embedded in the TTS chassis.",
      },
      {
        label: "TTS System Integration",
        src: "/Images/products/Pro27.png",
        description:
          "Full TTS system integration overview showing chassis layout, board slots, and wiring architecture for rapid test bench deployment.",
      },
    ],
  },
};

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

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ProductPage() {
  const params = useParams();
  const slug = typeof params.slug === "string" ? params.slug : "";

  const result = getProductBySlug(slug);
  if (!result) notFound();

  const { product, category } = result;
  const data = PRODUCT_DATA[slug];

  const carouselSlides: string[] = data?.carouselImages ?? (product.image ? [product.image] : []);

  const [openSection, setOpenSection] = useState<"applications" | "features" | null>("applications");
  const toggle = (s: "applications" | "features") =>
    setOpenSection((prev) => (prev === s ? null : s));

  const hasSupplements = data?.supplements && data.supplements.filter(s => s.src).length > 0;
  const isGalleryOnly = data?.gallery && data.gallery.length > 0 && carouselSlides.length === 0;

  return (
    <main className="pd-main">
      <Navbar />

      <div className="pd-container">
        {/* Breadcrumb */}
        <nav className="pd-breadcrumb">
        <Link href="/products">Products</Link>
        <span className="pd-crumb-sep">›</span>
        <Link href={`/products#${category.id}`}>{category.title}</Link>
        <span className="pd-crumb-sep">›</span>
        <span className="pd-crumb-current">{product.name}</span>
      </nav>

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
              {product.description && <p className="pd-description">{product.description}</p>}
              <Link href="/contact" className="pd-cta-link">
                Interested in this product? Get in touch →
              </Link>
            </motion.div>

            <section className="pd-supplements">
              <div className="pd-supplements-divider" />
              <h2 className="pd-supplements-title">Product Range</h2>
              <GalleryGrid items={data.gallery!} />
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
                    <img src={carouselSlides[0]} alt={product.name} className="carousel-img" />
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

                {data && data.applications.length > 0 && data.features.length > 0 && (
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

                <Link href="/contact" className="pd-cta-link">
                  Interested in this product? Get in touch →
                </Link>
              </motion.div>
            </div>

            {/* Supplementary section */}
            {hasSupplements && (
              <section className="pd-supplements">
                <div className="pd-supplements-divider" />
                <h2 className="pd-supplements-title">Technical Resources</h2>

                {data.supplementLayout === "row4" ? (
                  <div className="pd-supplements-row4">
                    {data.supplements.filter(s => s.src).map((s, i) => (
                      <SupplementCard key={i} index={i} {...s} />
                    ))}
                  </div>
                ) : (
                  data.supplements.filter(s => s.src).map((s, i) => (
                    <SupplementStacked key={i} index={i} src={s.src} label={s.label} />
                  ))
                )}
              </section>
            )}
          </>
        )}
      </div>
    </main>
  );
}