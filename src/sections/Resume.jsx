import React from 'react';
import './Resume.css';

// Check if PDF exists by attempting to fetch it — we do this passively at render
export default function Resume() {
  return (
    <section id="resume" className="section resume-section" aria-labelledby="resume-heading">
      <div className="container">
        <header className="section-header">
          <span className="section-label">My Credentials</span>
          <h2 className="section-title" id="resume-heading">
            <span>Resume</span>
          </h2>
          <p className="section-subtitle">
            Download my full resume for a comprehensive overview of my skills and projects.
          </p>
        </header>

        <div className="resume-card card">
          <div className="resume-preview" aria-hidden="true">
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
              <polyline points="10 9 9 9 8 9"/>
            </svg>
          </div>

          <div className="resume-info">
            <h3 className="resume-name">Chinmay Neema</h3>
            <p className="resume-role">Full Stack Java Developer · AI Explorer</p>
            <p className="resume-note">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="10"/>
                <line x1="12" y1="8" x2="12" y2="12"/>
                <line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
              Please place your resume PDF at <code>public/resume.pdf</code> for the download to work.
              The link below points to that path.
            </p>
          </div>

          <div className="resume-actions">
            <a
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              download="Chinmay_Neema_Resume.pdf"
              className="btn btn-primary btn-lg"
              aria-label="Download Chinmay Neema's resume as a PDF file"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download Resume
            </a>
            <a
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-lg"
              aria-label="View resume PDF in a new browser tab"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15 3 21 3 21 9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
              View in Browser
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
