"use client";

import Navbar from "@/components/Navbar";
import AboutVideo from "@/components/AboutHeroVideo";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="about-page">

      <Navbar />

      {/* HERO */}
      <section className="about-hero">

        <AboutVideo />
        <div className="about-overlay" />

        <div className="about-content">

          <motion.span
            className="about-label"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            OUR PHILOSOPHY
          </motion.span>

          <motion.h1
            className="about-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .2 }}
          >
            We work across the full cycle.         </motion.h1>

          <motion.p
            className="about-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .4 }}
          >
            From validation to production, so our clients don't have to piece it together themselves. 
          </motion.p>

        </div>

      </section>


      {/* PHILOSOPHY SECTION */}
      <section className="philosophy-section">

        <span className="cap-tag">
          WHO WE ARE
        </span>

        <h2 className="philosophy-title">
          Holistic battery solutions engineered around your needs.
        </h2>

        <p className="philosophy-text">
          EnerTest Solutions is a technology company specializing in holistic
          battery testing and manufacturing solutions for electric vehicles
          (EVs) and battery-based energy storage systems (BESS).
        </p>

        <p className="philosophy-text">
          From testing and validation to manufacturing assembly and quality
          control, we ensure highly productive and efficient battery
          development and production processes while meeting the unique
          requirements of every client.
        </p>

      </section>


      {/* TEAM SECTION */}
      <section className="team-section">

        <span className="cap-tag">
          OUR TEAM
        </span>

        <h2 className="team-title">
          Meet the people behind EnerTest.
        </h2>

        <div className="team-placeholder">
          Team members...
        </div>

      </section>

    </main>
  );
}