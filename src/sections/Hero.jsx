import React, { useEffect, useState } from 'react';
import './Hero.css';

const TYPED_STRINGS = [
  'Full Stack Java Developer',
  'AI Explorer',
  'Spring Boot Engineer',
  'Backend Developer',
];

export default function Hero() {
  const [typedText, setTypedText]   = useState('');
  const [strIndex, setStrIndex]     = useState(0);
  const [charIndex, setCharIndex]   = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [photoError, setPhotoError] = useState(false);

  useEffect(() => {
    // Respect reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setTypedText(TYPED_STRINGS[0]);
      return;
    }

    const currentStr = TYPED_STRINGS[strIndex];
    const delay = isDeleting ? 50 : charIndex === currentStr.length ? 2000 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < currentStr.length) {
        setTypedText(currentStr.slice(0, charIndex + 1));
        setCharIndex(c => c + 1);
      } else if (isDeleting && charIndex > 0) {
        setTypedText(currentStr.slice(0, charIndex - 1));
        setCharIndex(c => c - 1);
      } else if (!isDeleting && charIndex === currentStr.length) {
        setIsDeleting(true);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setStrIndex(i => (i + 1) % TYPED_STRINGS.length);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, strIndex]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero" aria-label="Introduction">
      {/* Ambient orbs */}
      <div className="hero-orb hero-orb--purple" aria-hidden="true" />
      <div className="hero-orb hero-orb--teal"   aria-hidden="true" />

      <div className="container hero-inner">
        {/* Text content */}
        <div className="hero-content animate-fade-up">
          <p className="hero-greeting animate-fade-up delay-100">
            <span className="hero-wave" aria-hidden="true">👋</span>
            Hi, I'm
          </p>

          <h1 className="hero-name animate-fade-up delay-200">
            Chinmay<br />
            <span className="hero-name-accent">Neema</span>
          </h1>

          <p className="hero-role animate-fade-up delay-300" aria-live="polite" aria-label={`Role: ${typedText}`}>
            <span className="hero-typed" aria-hidden="true">
              {typedText}
              <span className="hero-cursor" aria-hidden="true">|</span>
            </span>
          </p>

          <p className="hero-tagline animate-fade-up delay-400">
            Building Scalable Applications.{' '}
            <span className="hero-tagline-accent">Exploring Intelligent Solutions.</span>
          </p>

          <p className="hero-location animate-fade-up delay-500">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            Indore, India
          </p>

          <div className="hero-actions animate-fade-up delay-600">
            <button
              className="btn btn-primary btn-lg"
              onClick={() => scrollToSection('projects')}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                <line x1="8" y1="21" x2="16" y2="21"/>
                <line x1="12" y1="17" x2="12" y2="21"/>
              </svg>
              View My Work
            </button>
            <button
              className="btn btn-secondary btn-lg"
              onClick={() => scrollToSection('contact')}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              Contact Me
            </button>
          </div>

          {/* Social links */}
          <div className="hero-socials animate-fade-up delay-600">
            <a
              href="https://github.com/chinmayneema-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link"
              aria-label="GitHub profile"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/chinmay-neema-b96532357"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link"
              aria-label="LinkedIn profile"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a
              href="mailto:chinmayneema20@gmail.com"
              className="hero-social-link"
              aria-label="Send email to Chinmay"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Profile photo */}
        <div className="hero-photo-wrap animate-fade-in delay-300">
          <div className="hero-photo-ring" aria-hidden="true" />
          <div className="hero-photo-glow" aria-hidden="true" />
          <div className="hero-photo-container">
            {!photoError ? (
              <img
                src={`${import.meta.env.BASE_URL}images/profile-photo.png`}
                alt="Professional photo of Chinmay Neema"
                className="hero-photo"
                loading="eager"
                onError={() => setPhotoError(true)}
              />
            ) : (
              <div className="hero-photo-placeholder" aria-label="Profile photo placeholder — add your photo at public/images/profile-photo.png">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
                <span>Add your photo at<br/>public/images/profile-photo.png</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="hero-scroll-indicator"
        onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
        aria-label="Scroll to About section"
      >
        <span className="hero-scroll-text">Scroll</span>
        <span className="hero-scroll-line" aria-hidden="true" />
      </a>
    </section>
  );
}
