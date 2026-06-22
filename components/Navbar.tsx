"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [visible, setVisible] = useState(true);
  const [mounted, setMounted] = useState(false);
  const lastScrollY = useRef(0);
  const { totalItems, setIsCartOpen } = useCart();

  useEffect(() => {
    setMounted(true);
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setVisible(currentY < lastScrollY.current || currentY < 50);
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  const navItems = ["Home", "Products", "Store", "About", "Contact"];

  return (
    <>
      <nav className={`navbar ${visible ? "navbar-visible" : "navbar-hidden"}`}>
        <Link href="/" className="navbar-logo">
          <img src="/Images/EnerTestLogo.png" alt="EnerTest Logo" className="navbar-logo-img" />
        </Link>

        {!isMobile && (
          <div className="navbar-links">
            {navItems.map(item => (
              <Link
                key={item}
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="nav-link"
              >
                <span className="nav-link-text">{item}</span>
                <span className="nav-link-underline" />
              </Link>
            ))}
            <button className="navbar-cart-btn" onClick={() => setIsCartOpen(true)} aria-label="Open cart">
              <ShoppingCart size={18} />
              {totalItems > 0 && <span className="navbar-cart-count">{totalItems}</span>}
            </button>
            <Link href="/quote" className="nav-quote-btn">Request a Quote</Link>
          </div>
        )}

        {isMobile && (
          <div className="navbar-mobile-right">
            <button className="navbar-cart-btn" onClick={() => setIsCartOpen(true)} aria-label="Open cart">
              <ShoppingCart size={18} />
              {totalItems > 0 && <span className="navbar-cart-count">{totalItems}</span>}
            </button>
            <button className="navbar-hamburger" onClick={() => setOpen(!open)} aria-label="Toggle menu">
              {open ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>
        )}
      </nav>

      {open && isMobile && (
        <div className="mobile-menu">
          {navItems.map(item => (
            <Link
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="mobile-menu-link"
              onClick={() => setOpen(false)}
            >
              {item}
            </Link>
          ))}
          <Link href="/quote" className="mobile-menu-link" onClick={() => setOpen(false)}>
            Quote
          </Link>
        </div>
      )}
    </>
  );
}
