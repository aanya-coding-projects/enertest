"use client";

import { useCart } from "@/context/CartContext";
import Link from "next/link";
import { X, Minus, Plus, ShoppingCart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function CartDrawer() {
  const { items, isCartOpen, setIsCartOpen, removeItem, updateQuantity, totalPrice, totalItems } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            className="cart-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsCartOpen(false)}
          />
          <motion.div
            className="cart-drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
          >
            <div className="cart-drawer-header">
              <div className="cart-drawer-title-row">
                <ShoppingCart size={18} />
                <span className="cart-drawer-title">Cart</span>
                {totalItems > 0 && <span className="cart-drawer-count">{totalItems}</span>}
              </div>
              <button className="cart-close-btn" onClick={() => setIsCartOpen(false)} aria-label="Close cart">
                <X size={20} />
              </button>
            </div>

            <div className="cart-drawer-body">
              {items.length === 0 ? (
                <div className="cart-empty">
                  <ShoppingCart size={48} strokeWidth={1} />
                  <p className="cart-empty-text">Your cart is empty</p>
                  <Link href="/store" className="cart-continue-btn" onClick={() => setIsCartOpen(false)}>
                    Browse Store
                  </Link>
                </div>
              ) : (
                <div className="cart-items-list">
                  {items.map(item => (
                    <div key={item.id} className="cart-item">
                      <div className="cart-item-img-wrap">
                        {item.image ? (
                          <img src={item.image} alt={item.name} className="cart-item-img" />
                        ) : (
                          <div className="cart-item-img-placeholder" />
                        )}
                      </div>
                      <div className="cart-item-info">
                        <p className="cart-item-name">{item.name}</p>
                        <p className="cart-item-category">{item.category}</p>
                        <div className="cart-item-bottom">
                          <div className="cart-qty-control">
                            <button
                              className="cart-qty-btn"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              aria-label="Decrease quantity"
                            >
                              <Minus size={12} />
                            </button>
                            <span className="cart-qty-value">{item.quantity}</span>
                            <button
                              className="cart-qty-btn"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              aria-label="Increase quantity"
                            >
                              <Plus size={12} />
                            </button>
                          </div>
                          <span className="cart-item-price">${(item.price * item.quantity).toLocaleString()}</span>
                        </div>
                      </div>
                      <button className="cart-remove-btn" onClick={() => removeItem(item.id)} aria-label="Remove item">
                        <X size={14} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {items.length > 0 && (
              <div className="cart-drawer-footer">
                <div className="cart-subtotal-row">
                  <span className="cart-subtotal-label">Subtotal</span>
                  <span className="cart-subtotal-value">${totalPrice.toLocaleString()}</span>
                </div>
                <p className="cart-shipping-note">Shipping and taxes calculated at checkout</p>
                <Link href="/checkout" className="cart-checkout-btn" onClick={() => setIsCartOpen(false)}>
                  Proceed to Checkout
                </Link>
                <button className="cart-view-cart-btn" onClick={() => setIsCartOpen(false)}>
                  <Link href="/cart" onClick={() => setIsCartOpen(false)}>View Full Cart</Link>
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
