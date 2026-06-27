import React, { useState } from 'react';
import { BookOpen, CheckCircle, Gift, Award, ShieldCheck, Zap, Layers, Target, Users, Sparkles } from 'lucide-react';

const coreModules = [
  {
    title: "Build The Right Foundation",
    description: "Understand what Affiliate Marketing really is, why thousands of people choose it, and how to avoid the biggest mistakes beginners make.",
    keyTakeaway: "Clear mindset & foundation blueprint"
  },
  {
    title: "Learn How To Find Winning Products",
    description: "Discover how successful affiliates choose products people already want — instead of trying to convince people to buy things nobody needs.",
    keyTakeaway: "High-demand product selection framework"
  },
  {
    title: "Master WhatsApp Marketing",
    description: "Learn how to turn ordinary conversations into paying customers — without begging, without spamming, and without sounding desperate.",
    keyTakeaway: "Conversational conversion system"
  },
  {
    title: "Create Content That Sells",
    description: "Discover how to attract eager buyers naturally to your business instead of chasing them.",
    keyTakeaway: "Buyer attraction content formula"
  },
  {
    title: "Build Trust Online",
    description: "People buy from people they trust. Learn simple strategies that help you stand out — even if you're just starting from scratch.",
    keyTakeaway: "Instant trust & authority positioning"
  },
  {
    title: "Learn The Sales Process",
    description: "Understand how successful marketers generate leads, follow up effectively, handle objections effortlessly, and close sales.",
    keyTakeaway: "4-Step complete sales engine"
  },
  {
    title: "Build Long-Term Income",
    description: "The goal isn't just one sale. The goal is building a valuable skill that can continue paying you for years to come.",
    keyTakeaway: "Sustainable digital income skill"
  }
];

const deliverables = [
  "Live Premium WhatsApp Masterclass",
  "Lifetime Replay Access",
  "Step-by-Step Implementation Roadmap",
  "WhatsApp Sales Framework",
  "Content Creation Blueprint",
  "Proven Sales Scripts",
  "High-Converting Marketing Templates",
  "Live Interactive Questions & Answers",
  "Private WhatsApp Community Access"
];

export default function Curriculum() {
  return (
    <section className="section curriculum-section" id="learn">
      <div className="glow-spot" style={{ top: '10%', left: '5%' }}></div>
      <div className="container">
        
        <div className="text-center">
          <span className="section-tag">WHAT YOU'LL LEARN</span>
          <h2 className="section-title">HERE'S WHAT YOU'LL LEARN</h2>
          <p className="section-subtitle" style={{ maxWidth: '700px', margin: '0 auto 40px' }}>
            A practical, actionable, and beginner-friendly masterclass designed to give you clarity, direction, and an immediate action plan.
          </p>
        </div>

        {/* Core Learning Modules */}
        <div className="modules-grid glass-card" style={{ padding: '36px', marginBottom: '50px' }}>
          <div className="grid-list" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {coreModules.map((mod, idx) => (
              <div key={idx} className="module-item-box" style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)', borderRadius: '14px', padding: '20px', textAlign: 'left' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <span style={{ background: 'var(--badge-bg)', color: 'var(--accent-color)', width: '28px', height: '28px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '0.85rem' }}>{idx + 1}</span>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--text-primary)', margin: 0 }}>{mod.title}</h3>
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.5', marginBottom: '12px' }}>{mod.description}</p>
                <div style={{ fontSize: '0.8rem', color: 'var(--accent-color)', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Zap size={14} /> <span>Outcome: {mod.keyTakeaway}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Deliverables Grid & Difference */}
        <div className="deliverables-section" style={{ marginTop: '40px' }}>
          <div className="text-center" style={{ marginBottom: '30px' }}>
            <span className="section-tag" style={{ background: 'var(--badge-bg)', color: 'var(--accent-color)' }}>FULL PACKAGE</span>
            <h2 className="section-title" style={{ fontSize: '2rem' }}>EVERYTHING YOU'LL RECEIVE</h2>
          </div>

          <div className="glass-card" style={{ padding: '36px', borderRadius: '20px', marginBottom: '40px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px', textAlign: 'left' }}>
              {deliverables.map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(255,255,255,0.03)', padding: '14px 18px', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                  <CheckCircle size={20} style={{ color: 'var(--accent-color)', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.95rem', fontWeight: '600', color: 'var(--text-primary)' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Why This Masterclass Is Different */}
          <div className="glass-card text-center" style={{ padding: '36px', borderRadius: '20px', border: '1px solid var(--accent-color)', background: 'linear-gradient(135deg, rgba(var(--accent-color-rgb, 37, 211, 102), 0.05), transparent)' }}>
            <span className="section-tag">NO HYPE • JUST RESULTS</span>
            <h3 style={{ fontSize: '1.6rem', fontWeight: '800', marginBottom: '16px', marginTop: '8px' }}>WHY THIS MASTERCLASS IS DIFFERENT</h3>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', maxWidth: '750px', margin: '0 auto', lineHeight: '1.6' }}>
              This isn't another motivational seminar or "make money fast" webinar. This is <strong>practical, actionable, and beginner-friendly</strong>. Everything you'll learn is designed to help you understand how online business actually works, leaving you with total clarity, confidence, and a roadmap you can follow.
            </p>
          </div>
        </div>

      </div>

      <style>{`
        .day-selectors {
          display: flex;
          gap: 20px;
          margin-bottom: 40px;
          justify-content: center;
        }
        .day-btn {
          flex: 1;
          max-width: 350px;
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 16px 24px;
          border-radius: 16px;
          border: 1px solid var(--border-color);
          background: var(--bg-secondary);
          color: var(--text-secondary);
          cursor: pointer;
          text-align: left;
          transition: all 0.3s ease;
        }
        .day-btn.active {
          background: var(--badge-bg);
          border-color: var(--accent-color);
          color: var(--accent-color);
          box-shadow: 0 0 20px var(--accent-glow);
        }
        .day-btn h3 {
          font-size: 1rem;
          margin-bottom: 2px;
          color: inherit;
        }
        .day-btn p {
          font-size: 0.75rem;
          color: var(--text-secondary);
        }
        .day-btn.active p {
          color: var(--text-primary);
        }
        
        /* Timeline styling */
        .timeline-container {
          position: relative;
          padding: 40px;
          text-align: left;
        }
        .timeline-line {
          position: absolute;
          top: 40px;
          bottom: 40px;
          left: 55px;
          width: 2px;
          background: var(--border-color);
        }
        .timeline-item {
          display: flex;
          margin-bottom: 40px;
          position: relative;
        }
        .timeline-item:last-child {
          margin-bottom: 0;
        }
        .timeline-marker {
          width: 32px;
          display: flex;
          justify-content: center;
          position: relative;
          z-index: 5;
          margin-right: 24px;
        }
        .marker-dot {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: var(--bg-tertiary);
          border: 2px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary);
          transition: all 0.3s ease;
        }
        .timeline-item:hover .marker-dot {
          background: var(--accent-color);
          border-color: var(--accent-color);
          color: #000000;
          box-shadow: 0 0 12px var(--accent-glow);
        }
        .marker-icon {
          margin-left: 2px;
        }
        .timeline-content-card {
          flex: 1;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          padding: 24px;
          transition: border-color 0.3s ease;
        }
        .timeline-item:hover .timeline-content-card {
          border-color: var(--border-color);
        }
        .time-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.75rem;
          font-weight: 600;
          padding: 4px 10px;
          border-radius: 6px;
          background: var(--badge-bg);
          color: var(--badge-text);
          margin-bottom: 12px;
        }
        .module-title {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 10px;
        }
        .module-desc {
          font-size: 0.95rem;
          line-height: 1.5;
          color: var(--text-secondary);
          margin-bottom: 16px;
        }
        .module-takeaway {
          display: flex;
          gap: 8px;
          font-size: 0.85rem;
          padding: 8px 14px;
          background: var(--bg-tertiary);
          border-radius: 8px;
          border-left: 3px solid var(--accent-color);
          flex-wrap: wrap;
        }
        .takeaway-label {
          font-weight: 700;
          color: var(--text-primary);
        }
        .takeaway-val {
          color: var(--text-secondary);
        }

        @media (max-width: 768px) {
          .day-selectors {
            flex-direction: column;
            align-items: center;
          }
          .day-btn {
            width: 100%;
            max-width: 100%;
          }
          .timeline-line {
            left: 35px;
          }
          .timeline-marker {
            margin-right: 12px;
          }
          .marker-dot {
            width: 24px;
            height: 24px;
          }
          .timeline-content-card {
            padding: 16px;
          }
        }
      `}</style>
    </section>
  );
}
