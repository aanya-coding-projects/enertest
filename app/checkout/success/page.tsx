"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { CheckCircle, Package, Mail } from "lucide-react";

export default function OrderSuccessPage() {
  const orderNumber = `ET-${Date.now().toString().slice(-6)}`;

  return (
    <main className="cart-page-main">
      <Navbar />
      <section className="cart-page-body">
        <div className="cart-page-container">
          <motion.div
            className="order-success-wrap"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="order-success-icon-wrap">
              <CheckCircle size={64} strokeWidth={1.5} className="order-success-icon" />
            </div>

            <h1 className="order-success-title">Order Confirmed</h1>
            <p className="order-success-order-num">Order #{orderNumber}</p>
            <p className="order-success-text">
              Thank you for your order. Our team will review it and reach out within 1 business day
              to confirm availability, lead times, and shipping details.
            </p>

            <div className="order-success-steps">
              <div className="order-success-step">
                <Mail size={20} className="order-success-step-icon" />
                <div>
                  <p className="order-success-step-title">Confirmation Email</p>
                  <p className="order-success-step-desc">A copy of your order has been sent to your email address.</p>
                </div>
              </div>
              <div className="order-success-step">
                <Package size={20} className="order-success-step-icon" />
                <div>
                  <p className="order-success-step-title">Order Processing</p>
                  <p className="order-success-step-desc">Our team will confirm availability and provide a shipping estimate within 1 business day.</p>
                </div>
              </div>
            </div>

            <div className="order-success-btns">
              <Link href="/store" className="about-cta-btn-primary">Continue Shopping</Link>
              <Link href="/contact" className="about-cta-btn-secondary">Contact Support</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
