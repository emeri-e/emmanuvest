import React from 'react';
import { Award, ShieldCheck, Star, Users, CheckCircle } from 'lucide-react';

const instructors = [
  {
    name: "Coach Emmanuvest",
    title: "Digital Entrepreneur • Affiliate Marketer • Content Creator",
    bio: "Like many beginners, I spent months consuming content, testing different strategies, and trying to figure out what actually worked. Over time, I discovered that success doesn't come from chasing every opportunity—it comes from mastering the right skills and applying them consistently. This masterclass is my way of shortening your learning curve so you can stop guessing and start building.",
    credentials: ["Digital Entrepreneur", "Affiliate Marketer", "Content Creator"],
    image: "/emmanuel.jpeg",
    accent: "var(--accent-color)"
  },
  {
    name: "Confidence Udeh",
    title: "WhatsApp Marketing Strategist • Digital Entrepreneur • WhatsApp Influencer",
    bio: "Confidence realized that making money online isn't just about finding opportunities—it's about attracting the right audience. She discovered that one of the most powerful business tools is WhatsApp. By creating valuable content and earning trust, she built an engaged audience and helps businesses turn conversations into opportunities.",
    credentials: ["WhatsApp Strategist", "Digital Entrepreneur", "WhatsApp Influencer"],
    image: "/confidence_udeh.jpeg",
    accent: "#00f0ff"
  }
];

export default function Hosts() {
  return (
    <section className="section hosts-section" id="hosts">
      <div className="glow-spot" style={{ top: '30%', right: '25%' }}></div>
      <div className="container">
        
        <div className="text-center">
          <span className="section-tag">MEET YOUR HOSTS</span>
          <h2 className="section-title">Learn From Experienced Digital Marketers</h2>
          <p className="section-subtitle">
            Get practical insights, proven strategies, and step-by-step guidance from mentors who have mastered online business.
          </p>
        </div>

        <div className="hosts-grid">
          {instructors.map((host, idx) => (
            <div key={idx} className="glass-card host-card">
              <div className="host-top">
                <div className="host-avatar-wrapper" style={{ borderColor: host.accent }}>
                  <img 
                    src={host.image} 
                    alt={host.name} 
                    className="host-photo"
                    style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }}
                  />
                  <div className="host-badge-icon" style={{ background: host.accent }}>
                    <Star size={12} style={{ color: '#000' }} />
                  </div>
                </div>
                
                <div className="host-meta">
                  <h3>{host.name}</h3>
                  <p className="host-title" style={{ fontSize: '0.85rem', color: host.accent }}>{host.title}</p>
                </div>
              </div>
              
              <p className="host-bio">{host.bio}</p>
              
              <div className="host-divider"></div>
              
              <div className="credentials-container">
                {host.credentials.map((cred, cIdx) => (
                  <span key={cIdx} className="cred-badge">
                    <ShieldCheck size={12} className="cred-icon" style={{ color: host.accent }} />
                    {cred}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .hosts-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          margin-top: 20px;
        }
        .host-card {
          text-align: left;
          padding: 40px;
          display: flex;
          flex-direction: column;
        }
        .host-top {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 24px;
        }
        
        .host-avatar-wrapper {
          width: 90px;
          height: 90px;
          border-radius: 50%;
          border: 2.5px solid var(--accent-color);
          position: relative;
          padding: 3px;
          flex-shrink: 0;
        }
        .host-badge-icon {
          position: absolute;
          bottom: 2px;
          right: 2px;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid #000;
        }
        
        .host-meta h3 {
          font-size: 1.45rem;
          margin-bottom: 6px;
        }
        .host-title {
          font-size: 0.85rem;
          font-weight: 600;
          line-height: 1.3;
        }
        
        .host-bio {
          font-size: 0.95rem;
          line-height: 1.6;
          color: var(--text-secondary);
          margin-bottom: 24px;
        }
        
        .host-divider {
          height: 1px;
          background: var(--border-color);
          margin-bottom: 20px;
          opacity: 0.5;
        }
        
        .credentials-container {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: auto;
        }
        .cred-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.8rem;
          font-weight: 600;
          padding: 6px 12px;
          border-radius: 8px;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          color: var(--text-primary);
        }
        .cred-icon {
          flex-shrink: 0;
        }

        @media (max-width: 900px) {
          .hosts-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .host-card {
            padding: 24px;
          }
        }
        @media (max-width: 480px) {
          .host-top {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }
        }
      `}</style>
    </section>
  );
}
