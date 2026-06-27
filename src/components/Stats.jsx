import React from 'react';
import { Users, Award, BookOpen, ThumbsUp } from 'lucide-react';

const statsData = [
  {
    icon: Users,
    value: "2,000+",
    label: "Community Members Impacted",
    description: "Helping people gain practical digital skills, valuable insights, and confidence to start their online journey."
  },
  {
    icon: Award,
    value: "2",
    label: "Industry Experts",
    description: "Learn from two experienced digital marketers with complementary expertise in Affiliate, WhatsApp, and Content Marketing."
  },
  {
    icon: BookOpen,
    value: "2-Day",
    label: "Intensive Training",
    description: "Two value-packed sessions designed to give you a clear roadmap, practical strategies, and actionable implementation."
  },
  {
    icon: ThumbsUp,
    value: "Beginner-Friendly",
    label: "Step-by-Step Learning",
    description: "Whether you're just getting started or looking to improve your skills, everything is explained in a simple, practical way."
  }
];

export default function Stats() {
  return (
    <section className="section stats-section" id="stats">
      <div className="container">
        <div className="stats-grid">
          {statsData.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="glass-card stat-card">
                <div className="stat-icon-wrapper">
                  <Icon size={24} className="stat-icon" />
                </div>
                <h3 className="stat-value">{stat.value}</h3>
                <h4 className="stat-label">{stat.label}</h4>
                <p className="stat-description">{stat.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .stats-section {
          background: rgba(0, 0, 0, 0.2);
          position: relative;
        }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }
        .stat-card {
          text-align: center;
          padding: 30px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .stat-icon-wrapper {
          width: 50px;
          height: 50px;
          border-radius: 12px;
          background: var(--badge-bg);
          border: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
          color: var(--accent-color);
        }
        .stat-value {
          font-size: 2.2rem;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 6px;
          letter-spacing: -0.02em;
        }
        .stat-label {
          font-size: 1rem;
          font-weight: 600;
          color: var(--accent-color);
          margin-bottom: 12px;
        }
        .stat-description {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.4;
        }
        
        @media (max-width: 1024px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
        }
        @media (max-width: 600px) {
          .stats-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .stat-value {
            font-size: 2rem;
          }
        }
      `}</style>
    </section>
  );
}
