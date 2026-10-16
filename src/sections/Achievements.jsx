import React from 'react';
import './Achievements.css';

const ACHIEVEMENTS = [
  {
    id: 'nptel-top1',
    icon: '🏆',
    title: 'NPTEL Top 1% Topper',
    course: 'Python for Data Science — IIT Madras',
    description:
      'Scored 87% in the NPTEL Python for Data Science course, achieving the Top 1% Topper badge among 16,331 enrolled candidates nationwide.',
    color: 'gold',
  },
  {
    id: 'nptel-java-score',
    icon: '☕',
    title: 'Strong NPTEL Java Score',
    course: 'Programming in Java — IIT Kharagpur',
    description:
      'Scored 82% in the NPTEL Programming in Java course conducted by IIT Kharagpur, demonstrating solid foundational Java knowledge.',
    color: 'purple',
  },
  {
    id: 'cgpa',
    icon: '🎓',
    title: 'B.Tech CGPA 8.11',
    course: 'CSE — Acropolis Institute, RGPV University',
    description:
      'Maintaining a CGPA of 8.11 in B.Tech Computer Science and Engineering (Batch 2023–2027, currently pursuing).',
    color: 'teal',
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="section" aria-labelledby="achievements-heading">
      <div className="container">
        <header className="section-header">
          <span className="section-label">Highlights</span>
          <h2 className="section-title" id="achievements-heading">
            <span>Achievements</span>
          </h2>
          <p className="section-subtitle">
            Verified milestones from my academic journey.
          </p>
        </header>

        <ul className="achievements-list" role="list">
          {ACHIEVEMENTS.map((item) => (
            <li key={item.id} className={`achievement-card card achievement-card--${item.color}`}>
              <div className="achievement-icon" aria-hidden="true">{item.icon}</div>
              <div className="achievement-body">
                <h3 className="achievement-title">{item.title}</h3>
                <p className="achievement-course">{item.course}</p>
                <p className="achievement-description">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
