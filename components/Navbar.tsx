"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [visible, setVisible] = useState(true);
  const [mounted, setMounted] = useState(false);
  const lastScrollY = useRef(0);

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

  return (
    <>
      <nav className={`navbar ${visible ? "navbar-visible" : "navbar-hidden"}`}>
        <Link href="/" className="navbar-logo">
          <img src="/Images/EnerTestLogo.png" alt="EnerTest Logo" className="navbar-logo-img" />
        </Link>

        {!isMobile && (
          <div className="navbar-links">
            {["Home", "Products", "About", "Contact"].map((item) => (
              <Link key={item} href={item === "Home" ? "/" : `/${item.toLowerCase()}`} className="nav-link">
                <span className="nav-link-text">{item}</span>
                <span className="nav-link-underline" />
              </Link>
            ))}
            <Link href="/shop" className="nav-quote-btn">Shop</Link>
          </div>
        )}

        {isMobile && (
          <button className="navbar-hamburger" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X size={30} /> : <Menu size={30} />}
          </button>
        )}
      </nav>

      {open && isMobile && (
        <div className="mobile-menu">
          {["Home", "Products", "About", "Contact"].map((item) => (
            <Link key={item} href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="mobile-menu-link" onClick={() => setOpen(false)}>
              {item}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}