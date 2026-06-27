import React from 'react';
import { UserCheck, UserX, CheckCircle, AlertCircle } from 'lucide-react';

const isForItems = [
  "Beginners looking for a clear starting point",
  "Students wanting to build financial independence",
  "NYSC Members preparing for life after service",
  "Salary Earners seeking an additional income stream",
  "Business Owners who want to attract more paying customers",
  "Content Creators looking to monetize their audience",
  "Anyone serious about building a real online income"
];

const isNotForItems = [
  "Anyone looking for overnight riches or get-rich-quick schemes",
  "Anyone unwilling to learn new skills and open their mind",
  "Anyone expecting results without taking consistent action"
];

export default function TargetAudience() {
  return (
    <section className="section target-section" id="target">
      <div className="container">
        
        <div className="text-center">
          <span className="section-tag">WHO IS IT FOR?</span>
          <h2 className="section-title">Is This Masterclass For You?</h2>
          <p className="section-subtitle">
            Let's be completely transparent. This class is designed to deliver immediate results, but only for those who fit the profile.
          </p>
        </div>

        <div className="target-grid">
          
          {/* For Card */}
          <div className="glass-card target-card for-card">
            <div className="target-header for">
              <div className="target-icon-bg for">
                <UserCheck size={22} />
              </div>
              <div>
                <h3>This Is Perfect For You If:</h3>
                <p>You want a repeatable sales process</p>
              </div>
            </div>
            <div className="target-divider"></div>
            <ul className="target-list">
              {isForItems.map((item, idx) => (
                <li key={idx} className="target-item">
                  <CheckCircle size={18} className="item-icon for" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not For Card */}
          <div className="glass-card target-card not-card">
            <div className="target-header not">
              <div className="target-icon-bg not">
                <UserX size={22} />
              </div>
              <div>
                <h3>This Is NOT For You If:</h3>
                <p>You expect magic with zero action</p>
              </div>
            </div>
            <div className="target-divider"></div>
            <ul className="target-list">
              {isNotForItems.map((item, idx) => (
                <li key={idx} className="target-item">
                  <AlertCircle size={18} className="item-icon not" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>

      <style>{`
        .target-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 32px;
          margin-top: 20px;
        }
        .target-card {
          text-align: left;
          display: flex;
          flex-direction: column;
          padding: 40px;
        }
        .target-card.for-card {
          border-color: var(--border-color);
        }
        .target-card.not-card {
          border-color: rgba(239, 68, 68, 0.15);
        }
        .target-card.not-card:hover {
          border-color: #ef4444;
          box-shadow: 0 10px 25px -5px rgba(239, 68, 68, 0.12), var(--card-shadow);
        }
        
        .target-header {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .target-header h3 {
          font-size: 1.35rem;
          margin-bottom: 2px;
        }
        .target-header p {
          font-size: 0.85rem;
          color: var(--text-secondary);
        }
        
        .target-icon-bg {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .target-icon-bg.for {
          background: var(--badge-bg);
          color: var(--accent-color);
          border: 1px solid var(--border-color);
        }
        .target-icon-bg.not {
          background: rgba(239, 68, 68, 0.1);
          color: #ef4444;
          border: 1px solid rgba(239, 68, 68, 0.2);
        }
        
        .target-divider {
          height: 1px;
          background: var(--border-color);
          margin: 24px 0;
          opacity: 0.5;
        }
        
        .target-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .target-item {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          font-size: 0.95rem;
          line-height: 1.4;
          color: var(--text-primary);
        }
        .item-icon {
          flex-shrink: 0;
          margin-top: 3px;
        }
        .item-icon.for {
          color: var(--accent-color);
        }
        .item-icon.not {
          color: #ef4444;
        }

        @media (max-width: 900px) {
          .target-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .target-card {
            padding: 24px;
          }
        }
      `}</style>
    </section>
  );
}
