import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">

        <div className="footer-grid">
          <div>
            <p className="footer-heading">EnerTest Solutions LLC</p>
            <p className="footer-text">
              1741 McCoba Dr SE, Ste A<br />Smyrna, GA 30080
            </p>
            <a href="mailto:sales@enertestsolutions.com" className="footer-link">
              sales@enertestsolutions.com
            </a>
            <a href="tel:+12485334587" className="footer-link">
              +1 (248) 533-4587
            </a>
          </div>

          <div>
            <p className="footer-heading">Solutions</p>
            <div className="footer-links-col">
              <Link href="/products" className="footer-link">Test System Solutions</Link>
              <Link href="/products" className="footer-link">Production & Automation</Link>
              <Link href="/products" className="footer-link">Engineering Services</Link>
              <Link href="/store"    className="footer-link">Maintenance & Auxiliary</Link>
            </div>
          </div>

          <div>
            <p className="footer-heading">Company</p>
            <div className="footer-links-col">
              <Link href="/about"   className="footer-link">About Us</Link>
              <Link href="/contact" className="footer-link">Contact</Link>
              <Link href="/store"   className="footer-link">Store</Link>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">© 2025 EnerTest Solutions LLC. All rights reserved.</p>
          <div className="footer-socials">
            <a href="https://www.linkedin.com/company/enertest-solutions-llc/" aria-label="LinkedIn" className="footer-social-icon" target="_blank" rel="noopener noreferrer">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <rect x="2" y="9" width="4" height="12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="4" cy="4" r="2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="https://www.youtube.com/@EnerTest" aria-label="YouTube" className="footer-social-icon" target="_blank" rel="noopener noreferrer">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="white"/>
              </svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}