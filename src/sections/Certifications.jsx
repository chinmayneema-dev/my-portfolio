import React from 'react';
import './Certifications.css';

const CERTIFICATIONS = [
  {
    id: 'nptel-python',
    title: 'Python for Data Science',
    issuer: 'NPTEL — IIT Madras',
    score: '87%',
    badge: 'Top 1% Topper',
    badgeDetail: 'Among 16,331 candidates',
    highlight: true,
  },
  {
    id: 'nptel-java',
    title: 'Programming in Java',
    issuer: 'NPTEL — IIT Kharagpur',
    score: '82%',
    badge: null,
  },
  {
    id: 'nptel-dbms',
    title: 'Database Management System',
    issuer: 'NPTEL — IIT Kharagpur',
    score: '70%',
    badge: null,
  },
  {
    id: 'gdg-genai',
    title: 'Gen AI Study Jams',
    issuer: 'Google Developer Groups',
    score: null,
    badge: 'Completion',
    date: 'November 2024',
  },
  {
    id: 'infosys-java',
    title: 'Java Essentials',
    issuer: 'Infosys Springboard',
    score: null,
    badge: 'Completion',
    date: 'August 2025',
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="section" aria-labelledby="certifications-heading">
      <div className="container">
        <header className="section-header">
          <span className="section-label">Recognized Learning</span>
          <h2 className="section-title" id="certifications-heading">
            <span>Certifications</span>
          </h2>
          <p className="section-subtitle">
            Verified academic and professional certifications.
          </p>
        </header>

        <ul className="certs-grid" role="list">
          {CERTIFICATIONS.map((cert) => (
            <li key={cert.id} className={`cert-card card ${cert.highlight ? 'cert-card--highlight' : ''}`}>
              {cert.highlight && (
                <div className="cert-highlight-ribbon" aria-hidden="true">
                  ⭐ Featured
                </div>
              )}

              <div className="cert-issuer-logo" aria-hidden="true">
                {cert.issuer.startsWith('NPTEL') ? '🎓' :
                 cert.issuer.startsWith('Google') ? '🔵' : '🏢'}
              </div>

              <div className="cert-body">
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-issuer">{cert.issuer}</p>

                {cert.date && (
                  <p className="cert-date">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                      <line x1="16" y1="2" x2="16" y2="6"/>
                      <line x1="8" y1="2" x2="8" y2="6"/>
                      <line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                    {cert.date}
                  </p>
                )}
              </div>

              <div className="cert-meta">
                {cert.score && (
                  <span className="cert-score" aria-label={`Score: ${cert.score}`}>
                    {cert.score}
                  </span>
                )}
                {cert.badge && (
                  <span className={`cert-badge ${cert.highlight ? 'cert-badge--gold' : ''}`}>
                    {cert.badge}
                  </span>
                )}
              </div>

              {cert.badgeDetail && (
                <p className="cert-badge-detail">{cert.badgeDetail}</p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
