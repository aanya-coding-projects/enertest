"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroVideo from "@/components/HeroVideo";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import ValuePropStepper from "@/components/ValuePropStepper";
import CustomerReferencesMarquee from "@/components/CustomerReferencesMarquee";
import type { SanityHomePage, SanityCaseStudy } from "@/sanity/lib/types";

const DEFAULT_SOLUTIONS = [
  { _key: "1", title: "Test System Solutions", description: "Raw Material Testing. Finished Product Testing (Cell / System Level).", image: "/Images/product1.png", isSpecial: false },
  { _key: "2", title: "Production & Automation", description: "Cell Manufacturing Lines. Sorting Systems. Module & Pack Assembly Lines.", image: "/Images/products/Pro48.png", isSpecial: false },
  { _key: "3", title: "Engineering Services", description: "Systems Engineering & Integration. Onsite & Remote Technical Support. Automation / Utility Software & Test Logic. Custom Test Tools & Fixtures. Localization & Compliance Support.", image: "/Images/prod7.png", isSpecial: false },
  { _key: "4", title: "Maintenance & Auxiliary Systems", description: "Balancers. Recharge Units. Other Equipment.", image: "/Images/aftersales/hv-pack-test-cable.png", isSpecial: true },
];

const DEFAULT_STEPS = [
  { highlight: "Industry-proven equipment", rest: " backed by mature battery manufacturing technology; not prototype-stage gear." },
  { highlight: "Local U.S. engineering", rest: " from concept through commissioning; no overseas support lag." },
  { highlight: "Faster ramp-up", rest: " through curated suppliers, system integration, and ROI-focused project management." },
  { highlight: "UL / NFPA / NEC compliance", rest: " built in; localization and safety standardization handled from day one." },
];

type Props = {
  data: SanityHomePage | null;
  caseStudies: SanityCaseStudy[];
};

export default function HomeClient({ data, caseStudies }: Props) {
  const solutions = data?.solutions?.length ? data.solutions : DEFAULT_SOLUTIONS;
  const [activeTab, setActiveTab] = useState(0);

  const heroTitle = data?.heroTitle ?? "Battery Testing & Manufacturing Solutions";
  const heroSubtitle = data?.heroSubtitle ?? "We provide installations";
  const vpTag = data?.valuePropTag ?? "WHY ENERTEST";
  const vpHeadline = data?.valuePropHeadline ?? "The U.S. battery industry\nhas a gap. We fill it.";
  const vpSubtext = data?.valuePropSubtext ?? "Few U.S. suppliers combine real battery manufacturing experience with local engineering support. EnerTest does both.";
  const vpSteps = data?.valuePropSteps?.length ? data.valuePropSteps : DEFAULT_STEPS;
  const capTag = data?.capabilitiesTag ?? "CAPABILITIES";
  const capHeadline = data?.capabilitiesHeadline ?? "From Cells to Complete Energy Systems. Engineered, Installed, Optimized.";
  const capSubheadline = data?.capabilitiesSubheadline ?? "Reliable engineering, automation, and integration.";

  return (
    <main className="main-container">
      <Navbar />

      {/* Hero */}
      <section className="hero">
        <HeroVideo />
        <div className="hero-overlay" />
        <div className="hero-content">
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {heroTitle}
          </motion.h1>
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            {heroSubtitle}
          </motion.p>
        </div>
      </section>

      <CustomerReferencesMarquee refs={caseStudies} />

      {/* Value Proposition */}
      <section className="value-prop-section">
        <div className="vp-container">
          <span className="cap-tag">{vpTag}</span>
          <h2 className="vp-headline">
            {vpHeadline.split("\n").map((line, i) => (
              <span key={i}>{line}{i < vpHeadline.split("\n").length - 1 && <br />}</span>
            ))}
          </h2>
          <p className="vp-subtext">{vpSubtext}</p>
          <ValuePropStepper steps={vpSteps} />
          <Link href="/about" className="vp-learn-link">
            Learn more about us <span className="vp-arrow">→</span>
          </Link>
        </div>
      </section>

      {/* Capabilities */}
      <section className="capabilities-section">
        <div className="capabilities-container">
          <span className="cap-tag">{capTag}</span>
          <h2 className="cap-headline">{capHeadline}</h2>
          <p className="cap-subheadline">{capSubheadline}</p>

          <div className="cap-layout-grid">
            <div className="cap-tabs-column">
              {solutions.map((category, idx) => {
                const isActive = activeTab === idx;
                return (
                  <div key={category._key} className="cap-tab-item" onClick={() => setActiveTab(idx)}>
                    <div className={`cap-indicator-line ${isActive ? "visible" : ""}`} />
                    <h3 className={`cap-tab-title ${isActive ? "active" : ""}`}>{category.title}</h3>
                    <div className={`cap-description-box ${isActive ? "open" : ""}`}>
                      <p className="cap-description-text">{category.description}</p>
                      <Link href={category.isSpecial ? "/quote" : "/products"} className="explore-link">
                        {category.isSpecial ? "Request a Quote →" : "Explore More →"}
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="cap-visual-column">
              <div className="cap-image-viewport">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeTab}
                    src={solutions[activeTab]?.image ?? ""}
                    alt="System Unit"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2, ease: "linear" }}
                    className="cap-product-img"
                  />
                </AnimatePresence>
              </div>
              <Link href="/products" className="explore-products-bottom-link">
                Explore More Products →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
