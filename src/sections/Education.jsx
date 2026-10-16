import React from 'react';
import './Education.css';

const EDUCATION = [
  {
    id: 'btech',
    type: 'B.Tech',
    institution: 'Acropolis Institute of Technology and Research, Indore',
    affiliation: 'RGPV University',
    field: 'Computer Science and Engineering',
    period: '2023 – 2027',
    score: '8.11 CGPA',
    status: 'Pursuing',
    icon: '🏛️',
    current: true,
  },
  {
    id: 'class12',
    type: 'Class XII',
    institution: 'St. Paul Higher Secondary School',
    affiliation: null,
    field: 'Higher Secondary Education',
    period: '2023',
    score: '87.6%',
    status: null,
    icon: '📚',
    current: false,
  },
  {
    id: 'class10',
    type: 'Class X',
    institution: 'St. Paul Higher Secondary School',
    affiliation: null,
    field: 'Secondary Education',
    period: '2021',
    score: '92.6%',
    status: null,
    icon: '🎒',
    current: false,
  },
];

export default function Education() {
  return (
    <section id="education" className="section" aria-labelledby="education-heading">
      <div className="container">
        <header className="section-header">
          <span className="section-label">Academic Background</span>
          <h2 className="section-title" id="education-heading">
            <span>Education</span>
          </h2>
        </header>

        <div className="education-timeline" role="list">
          {EDUCATION.map((edu, index) => (
            <div key={edu.id} className={`edu-item ${edu.current ? 'edu-item--current' : ''}`} role="listitem">
              {/* Timeline line */}
              <div className="edu-timeline-col" aria-hidden="true">
                <div className="edu-dot" />
                {index < EDUCATION.length - 1 && <div className="edu-line" />}
              </div>

              {/* Card */}
              <article className="edu-card card" aria-labelledby={`edu-${edu.id}-heading`}>
                <div className="edu-card-header">
                  <div className="edu-icon" aria-hidden="true">{edu.icon}</div>
                  <div className="edu-card-meta">
                    <span className="edu-type">{edu.type}</span>
                    {edu.status && (
                      <span className="edu-status" aria-label={`Status: ${edu.status}`}>
                        <span className="edu-status-dot" aria-hidden="true" />
                        {edu.status}
                      </span>
                    )}
                  </div>
                </div>

                <div className="edu-card-body">
                  <h3 className="edu-institution" id={`edu-${edu.id}-heading`}>
                    {edu.institution}
                  </h3>
                  {edu.affiliation && (
                    <p className="edu-affiliation">{edu.affiliation}</p>
                  )}
                  <p className="edu-field">{edu.field}</p>
                </div>

                <div className="edu-card-footer">
                  <span className="edu-period">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                      <line x1="16" y1="2" x2="16" y2="6"/>
                      <line x1="8" y1="2" x2="8" y2="6"/>
                      <line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                    {edu.period}
                  </span>
                  <span className="edu-score" aria-label={`Score: ${edu.score}`}>
                    {edu.score}
                  </span>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
