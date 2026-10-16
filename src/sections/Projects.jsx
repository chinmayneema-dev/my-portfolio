import React from 'react';
import './Projects.css';

const PROJECTS = [
  {
    id: 'banking',
    status: 'completed',
    statusLabel: null,
    title: 'Banking Management System',
    description:
      'A full-stack web application for managing banking operations with role-based access control. Supports secure user sessions, financial transactions, and a normalized relational database for data integrity.',
    features: [
      'Role-based authentication and secure session management',
      'Deposits, withdrawals, and fund transfers',
      'Normalized database schema and data integrity',
    ],
    tech: ['Spring Boot', 'Thymeleaf', 'MySQL'],
    github: 'https://github.com/chinmayneema-dev/Banking-Management-System-Using-SpringBoot',
    color: 'purple',
  },
  {
    id: 'student',
    status: 'completed',
    statusLabel: null,
    title: 'Student Management System',
    description:
      'A Java-based web application providing complete academic and personal record management for students, with dynamic search and optimized database interactions.',
    features: [
      'CRUD operations for academic and personal records',
      'Dynamic search and advanced filtering',
      'JDBC query optimization for data retrieval',
    ],
    tech: ['Java', 'JSP/Servlets', 'JDBC', 'MySQL'],
    github: 'https://github.com/chinmayneema-dev/Student-Management-System',
    color: 'teal',
  },
  {
    id: 'ai-platform',
    status: 'planned',
    statusLabel: 'Planned',
    title: 'AI Resume Screening & Job Matching Platform',
    description:
      'A planned AI-powered platform to automate initial resume screening and match candidate skill profiles against job descriptions. Implementation has not yet begun.',
    features: [
      'Resume text and skill extraction',
      'Matching candidate skills to a job description',
      'Identifying missing or relevant skills',
      'Human-readable match result explanations',
    ],
    tech: ['Python', 'NLP / AI', 'TBD'],
    github: null,
    color: 'planned',
    note: 'This project is in the planning phase. No repository or demo is available yet.',
  },
];

function ProjectCard({ project }) {
  const isPlanned = project.status === 'planned';

  return (
    <article
      id={`project-${project.id}`}
      className={`project-card ${isPlanned ? 'project-card--planned' : ''}`}
      aria-labelledby={`project-${project.id}-title`}
    >
      {/* Top bar */}
      <div className={`project-card-bar project-card-bar--${project.color}`} aria-hidden="true" />

      <div className="project-card-inner">
        {/* Header */}
        <div className="project-card-header">
          <div className="project-card-header-left">
            {project.statusLabel && (
              <span className="status-badge planned" aria-label={`Project status: ${project.statusLabel}`}>
                {project.statusLabel}
              </span>
            )}
            <h3 className="project-title" id={`project-${project.id}-title`}>
              {project.title}
            </h3>
          </div>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-github-link"
              aria-label={`View ${project.title} on GitHub (opens in new tab)`}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15 3 21 3 21 9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
            </a>
          )}
          {!project.github && isPlanned && (
            <span className="project-no-repo" aria-label="No repository available yet">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
            </span>
          )}
        </div>

        {/* Description */}
        <p className="project-description">{project.description}</p>

        {/* Planned note */}
        {project.note && (
          <div className="project-planned-note" role="note">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="10"/>
              <line x1="12" y1="8" x2="12" y2="12"/>
              <line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
            {project.note}
          </div>
        )}

        {/* Features */}
        <ul className="project-features" aria-label="Key features">
          {project.features.map(f => (
            <li key={f} className="project-feature">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              {f}
            </li>
          ))}
        </ul>

        {/* Tech stack */}
        <div className="project-tech" aria-label="Technologies used">
          {project.tech.map(t => (
            <span key={t} className={`tech-badge ${project.color === 'teal' ? 'teal' : ''}`}>
              {t}
            </span>
          ))}
        </div>

        {/* Footer actions */}
        {project.github && (
          <div className="project-actions">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`btn ${project.color === 'teal' ? 'btn-outline-teal' : 'btn-secondary'}`}
              aria-label={`View ${project.title} source code on GitHub (opens in new tab)`}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
              View on GitHub
            </a>
          </div>
        )}
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section" aria-labelledby="projects-heading">
      <div className="container">
        <header className="section-header">
          <span className="section-label">What I've Built</span>
          <h2 className="section-title" id="projects-heading">
            My <span>Projects</span>
          </h2>
          <p className="section-subtitle">
            Real projects built and in planning. No demo URLs have been invented.
          </p>
        </header>

        <div className="projects-grid">
          {PROJECTS.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
