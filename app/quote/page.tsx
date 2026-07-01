"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { CheckCircle, Send } from "lucide-react";

const productOptions = [
  "Battery Cell Cycler",
  "Cell Formation Power Electronics",
  "Cell Expansion Test Kit",
  "Cell Jigs and Fixtures",
  "Battery Module & Pack Cycler",
  "Battery Emulator",
  "Simulation Based Testing",
  "Cell Climatic Chamber",
  "Module/Pack Climatic Chamber",
  "Battery Test Chiller",
  "Cell Sorting System",
  "Engineering Services",
  "Other / Not Sure",
];

export default function QuotePage() {
  const [form, setForm] = useState({
    name: "", company: "", email: "", phone: "",
    products: [] as string[],
    chemistry: "", cellFormat: "", channelCount: "",
    timeline: "", budget: "", projectDetails: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const toggleProduct = (p: string) => {
    setForm(prev => ({
      ...prev,
      products: prev.products.includes(p) ? prev.products.filter(x => x !== p) : [...prev.products, p],
    }));
  };

  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or email us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="contact-main">
      <Navbar />

      <section className="contact-header">
        <motion.span className="cap-tag" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          REQUEST A QUOTE
        </motion.span>
        <motion.h1 className="contact-title" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
          Tell Us About Your Project
        </motion.h1>
        <motion.p className="contact-subtitle" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
          The more detail you provide, the faster our engineers can scope the right solution.
        </motion.p>
      </section>

      <section className="contact-body">
        <div className="contact-container" style={{ maxWidth: "860px" }}>
          {submitted ? (
            <motion.div className="contact-success" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <CheckCircle size={56} className="contact-success-icon" />
              <h3 className="contact-success-title">Quote Request Received</h3>
              <p className="contact-success-text">
                Our engineering team will review your requirements and follow up within 1–2 business days
                with technical questions or a preliminary proposal.
              </p>
              <button className="contact-reset-btn" onClick={() => { setSubmitted(false); setForm({ name: "", company: "", email: "", phone: "", products: [], chemistry: "", cellFormat: "", channelCount: "", timeline: "", budget: "", projectDetails: "" }); }}>
                Submit Another Request
              </button>
            </motion.div>
          ) : (
            <motion.form
              onSubmit={handleSubmit}
              className="contact-form quote-form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {/* Contact Info */}
              <div className="quote-section-label">Contact Information</div>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="Jane Smith" className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">Company *</label>
                  <input type="text" name="company" value={form.company} onChange={handleChange} required placeholder="Acme Energy Corp" className="form-input" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Email *</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="jane@company.com" className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">Phone</label>
                  <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+1 (555) 000-0000" className="form-input" />
                </div>
              </div>

              {/* Products of Interest */}
              <div className="quote-section-label" style={{ marginTop: "2rem" }}>Products of Interest</div>
              <p className="quote-section-hint">Select all that apply.</p>
              <div className="quote-product-checkboxes">
                {productOptions.map(p => (
                  <label key={p} className={`quote-checkbox-label ${form.products.includes(p) ? "checked" : ""}`}>
                    <input type="checkbox" checked={form.products.includes(p)} onChange={() => toggleProduct(p)} className="quote-checkbox" />
                    {p}
                  </label>
                ))}
              </div>

              {/* Technical Details */}
              <div className="quote-section-label" style={{ marginTop: "2rem" }}>Technical Details</div>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Battery Chemistry</label>
                  <select name="chemistry" value={form.chemistry} onChange={handleChange} className="form-input form-select">
                    <option value="">Select chemistry</option>
                    <option>NMC</option>
                    <option>LFP</option>
                    <option>NCA</option>
                    <option>LCO</option>
                    <option>Solid State</option>
                    <option>Multiple / Not Sure</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Cell Format</label>
                  <select name="cellFormat" value={form.cellFormat} onChange={handleChange} className="form-input form-select">
                    <option value="">Select format</option>
                    <option>Cylindrical (18650)</option>
                    <option>Cylindrical (21700)</option>
                    <option>Prismatic</option>
                    <option>Pouch</option>
                    <option>Module/Pack Level</option>
                    <option>Multiple</option>
                  </select>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Number of Channels / Test Positions</label>
                  <input type="text" name="channelCount" value={form.channelCount} onChange={handleChange} placeholder="e.g. 16 channels, 4 modules" className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">Approximate Budget (USD)</label>
                  <select name="budget" value={form.budget} onChange={handleChange} className="form-input form-select">
                    <option value="">Select range</option>
                    <option>Under $50,000</option>
                    <option>$50,000–$150,000</option>
                    <option>$150,000–$500,000</option>
                    <option>$500,000–$1,000,000</option>
                    <option>Over $1,000,000</option>
                    <option>Not Determined</option>
                  </select>
                </div>
              </div>

              {/* Timeline */}
              <div className="form-group">
                <label className="form-label">Target Timeline</label>
                <select name="timeline" value={form.timeline} onChange={handleChange} className="form-input form-select">
                  <option value="">Select timeline</option>
                  <option>As soon as possible ({"<"}3 months)</option>
                  <option>3–6 months</option>
                  <option>6–12 months</option>
                  <option>Over 12 months</option>
                  <option>Not yet determined</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Project Details *</label>
                <textarea
                  name="projectDetails"
                  value={form.projectDetails}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Describe your application, test requirements, throughput targets, site constraints, or any other relevant details..."
                  className="form-input form-textarea"
                />
              </div>

              {error && <p style={{ color: "#c0392b", fontSize: "14px", marginBottom: "8px" }}>{error}</p>}
              <button type="submit" className="form-submit-btn" disabled={loading}>
                {loading ? <span className="form-btn-loading">Submitting…</span> : <><Send size={15} /> Submit Quote Request</>}
              </button>
            </motion.form>
          )}
        </div>
      </section>
    </main>
  );
}
