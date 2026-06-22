"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { Lock, CreditCard, ArrowLeft } from "lucide-react";

export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCart();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [contact, setContact] = useState({ name: "", company: "", email: "", phone: "" });
  const [shipping, setShipping] = useState({ address: "", city: "", state: "", zip: "", country: "United States" });
  const [payment, setPayment] = useState({ cardName: "", cardNumber: "", expiry: "", cvv: "" });

  const handleContact = (e: React.ChangeEvent<HTMLInputElement>) => setContact(p => ({ ...p, [e.target.name]: e.target.value }));
  const handleShipping = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => setShipping(p => ({ ...p, [e.target.name]: e.target.value }));
  const handlePayment = (e: React.ChangeEvent<HTMLInputElement>) => setPayment(p => ({ ...p, [e.target.name]: e.target.value }));

  const tax = totalPrice * 0.08;
  const shipping_cost = totalPrice > 5000 ? 0 : 149;
  const orderTotal = totalPrice + tax + shipping_cost;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      clearCart();
      router.push("/checkout/success");
    }, 1600);
  };

  if (items.length === 0 && !loading) {
    return (
      <main className="cart-page-main">
        <Navbar />
        <section className="cart-page-body">
          <div className="cart-page-container">
            <div className="cart-page-empty">
              <h2 className="cart-page-empty-title">Nothing to check out</h2>
              <p className="cart-page-empty-text">Your cart is empty. Add items from the store first.</p>
              <Link href="/store" className="cart-page-shop-btn">Go to Store</Link>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="checkout-main">
      <Navbar />

      <section className="checkout-header">
        <motion.h1 className="checkout-title" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          Checkout
        </motion.h1>
        <Link href="/cart" className="checkout-back-link">
          <ArrowLeft size={14} /> Back to Cart
        </Link>
      </section>

      <section className="checkout-body">
        <div className="checkout-container">
          <form onSubmit={handleSubmit} className="checkout-grid">
            {/* LEFT: Form */}
            <motion.div className="checkout-form-col" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>

              {/* Contact */}
              <div className="checkout-section">
                <h2 className="checkout-section-title">Contact Information</h2>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Full Name *</label>
                    <input type="text" name="name" value={contact.name} onChange={handleContact} required placeholder="Jane Smith" className="form-input" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Company *</label>
                    <input type="text" name="company" value={contact.company} onChange={handleContact} required placeholder="Acme Energy Corp" className="form-input" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Email *</label>
                    <input type="email" name="email" value={contact.email} onChange={handleContact} required placeholder="jane@company.com" className="form-input" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Phone *</label>
                    <input type="tel" name="phone" value={contact.phone} onChange={handleContact} required placeholder="+1 (555) 000-0000" className="form-input" />
                  </div>
                </div>
              </div>

              {/* Shipping */}
              <div className="checkout-section">
                <h2 className="checkout-section-title">Shipping Address</h2>
                <div className="form-group">
                  <label className="form-label">Street Address *</label>
                  <input type="text" name="address" value={shipping.address} onChange={handleShipping} required placeholder="123 Industrial Blvd" className="form-input" />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">City *</label>
                    <input type="text" name="city" value={shipping.city} onChange={handleShipping} required placeholder="Detroit" className="form-input" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">State *</label>
                    <input type="text" name="state" value={shipping.state} onChange={handleShipping} required placeholder="MI" className="form-input" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">ZIP Code *</label>
                    <input type="text" name="zip" value={shipping.zip} onChange={handleShipping} required placeholder="48201" className="form-input" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Country</label>
                    <select name="country" value={shipping.country} onChange={handleShipping} className="form-input form-select">
                      <option>United States</option>
                      <option>Canada</option>
                      <option>Mexico</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Payment */}
              <div className="checkout-section">
                <div className="checkout-payment-header">
                  <h2 className="checkout-section-title">Payment</h2>
                  <div className="checkout-secure-badge">
                    <Lock size={12} />
                    <span>Secure checkout</span>
                  </div>
                </div>
                <div className="checkout-card-icons">
                  <div className="checkout-card-icon-placeholder">VISA</div>
                  <div className="checkout-card-icon-placeholder">MC</div>
                  <div className="checkout-card-icon-placeholder">AMEX</div>
                </div>
                <div className="form-group">
                  <label className="form-label">Name on Card *</label>
                  <input type="text" name="cardName" value={payment.cardName} onChange={handlePayment} required placeholder="Jane Smith" className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">Card Number *</label>
                  <div className="form-input-icon-wrap">
                    <input
                      type="text"
                      name="cardNumber"
                      value={payment.cardNumber}
                      onChange={handlePayment}
                      required
                      placeholder="1234 5678 9012 3456"
                      maxLength={19}
                      className="form-input"
                    />
                    <CreditCard size={16} className="form-input-icon" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Expiry Date *</label>
                    <input type="text" name="expiry" value={payment.expiry} onChange={handlePayment} required placeholder="MM / YY" maxLength={7} className="form-input" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">CVV *</label>
                    <input type="text" name="cvv" value={payment.cvv} onChange={handlePayment} required placeholder="•••" maxLength={4} className="form-input" />
                  </div>
                </div>
              </div>

              <button type="submit" className="checkout-place-order-btn" disabled={loading}>
                {loading ? (
                  <span className="form-btn-loading">Processing Order…</span>
                ) : (
                  <>
                    <Lock size={15} />
                    Place Order — ${orderTotal.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </>
                )}
              </button>
              <p className="checkout-terms">
                By placing your order you agree to EnerTest Solutions&apos; terms and conditions.
                Orders are processed within 1 business day.
              </p>
            </motion.div>

            {/* RIGHT: Order Summary */}
            <motion.div className="checkout-summary-col" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
              <div className="checkout-summary-card">
                <h3 className="checkout-summary-title">Order Summary</h3>

                <div className="checkout-summary-items">
                  {items.map(item => (
                    <div key={item.id} className="checkout-summary-item">
                      <div className="checkout-summary-item-img-wrap">
                        {item.image ? (
                          <img src={item.image} alt={item.name} className="checkout-summary-item-img" />
                        ) : (
                          <div className="checkout-summary-item-img-placeholder" />
                        )}
                        <span className="checkout-summary-item-qty">{item.quantity}</span>
                      </div>
                      <div className="checkout-summary-item-info">
                        <p className="checkout-summary-item-name">{item.name}</p>
                        <p className="checkout-summary-item-cat">{item.category}</p>
                      </div>
                      <span className="checkout-summary-item-price">${(item.price * item.quantity).toLocaleString()}</span>
                    </div>
                  ))}
                </div>

                <div className="checkout-summary-totals">
                  <div className="checkout-total-row">
                    <span>Subtotal</span>
                    <span>${totalPrice.toLocaleString()}</span>
                  </div>
                  <div className="checkout-total-row">
                    <span>Shipping</span>
                    <span>{shipping_cost === 0 ? "Free" : `$${shipping_cost}`}</span>
                  </div>
                  <div className="checkout-total-row">
                    <span>Estimated Tax (8%)</span>
                    <span>${tax.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                  </div>
                  <div className="checkout-total-divider" />
                  <div className="checkout-total-row checkout-grand-total">
                    <span>Total</span>
                    <span>${orderTotal.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                  </div>
                  {shipping_cost === 0 && (
                    <p className="checkout-free-shipping-note">✓ Free shipping on orders over $5,000</p>
                  )}
                </div>
              </div>
            </motion.div>
          </form>
        </div>
      </section>
    </main>
  );
}
