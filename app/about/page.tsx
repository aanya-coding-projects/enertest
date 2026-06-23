"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Link from "next/link";

const strengths = [
  {
    
    title: "Access to Leading Manufacturing Resources",
    items: [
      "Access to proven battery equipment makers in Asia",
      "Coverage from cell to module and pack level",
      "Competitive cost and lead time",
      "Support for customization and solution optimization",
    ],
  },
  {
    title: "Battery Manufacturing Process Expertise",
    items: [
      "Deep understanding of key module and pack processes",
      "Equipment selection matched to process flow",
      "Design focused on consistency, takt time, and yield",
      "Problem-solving for real production scenarios",
    ],
  },
  {
    title: "Compliance-Driven Engineering",
    items: [
      "UL / NFPA / NEC design understanding",
      "Localized HMI and electrical standards",
      "Safer implementation for U.S. projects",
      "Reduced downstream rework risk",
    ],
  },
  {
    title: "Local Execution & Project Management",
    items: [
      "Local technical sales and engineering support",
      "On-site installation and commissioning",
      "FAT / SAT coordination",
      "After-sales response and closed-loop problem solving",
    ],
  },
];

const processSteps = [
  { num: "01", title: "Requirements & RFQ Alignment", desc: "We listen first. Our team works with you to define performance specs, site constraints, and project scope before anything is proposed." },
  { num: "02", title: "Technical Review & System Design", desc: "Our engineers conduct a thorough review and design a system architecture tailored to your chemistry, throughput, and compliance requirements." },
  { num: "03", title: "Proposal / Contract", desc: "You receive a detailed technical proposal with full scope of supply, delivery timeline, and commercial terms — no hidden scoping." },
  { num: "04", title: "System Integration & FAT", desc: "Equipment is assembled and validated at the factory through a Factory Acceptance Test before any shipment." },
  { num: "05", title: "Installation, Commissioning & SAT", desc: "Our team installs, configures, and validates the system at your site with a Site Acceptance Test to confirm full operational readiness." },
  { num: "06", title: "Training & System Handover", desc: "We train your operators and engineers on the system until they are fully confident. Documentation is provided in full." },
  { num: "07", title: "Technical Support & Long-Term Service", desc: "Ongoing technical support, calibration, and maintenance services ensure your line keeps running at peak performance." },
];

const customers = [
  { type: "OEMs & Vehicle Manufacturers", names: "Ford · Tesla · Mercedes-Benz" },
  { type: "Battery Manufacturers", names: "CATL · BYD · Farasis" },
  { type: "Testing & Certification Labs", names: "Eurofins" },
  { type: "Industrial & Energy Companies", names: "Briggs & Stratton · Re-Tech" },
  { type: "Academic Institutions", names: "Henry Ford College · Tennessee Tech" },
];

const caseStudies = [
  {
    location: "Auburn Hills, MI",
    equipment: ["Battery Cell/Module/Pack Cycler", "Double-deck Battery Cell Climatic Test Chamber", "Double-deck Battery Pack Climatic Test Chamber", "BMS HiL Test System", "Customization Testing Instrumentation & Accessories"],
    services: "Engineering design, commissioning and application support",
  },
  {
    location: "Tuscaloosa, AL",
    equipment: ["Battery Module/Pack Cycler", "Walk-In Battery Test Chamber"],
    services: "Engineering design, commissioning and application support",
  },
  {
    location: "Stone Mountain, GA",
    equipment: ["Battery Manufacture Line System"],
    services: "Engineering design, machine build, commissioning and production support",
  },
  {
    location: "Reno, NV",
    equipment: ["QA Lab Equipment", "IQC Equipment", "Battery Testing Accessories and Parts"],
    services: "Commissioning and Application Support",
  },
  {
    location: "La Puente, CA",
    equipment: ["Battery Cell Cycler 5V300A8CH"],
    services: "Commissioning, Training and Application Support",
  },
  {
    location: "Sunnyvale, CA",
    equipment: ["Battery Cell Cyclers", "Battery Module/Pack Cyclers"],
    services: "Commissioning, Training and Application Support",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true as const },
  transition: { duration: 0.6 },
};

export default function AboutPage() {
  return (
    <main className="about-main">
      <Navbar />

      {/* Hero */}
      <section className="about-hero">
        <video className="about-hero-video" src="/Videos/Aboutt.mp4" autoPlay loop muted playsInline />
        <div className="about-hero-overlay" />
        <div className="about-hero-inner">
          <motion.span className="cap-tag" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            ABOUT US
          </motion.span>
          <motion.h1 className="about-hero-title" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}>
            A trusted engineering partner for battery testing and production system integration.
          </motion.h1>
          <motion.p className="about-hero-sub" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            Based in the United States. Built for the U.S. battery industry.
          </motion.p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="about-section">
        <div className="about-section-inner">
          <div className="about-two-col">
            <motion.div {...fadeUp}>
              <span className="cap-tag">WHO WE ARE</span>
              <h2 className="about-section-title">We are not just an equipment seller.</h2>
              <p className="about-section-body">
                EnerTest Solutions is an engineering-focused team with solid experience in battery manufacturing and testing.
                We design and implement turnkey battery testing systems — acting as an extension of the customer engineering team
                throughout design, implementation, and optimization.
              </p>
              <p className="about-section-body">
                We help customers build long-term, sustainable battery testing and manufacturing capability.
                Our U.S.-based team provides complete project delivery: technical sales, on-site installation and commissioning,
                after-sales service, and project management.
              </p>
              <p className="about-section-body">
                Strategic access to leading battery manufacturing and test-equipment partners in Asia ensures
                advanced technology and competitive delivery timelines.
              </p>
            </motion.div>

            <motion.div className="about-stats-grid" {...fadeUp} transition={{ duration: 0.6, delay: 0.15 }}>
              {[
                { num: "7", label: "Step Project Process" },
                { num: "5+", label: "Customer Segments Served" },
                { num: "10+", label: "Completed U.S. Projects" },
                { num: "100%", label: "U.S.-Based Engineering" },
              ].map(s => (
                <div key={s.label} className="about-stat">
                  <span className="about-stat-num">{s.num}</span>
                  <span className="about-stat-label">{s.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pain Points & Value */}
      <section className="about-section about-section-gray">
        <div className="about-section-inner">
          <div className="about-two-col">
            <motion.div {...fadeUp}>
              <span className="cap-tag">INDUSTRY PAIN POINTS</span>
              <h2 className="about-section-title">What problems do we solve?</h2>
              <ul className="about-pain-list">
                {[
                  "Few U.S.-based suppliers with real battery cell, module, and pack production line experience.",
                  "Local suppliers are often expensive and slow to deliver, making ramp-up difficult.",
                  "Many overseas equipment makers lack stable local engineering support.",
                  "Slow after-sales response affects uptime, maintenance, and line optimization.",
                  "Some equipment is not fully prepared for U.S. safety requirements (UL, NFPA, NEC).",
                ].map((p, i) => (
                  <li key={i} className="about-pain-item">
                    <span className="about-pain-dot" />
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.15 }}>
              <span className="cap-tag">OUR VALUE PROPOSITION</span>
              <h2 className="about-section-title">How we fill the gap.</h2>
              <ul className="about-pain-list">
                {[
                  "Industry-proven equipment backed by mature battery manufacturing resources.",
                  "Carefully selected suppliers with system integration capability to improve ROI and shorten ramp-up.",
                  "Local U.S. engineering from concept design through site implementation.",
                  "Fast technical support and after-sales response to keep the line running.",
                  "Localization and compliance engineering: HMI, UL/NFPA-oriented design support.",
                  "System-level project management covering procurement, logistics, customs, and DDP delivery.",
                ].map((p, i) => (
                  <li key={i} className="about-value-item">
                    <span className="about-value-dot" />
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Strengths */}
      <section className="about-section">
        <div className="about-section-inner">
          <motion.div className="about-section-header" {...fadeUp}>
            <span className="cap-tag">CORE STRENGTHS</span>
            <h2 className="about-section-title">What sets us apart.</h2>
          </motion.div>
          <div className="about-strengths-grid">
            {strengths.map((s, i) => (
              <motion.div
                key={s.title}
                className="about-strength-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <span className="about-strength-icon">{s.icon}</span>
                <h3 className="about-strength-title">{s.title}</h3>
                <ul className="about-strength-list">
                  {s.items.map((item, j) => (
                    <li key={j} className="about-strength-item">
                      <span className="about-value-dot" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Delivery Process */}
      <section className="about-section about-section-gray">
        <div className="about-section-inner">
          <motion.div className="about-section-header" {...fadeUp}>
            <span className="cap-tag">OUR PROCESS</span>
            <h2 className="about-section-title">Project delivery from RFQ to long-term support.</h2>
          </motion.div>
          <div className="about-process-steps">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.num}
                className="about-process-step"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
              >
                <div className="about-process-num">{step.num}</div>
                <div className="about-process-content">
                  <h4 className="about-process-title">{step.title}</h4>
                  <p className="about-process-desc">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customers */}
      <section className="about-section">
        <div className="about-section-inner">
          <motion.div className="about-section-header" {...fadeUp}>
            <span className="cap-tag">OUR CUSTOMERS</span>
            <h2 className="about-section-title">Trusted by leaders across the battery industry.</h2>
          </motion.div>
          <div className="about-customers-grid">
            {customers.map((c, i) => (
              <motion.div
                key={c.type}
                className="about-customer-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <p className="about-customer-type">{c.type}</p>
                <p className="about-customer-names">{c.names}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="about-section about-section-gray">
        <div className="about-section-inner">
          <motion.div className="about-section-header" {...fadeUp}>
            <span className="cap-tag">PROJECT REFERENCES</span>
            <h2 className="about-section-title">Delivered across the United States.</h2>
            <p className="about-section-sub">A selection of completed customer engagements.</p>
          </motion.div>
          <div className="about-cases-grid">
            {caseStudies.map((cs, i) => (
              <motion.div
                key={cs.location}
                className="about-case-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className="about-case-location">
                  <span className="about-case-pin">📍</span>
                  {cs.location}
                </div>
                <div className="about-case-section">
                  <p className="about-case-label">Delivered Equipment</p>
                  <ul className="about-case-list">
                    {cs.equipment.map((e, j) => (
                      <li key={j} className="about-case-item">
                        <span className="about-value-dot" />
                        {e}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="about-case-section">
                  <p className="about-case-label">Services</p>
                  <p className="about-case-services">{cs.services}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta-section">
        <div className="about-section-inner">
          <motion.div className="about-cta-inner" {...fadeUp}>
            <h2 className="about-cta-title">Ready to build your battery testing capability?</h2>
            <p className="about-cta-sub">Let our engineering team help you scope the right system for your application.</p>
            <div className="about-cta-btns">
              <Link href="/quote" className="about-cta-btn-primary">Request a Quote</Link>
              <Link href="/contact" className="about-cta-btn-secondary">Contact Us</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
