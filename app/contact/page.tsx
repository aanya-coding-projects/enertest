"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { MapPin, Mail, Phone, Send, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "", company: "", email: "", phone: "", subject: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1200);
  };

  return (
    <main className="contact-main">
      <Navbar />

      <section className="contact-header">
        <motion.span className="cap-tag" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          CONTACT
        </motion.span>
        <motion.h1 className="contact-title" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
          Get in Touch
        </motion.h1>
        <motion.p className="contact-subtitle" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
          Our engineering team typically responds within one business day.
        </motion.p>
      </section>

      <section className="contact-body">
        <div className="contact-container">
          <div className="contact-grid">
            {/* Info column */}
            <motion.div className="contact-info-col" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <div className="contact-info-card">
                <h3 className="contact-info-heading">Office</h3>
                <div className="contact-info-item">
                  <MapPin size={16} className="contact-info-icon" />
                  <div>
                    <p className="contact-info-text">1741 McCoba Dr SE, Ste A</p>
                    <p className="contact-info-text">Smyrna, GA 30080</p>
                  </div>
                </div>
                <div className="contact-info-item">
                  <Mail size={16} className="contact-info-icon" />
                  <a href="mailto:sales@enertestsolutions.com" className="contact-info-link">
                    sales@enertestsolutions.com
                  </a>
                </div>
                <div className="contact-info-item">
                  <Phone size={16} className="contact-info-icon" />
                  <a href="tel:+12485334587" className="contact-info-link">
                    +1 (248) 533-4587
                  </a>
                </div>
              </div>

              <div className="contact-info-card">
                <h3 className="contact-info-heading">What to Expect</h3>
                {[
                  { step: "01", text: "Your inquiry reaches our engineering team directly." },
                  { step: "02", text: "We review your requirements and prepare a technical response." },
                  { step: "03", text: "You hear back within one business day." },
                ].map(s => (
                  <div key={s.step} className="contact-step">
                    <span className="contact-step-num">{s.step}</span>
                    <p className="contact-step-text">{s.text}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Form */}
            <motion.div className="contact-form-col" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
              {submitted ? (
                <div className="contact-success">
                  <CheckCircle size={48} className="contact-success-icon" />
                  <h3 className="contact-success-title">Message Sent</h3>
                  <p className="contact-success-text">
                    Thank you for reaching out. Our team will get back to you within one business day.
                  </p>
                  <button
                    className="contact-reset-btn"
                    onClick={() => { setSubmitted(false); setForm({ name: "", company: "", email: "", phone: "", subject: "", message: "" }); }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
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
                  <div className="form-group">
                    <label className="form-label">Subject *</label>
                    <select name="subject" value={form.subject} onChange={handleChange} required className="form-input form-select">
                      <option value="">Select a topic</option>
                      <option value="quote">Request a Quote</option>
                      <option value="product">Product Information</option>
                      <option value="service">Engineering Services</option>
                      <option value="support">After-Sales Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Message *</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell us about your project, application, or question..."
                      rows={6}
                      className="form-input form-textarea"
                    />
                  </div>
                  <button type="submit" className="form-submit-btn" disabled={loading}>
                    {loading ? <span className="form-btn-loading">Sending…</span> : <><Send size={15} />Send Message</>}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
