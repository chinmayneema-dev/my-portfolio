import React from 'react';
import './styles/globals.css';

import Navbar       from './components/Navbar';
import Footer       from './components/Footer';
import Hero         from './sections/Hero';
import About        from './sections/About';
import Skills       from './sections/Skills';
import Projects     from './sections/Projects';
import Certifications from './sections/Certifications';
import Achievements from './sections/Achievements';
import Education    from './sections/Education';
import Resume       from './sections/Resume';
import Contact      from './sections/Contact';

export default function App() {
  return (
    <>
      {/* Global grid texture */}
      <div className="grid-bg" aria-hidden="true" />

      {/* Skip to main content — accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content">
        {/* 1. Hero */}
        <Hero />

        {/* 2. About Me */}
        <About />

        {/* 3–6. Skills (separate sections per spec) */}
        <Skills />

        {/* 7–9. Projects */}
        <Projects />

        {/* 10. Certifications */}
        <Certifications />

        {/* 11. Achievements */}
        <Achievements />

        {/* 12. Education */}
        <Education />

        {/* 13. Resume */}
        <Resume />

        {/* 14. Contact */}
        <Contact />
      </main>

      <Footer />
    </>
  );
}
