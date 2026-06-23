"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroVideo from "@/components/HeroVideo";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import ValuePropStepper from "@/components/ValuePropStepper";

interface SolutionCategory {
  id: number;
  title: string;
  description: string;
  image: string;
  isSpecial?: boolean;
}

const solutionsData: SolutionCategory[] = [
  {
    id: 1,
    title: "Test System Solutions",
    description: "Raw Material Testing. Finished Product Testing (Cell / System Level).",
    image: "/Images/product1.png",
  },
  {
    id: 2,
    title: "Production & Automation",
    description: "Cell Manufacturing Lines. Sorting Systems. Module & Pack Assembly Lines.",
    image: "/Images/products/Pro48.png",
  },
  {
    id: 3,
    title: "Engineering Services",
    description: "Systems Engineering & Integration. Onsite & Remote Technical Support. Automation / Utility Software & Test Logic. Custom Test Tools & Fixtures. Localization & Compliance Support.",
    image: "/Images/prod7.png",
  },
  {
    id: 4,
    title: "Maintenance & Auxiliary Systems",
    description: "Balancers. Recharge Units. Other Equipment.",
    image: "/Images/product4.png",
    isSpecial: true,
  },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState<number>(1);

  const logos = Array.from(
    { length: 11 },
    (_, i) => `/Images/logo${i + 1}.png`
  );

  return (
    <main className="main-container">
      <Navbar />

      {/* 1. Hero Section */}
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
            Battery Testing & Manufacturing Solutions
          </motion.h1>
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            We provide installations
          </motion.p>
        </div>
      </section>

      {/* 2. Partners / Clients Section */}
      <section className="clients-section">
        <motion.h2
          className="clients-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Our Partners
        </motion.h2>
        <motion.div
          className="clients-track-wrapper"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <div className="clients-track">
            {[...logos, ...logos].map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`client logo ${i + 1}`}
                className="client-logo"
              />
            ))}
          </div>
        </motion.div>
      </section>
      
      {/* Value Proposition Section */}
      <section className="value-prop-section">
        <div className="vp-container">
          <span className="cap-tag">WHY ENERTEST</span>
          <h2 className="vp-headline">
            The U.S. battery industry<br />has a gap. We fill it.
          </h2>
          <p className="vp-subtext">
            Few U.S. suppliers combine real battery manufacturing experience with local engineering support. EnerTest does both.
          </p>
          <ValuePropStepper />
          <Link href="/about" className="vp-learn-link">
            Learn more about us <span className="vp-arrow">→</span>
          </Link>
        </div>
      </section>

      {/* 3. Capabilities Section */}
      <section className="capabilities-section">
        <div className="capabilities-container">
          
          <span className="cap-tag">CAPABILITIES</span>
          <h2 className="cap-headline">
            From Cells to Complete Energy Systems — Engineered, Installed, Optimized.
          </h2>
          <p className="cap-subheadline">
            Reliable engineering + automation + integration.
          </p>

          <div className="cap-layout-grid">
            
            {/* Left Side: Navigation Links */}
            <div className="cap-tabs-column">
              {solutionsData.map((category) => {
                const isActive = activeTab === category.id;

                return (
                  <div
                    key={category.id}
                    className="cap-tab-item"
                    onClick={() => setActiveTab(category.id)}
                  >
                    {/* Dark Green Top Active Indicator Bar */}
                    <div className={`cap-indicator-line ${isActive ? "visible" : ""}`} />

                    {/* Standard Title for all items - light green when active */}
                    <h3 className={`cap-tab-title ${isActive ? "active" : ""}`}>
                      {category.title}
                    </h3>

                    <div className={`cap-description-box ${isActive ? "open" : ""}`}>
                      <p className="cap-description-text">{category.description}</p>
                      
                      {/* Sub-section link mapping based on type */}
                      {category.isSpecial ? (
                        <Link href="/store" className="explore-link special-store-link">
                          Store ↗
                        </Link>
                      ) : (
                        <Link href="/products" className="explore-link">
                          Explore More →
                        </Link>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Side: Visual Container */}
            <div className="cap-visual-column">
              <div className="cap-image-viewport">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeTab}
                    src={solutionsData.find((c) => c.id === activeTab)?.image}
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