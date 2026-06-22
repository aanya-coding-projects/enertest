"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { Minus, Plus, X, ShoppingCart, ArrowRight } from "lucide-react";

export default function CartPage() {
  const { items, removeItem, updateQuantity, totalPrice, totalItems, clearCart } = useCart();

  return (
    <main className="cart-page-main">
      <Navbar />

      <section className="cart-page-header">
        <motion.span className="cap-tag" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          CART
        </motion.span>
        <motion.h1 className="cart-page-title" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
          Your Cart {totalItems > 0 && <span className="cart-page-count">({totalItems} {totalItems === 1 ? "item" : "items"})</span>}
        </motion.h1>
      </section>

      <section className="cart-page-body">
        <div className="cart-page-container">
          {items.length === 0 ? (
            <motion.div className="cart-page-empty" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
              <ShoppingCart size={64} strokeWidth={1} className="cart-page-empty-icon" />
              <h2 className="cart-page-empty-title">Your cart is empty</h2>
              <p className="cart-page-empty-text">Browse our store to find maintenance tools, test accessories, and auxiliary equipment.</p>
              <Link href="/store" className="cart-page-shop-btn">Browse Store</Link>
            </motion.div>
          ) : (
            <div className="cart-page-grid">
              {/* Items */}
              <motion.div className="cart-page-items" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
                <div className="cart-page-items-header">
                  <span className="cart-col-label" style={{ flex: 3 }}>Product</span>
                  <span className="cart-col-label" style={{ flex: 1, textAlign: "center" }}>Qty</span>
                  <span className="cart-col-label" style={{ flex: 1, textAlign: "right" }}>Price</span>
                </div>

                {items.map(item => (
                  <motion.div
                    key={item.id}
                    className="cart-page-item"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    layout
                  >
                    <div className="cart-page-item-img-wrap">
                      {item.image ? (
                        <img src={item.image} alt={item.name} className="cart-page-item-img" />
                      ) : (
                        <div className="cart-page-item-img-placeholder" />
                      )}
                    </div>
                    <div className="cart-page-item-info">
                      <p className="cart-page-item-name">{item.name}</p>
                      <p className="cart-page-item-cat">{item.category}</p>
                      <p className="cart-page-item-unit">${item.price.toLocaleString()} / unit</p>
                    </div>
                    <div className="cart-page-qty-ctrl">
                      <button className="cart-page-qty-btn" onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                        <Minus size={12} />
                      </button>
                      <span className="cart-page-qty-val">{item.quantity}</span>
                      <button className="cart-page-qty-btn" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                        <Plus size={12} />
                      </button>
                    </div>
                    <div className="cart-page-item-total">
                      <span className="cart-page-item-price">${(item.price * item.quantity).toLocaleString()}</span>
                      <button className="cart-page-remove-btn" onClick={() => removeItem(item.id)} aria-label="Remove">
                        <X size={14} />
                      </button>
                    </div>
                  </motion.div>
                ))}

                <div className="cart-page-items-footer">
                  <button className="cart-page-clear-btn" onClick={clearCart}>Clear Cart</button>
                  <Link href="/store" className="cart-page-continue-link">← Continue Shopping</Link>
                </div>
              </motion.div>

              {/* Summary */}
              <motion.div className="cart-page-summary" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
                <h3 className="cart-summary-title">Order Summary</h3>

                <div className="cart-summary-rows">
                  {items.map(item => (
                    <div key={item.id} className="cart-summary-row">
                      <span className="cart-summary-row-name">{item.name} × {item.quantity}</span>
                      <span className="cart-summary-row-price">${(item.price * item.quantity).toLocaleString()}</span>
                    </div>
                  ))}
                </div>

                <div className="cart-summary-divider" />

                <div className="cart-summary-row cart-summary-subtotal-row">
                  <span className="cart-summary-subtotal-label">Subtotal</span>
                  <span className="cart-summary-subtotal-value">${totalPrice.toLocaleString()}</span>
                </div>
                <div className="cart-summary-row">
                  <span className="cart-summary-note-label">Shipping</span>
                  <span className="cart-summary-note-val">Calculated at checkout</span>
                </div>
                <div className="cart-summary-row">
                  <span className="cart-summary-note-label">Tax</span>
                  <span className="cart-summary-note-val">Calculated at checkout</span>
                </div>

                <Link href="/checkout" className="cart-summary-checkout-btn">
                  Proceed to Checkout <ArrowRight size={16} />
                </Link>

                <p className="cart-summary-policy">
                  Questions? <Link href="/contact" className="cart-summary-policy-link">Contact our team</Link> before placing your order.
                </p>
              </motion.div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
