import React, { useState, useEffect } from 'react';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'About',          href: '#about' },
  { label: 'Skills',         href: '#skills-frontend' },
  { label: 'Projects',       href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Education',      href: '#education' },
  { label: 'Contact',        href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      // Track active section
      const sections = NAV_LINKS.map(l => l.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    if (!menuOpen) return;
    const handler = (e) => {
      if (!e.target.closest('.navbar-mobile-menu') && !e.target.closest('.navbar-hamburger')) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, [menuOpen]);

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} role="banner">
        <div className="navbar-inner container">
          {/* Logo */}
          <a
            href="#hero"
            className="navbar-logo"
            onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }}
            aria-label="Chinmay Neema — Go to top"
          >
            <span className="navbar-logo-bracket">&lt;</span>
            CN
            <span className="navbar-logo-bracket">/&gt;</span>
          </a>

          {/* Desktop Nav */}
          <nav className="navbar-links" role="navigation" aria-label="Primary navigation">
            {NAV_LINKS.map(({ label, href }) => {
              const sectionId = href.replace('#', '');
              return (
                <a
                  key={href}
                  href={href}
                  className={`navbar-link ${activeSection === sectionId ? 'navbar-link--active' : ''}`}
                  onClick={(e) => { e.preventDefault(); handleNavClick(href); }}
                >
                  {label}
                </a>
              );
            })}
          </nav>

          {/* CTA + Hamburger */}
          <div className="navbar-actions">
            <a
              href="/resume.pdf"
              download="Chinmay_Neema_Resume.pdf"
              className="btn btn-primary navbar-resume-btn"
              aria-label="Download Chinmay Neema's resume PDF"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Resume
            </a>

            <button
              className={`navbar-hamburger ${menuOpen ? 'navbar-hamburger--open' : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Overlay */}
      {menuOpen && (
        <div
          className="navbar-overlay"
          aria-hidden="true"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`navbar-mobile-menu ${menuOpen ? 'navbar-mobile-menu--open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <nav aria-label="Mobile navigation">
          {NAV_LINKS.map(({ label, href }, i) => (
            <a
              key={href}
              href={href}
              className="navbar-mobile-link"
              onClick={(e) => { e.preventDefault(); handleNavClick(href); }}
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <span className="navbar-mobile-link-num">0{i + 1}.</span>
              {label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            download="Chinmay_Neema_Resume.pdf"
            className="btn btn-primary navbar-mobile-resume"
            onClick={() => setMenuOpen(false)}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Download Resume
          </a>
        </nav>
      </div>
    </>
  );
}
