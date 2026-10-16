import React from 'react';
import './Skills.css';

// All skill categories as per spec
const SKILL_CATEGORIES = [
  {
    id: 'skills-frontend',
    label: 'Frontend Development',
    icon: '🖥️',
    color: 'purple',
    skills: [
      { name: 'HTML5',      icon: '📄' },
      { name: 'CSS3',       icon: '🎨' },
      { name: 'JavaScript', icon: '⚡' },
      { name: 'ReactJS',    icon: '⚛️', note: 'Currently Learning' },
    ],
  },
  {
    id: 'skills-backend',
    label: 'Backend Development',
    icon: '⚙️',
    color: 'teal',
    skills: [
      { name: 'Java',        icon: '☕' },
      { name: 'Spring Boot', icon: '🌿' },
      { name: 'Hibernate',   icon: '🔁' },
      { name: 'Servlets',    icon: '🔌' },
      { name: 'JSP',         icon: '📑' },
    ],
  },
  {
    id: 'skills-databases',
    label: 'Databases',
    icon: '🗄️',
    color: 'purple',
    skills: [
      { name: 'SQL',   icon: '📊' },
      { name: 'MySQL', icon: '🐬' },
    ],
  },
  {
    id: 'skills-tools',
    label: 'Tools & Technologies',
    icon: '🛠️',
    color: 'teal',
    skills: [
      { name: 'Git',           icon: '🌳' },
      { name: 'GitHub',        icon: '🐙' },
      { name: 'Java SDK 25',   icon: '☕' },
      { name: 'Postman',       icon: '📬' },
      { name: 'IntelliJ IDEA', icon: '🧠' },
      { name: 'VS Code',       icon: '💙' },
    ],
  },
  {
    id: 'skills-cs',
    label: 'CS Fundamentals',
    icon: '📚',
    color: 'purple',
    skills: [
      { name: 'Object-Oriented Programming', icon: '🏗️' },
      { name: 'Data Structures & Algorithms', icon: '🔢' },
      { name: 'Software Design',             icon: '📐' },
      { name: 'DBMS',                        icon: '🗃️' },
    ],
  },
];

function SkillCategory({ category }) {
  return (
    <section
      id={category.id}
      className="section skills-category-section"
      aria-labelledby={`${category.id}-heading`}
    >
      <div className="container">
        <header className="section-header">
          <span className="section-label" aria-hidden="true">{category.icon}</span>
          <h2 className="section-title" id={`${category.id}-heading`}>
            <span>{category.label}</span>
          </h2>
          <p className="section-subtitle">
            Technologies and tools I work with in this domain.
          </p>
        </header>

        <ul className="skills-grid" role="list" aria-label={`${category.label} skills`}>
          {category.skills.map(({ name, icon, note }) => (
            <li key={name} className={`skill-card card skill-card--${category.color}`}>
              <span className="skill-icon" aria-hidden="true">{icon}</span>
              <span className="skill-name">{name}</span>
              {note && (
                <span className="skill-note" role="note">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="12" y1="8" x2="12" y2="12"/>
                    <line x1="12" y1="16" x2="12.01" y2="16"/>
                  </svg>
                  {note}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default function Skills() {
  return (
    <>
      {SKILL_CATEGORIES.map(category => (
        <SkillCategory key={category.id} category={category} />
      ))}
    </>
  );
}
