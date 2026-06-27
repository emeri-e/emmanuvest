import React, { useState } from 'react';
import { XCircle, CheckCircle2, TrendingUp, HelpCircle } from 'lucide-react';

const averageTraits = [
  "Consuming endless videos & saving motivational posts without taking action",
  "Jumping between Forex, Crypto, AI, Dropshipping, Betting & Mini Importation",
  "Buying random courses and never staying long enough to master one skill",
  "Trying to convince people to buy things nobody needs without a system",
  "Relying on guesswork and feeling confused, overwhelmed, and stuck"
];

const eliteTraits = [
  "Learning ONE high-demand digital skill and becoming really good at it",
  "Following a proven affiliate & WhatsApp marketing roadmap step-by-step",
  "Attracting eager buyers using high-converting content frameworks",
  "Choosing winning products people already actively want to buy",
  "Building a repeatable system that pays consistently for years"
];

export default function Comparison() {
  const [activeTab, setActiveTab] = useState('elite'); // 'average' or 'elite' (mainly for mobile toggle)

  return (
    <section className="section comparison-section" id="comparison">
      <div className="glow-spot" style={{ bottom: '-10%', right: '10%' }}></div>
      <div className="container">
        
        <div className="text-center">
          <span className="section-tag">THE REAL TRUTH</span>
          <h2 className="section-title">WHY MOST PEOPLE NEVER MAKE MONEY ONLINE</h2>
          <p className="section-subtitle" style={{ maxWidth: '750px', margin: '0 auto 30px' }}>
            It's not because they're lazy, and it's not because there are no opportunities. It's because they're <strong>consuming information instead of building skills</strong>. Success online isn't about knowing everything — it's about learning ONE skill and mastering it.
          </p>
        </div>

        {/* Mobile Tab Toggles */}
        <div className="comparison-tabs">
          <button 
            className={`tab-btn ${activeTab === 'average' ? 'active average' : ''}`}
            onClick={() => setActiveTab('average')}
          >
            Info Consumer (Stuck)
          </button>
          <button 
            className={`tab-btn ${activeTab === 'elite' ? 'active elite' : ''}`}
            onClick={() => setActiveTab('elite')}
          >
            Skill Master (Profitable)
          </button>
        </div>

        {/* Side by side grid */}
        <div className="comparison-grid">
          
          {/* Average User Card */}
          <div className={`glass-card comp-card average-card ${activeTab === 'average' ? 'mobile-visible' : 'mobile-hidden'}`}>
            <div className="card-header">
              <div className="comp-badge bad">
                <XCircle size={16} />
                THE INFO CONSUMER
              </div>
              <h3>Chasing Every Trend</h3>
              <p className="price-range">Result: Zero growth & constant confusion</p>
            </div>
            <div className="card-divider"></div>
            <ul className="traits-list">
              {averageTraits.map((trait, idx) => (
                <li key={idx} className="trait-item bad">
                  <XCircle size={18} className="trait-icon bad" />
                  <span>{trait}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Elite Creator Card */}
          <div className={`glass-card comp-card elite-card ${activeTab === 'elite' ? 'mobile-visible' : 'mobile-hidden'}`}>
            <div className="card-header">
              <div className="comp-badge good">
                <CheckCircle2 size={16} />
                THE SKILL BUILDER
              </div>
              <h3>Mastering One System</h3>
              <p className="price-range">Result: Clarity, confidence & lasting income</p>
            </div>
            <div className="card-divider"></div>
            <ul className="traits-list">
              {eliteTraits.map((trait, idx) => (
                <li key={idx} className="trait-item good">
                  <CheckCircle2 size={18} className="trait-icon good" />
                  <span>{trait}</span>
                </li>
              ))}
            </ul>
            <div className="card-sparkle">
              <TrendingUp size={16} style={{ marginRight: '6px' }} />
              This Masterclass builds this exact focus
            </div>
          </div>

        </div>

      </div>

      <style>{`
        .comparison-tabs {
          display: none;
          justify-content: center;
          gap: 10px;
          margin-bottom: 24px;
        }
        .tab-btn {
          flex: 1;
          padding: 12px;
          border-radius: 12px;
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 600;
          font-size: 0.95rem;
          border: 1px solid var(--border-color);
          background: var(--bg-secondary);
          color: var(--text-secondary);
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .tab-btn.active.average {
          background: rgba(239, 68, 68, 0.15);
          border-color: #ef4444;
          color: #ef4444;
        }
        .tab-btn.active.elite {
          background: var(--badge-bg);
          border-color: var(--accent-color);
          color: var(--accent-color);
          box-shadow: 0 0 15px var(--accent-glow);
        }

        .comparison-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          margin-top: 20px;
        }
        .comp-card {
          text-align: left;
          position: relative;
          display: flex;
          flex-direction: column;
          padding: 40px;
        }
        .comp-card.average-card {
          border-color: rgba(239, 68, 68, 0.15);
        }
        .comp-card.average-card:hover {
          border-color: #ef4444;
          box-shadow: 0 10px 25px -5px rgba(239, 68, 68, 0.1), var(--card-shadow);
        }
        .comp-card.elite-card {
          border-color: var(--accent-color);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2), var(--card-shadow);
        }
        
        .comp-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          padding: 6px 12px;
          border-radius: 6px;
          margin-bottom: 16px;
        }
        .comp-badge.bad {
          background: rgba(239, 68, 68, 0.1);
          color: #ef4444;
          border: 1px solid rgba(239, 68, 68, 0.2);
        }
        .comp-badge.good {
          background: var(--badge-bg);
          color: var(--badge-text);
          border: 1px solid var(--border-color);
        }
        
        .card-header h3 {
          font-size: 1.6rem;
          margin-bottom: 6px;
        }
        .price-range {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-primary);
        }
        
        .card-divider {
          height: 1px;
          background: var(--border-color);
          margin: 24px 0;
          opacity: 0.5;
        }
        
        .traits-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 24px;
        }
        .trait-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-size: 0.95rem;
          line-height: 1.4;
        }
        .trait-item.bad {
          color: var(--text-secondary);
        }
        .trait-item.good {
          color: var(--text-primary);
        }
        .trait-icon {
          flex-shrink: 0;
          margin-top: 3px;
        }
        .trait-icon.bad {
          color: #ef4444;
        }
        .trait-icon.good {
          color: var(--accent-color);
        }
        
        .card-sparkle {
          margin-top: auto;
          background: var(--badge-bg);
          color: var(--accent-color);
          border: 1px solid var(--border-color);
          padding: 10px 16px;
          border-radius: 10px;
          font-size: 0.85rem;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
        }

        @media (max-width: 768px) {
          .comparison-tabs {
            display: flex;
          }
          .comparison-grid {
            grid-template-columns: 1fr;
            gap: 0;
          }
          .comp-card {
            padding: 24px;
          }
          .mobile-hidden {
            display: none;
          }
          .mobile-visible {
            display: flex;
          }
        }
      `}</style>
    </section>
  );
}
