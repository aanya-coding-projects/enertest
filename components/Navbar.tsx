"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Menu, X, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import type { SearchResult } from "@/sanity/lib/types";

export default function Navbar() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [visible, setVisible] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const lastScrollY = useRef(0);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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

  useEffect(() => {
    if (searchOpen) {
      setTimeout(() => searchInputRef.current?.focus(), 50);
      document.body.style.overflow = "hidden";
    } else {
      setSearchQuery("");
      setSearchResults([]);
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [searchOpen]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSearchOpen(false);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  // Debounced search against the API route
  useEffect(() => {
    const q = searchQuery.trim();
    if (!q) { setSearchResults([]); return; }

    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(async () => {
      try {
        const res = await fetch(`/api/search?q=${encodeURIComponent(q)}`);
        const data = await res.json();
        setSearchResults(data);
      } catch {
        setSearchResults([]);
      }
    }, 150);

    return () => { if (debounceRef.current) clearTimeout(debounceRef.current); };
  }, [searchQuery]);

  if (!mounted) return null;

  const navItems = ["Home", "Products", "About", "Contact"];

  const handleResultClick = (slug: string) => {
    router.push(`/products/${slug}`);
    setSearchOpen(false);
  };

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
            <button
              className="navbar-search-btn"
              onClick={() => setSearchOpen(true)}
              aria-label="Search products"
            >
              <Search size={16} />
            </button>
            <Link href="/quote" className="nav-quote-btn">Request a Quote</Link>
          </div>
        )}

        {isMobile && (
          <div className="navbar-mobile-right">
            <button
              className="navbar-search-btn"
              onClick={() => setSearchOpen(true)}
              aria-label="Search products"
            >
              <Search size={18} />
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

      {searchOpen && (
        <div className="search-overlay" onClick={() => setSearchOpen(false)}>
          <div className="search-overlay-box" onClick={(e) => e.stopPropagation()}>
            <div className="search-overlay-input-row">
              <Search size={17} className="search-overlay-icon" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products or model numbers…"
                className="search-overlay-input"
              />
              <button
                className="search-overlay-close"
                onClick={() => setSearchOpen(false)}
                aria-label="Close search"
              >
                <X size={18} />
              </button>
            </div>

            {searchQuery.trim() && (
              <div className="search-overlay-results">
                {searchResults.length > 0 ? (
                  searchResults.map((p) => (
                    <button
                      key={p.slug}
                      className="search-overlay-result"
                      onClick={() => handleResultClick(p.slug)}
                    >
                      <div className="search-overlay-result-img-wrap">
                        {p.image ? (
                          <img src={p.image} alt={p.name} className="search-overlay-result-img" />
                        ) : (
                          <div className="search-overlay-result-img-placeholder" />
                        )}
                      </div>
                      <div className="search-overlay-result-text">
                        <p className="search-overlay-result-name">{p.name}</p>
                        <p className="search-overlay-result-meta">
                          {p.iestCategory ?? "EnerTest"}{p.model ? ` · ${p.model}` : ""}
                        </p>
                      </div>
                    </button>
                  ))
                ) : (
                  <p className="search-overlay-empty">No products found for &ldquo;{searchQuery}&rdquo;</p>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
