"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { MapPin, Mail, Phone, Send, CheckCircle } from "lucide-react";
import { Turnstile } from "@marsidev/react-turnstile";
import type { SanityContactPage } from "@/sanity/lib/types";

const DEFAULT_EXPECT_STEPS = [
  { step: "01", text: "Your inquiry reaches our engineering team directly." },
  { step: "02", text: "We review your requirements and prepare a technical response." },
  { step: "03", text: "You hear back within one business day." },
];

type Props = { data: SanityContactPage | null };

export default function ContactClient({ data }: Props) {
  const [form, setForm] = useState({
    name: "", company: "", email: "", phone: "", subject: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState("");

  const heroTitle = data?.heroTitle ?? "Get in Touch";
  const heroSubtitle = data?.heroSubtitle ?? "Our engineering team typically responds within one business day.";
  const addressLine1 = data?.addressLine1 ?? "1741 McCoba Dr SE, Ste A";
  const addressLine2 = data?.addressLine2 ?? "Smyrna, GA 30080";
  const email = data?.email ?? "sales@enertestsolutions.com";
  const phone = data?.phone ?? "+1 (248) 533-4587";
  const expectSteps = data?.expectSteps?.length ? data.expectSteps : DEFAULT_EXPECT_STEPS;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, turnstileToken }),
      });
      const result = await res.json();
      if (result.success) {
        setSubmitted(true);
      } else {
        alert("Failed to send message. Try again.");
      }
    } catch {
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="contact-main">
      <Navbar />

      <section className="contact-header">
        <motion.span className="cap-tag" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          CONTACT
        </motion.span>
        <motion.h1 className="contact-title" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
          {heroTitle}
        </motion.h1>
        <motion.p className="contact-subtitle" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
          {heroSubtitle}
        </motion.p>
      </section>

      <section className="contact-body">
        <div className="contact-container">
          <div className="contact-grid">
            <motion.div className="contact-info-col" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <div className="contact-info-card">
                <h3 className="contact-info-heading">Office</h3>
                <div className="contact-info-item">
                  <MapPin size={16} className="contact-info-icon" />
                  <div>
                    <p className="contact-info-text">{addressLine1}</p>
                    <p className="contact-info-text">{addressLine2}</p>
                  </div>
                </div>
                <div className="contact-info-item">
                  <Mail size={16} className="contact-info-icon" />
                  <a href={`mailto:${email}`} className="contact-info-link">{email}</a>
                </div>
                <div className="contact-info-item">
                  <Phone size={16} className="contact-info-icon" />
                  <a href={`tel:${phone.replace(/\D/g, "").replace(/^/, "+")}`} className="contact-info-link">{phone}</a>
                </div>
              </div>

              <div className="contact-info-card">
                <h3 className="contact-info-heading">What to Expect</h3>
                {expectSteps.map((s) => (
                  <div key={s.step} className="contact-step">
                    <span className="contact-step-num">{s.step}</span>
                    <p className="contact-step-text">{s.text}</p>
                  </div>
                ))}
              </div>
            </motion.div>

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
                  <Turnstile
                    siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "1x00000000000000000000AA"}
                    onSuccess={setTurnstileToken}
                    onError={() => setTurnstileToken("")}
                    onExpire={() => setTurnstileToken("")}
                  />
                  <button type="submit" className="form-submit-btn" disabled={loading || !turnstileToken}>
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
