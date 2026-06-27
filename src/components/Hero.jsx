import React, { useState, useEffect } from 'react';
import { Calendar, Users, MessageSquare, ArrowRight, ShieldCheck, Sparkles, Clock, CheckCircle2 } from 'lucide-react';

export default function Hero({ onCTA }) {
  // Countdown timer logic (dynamic countdown of 14 hours and 42 minutes for high urgency)
  const [timeLeft, setTimeLeft] = useState({ hours: 14, minutes: 42, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          return { hours: 23, minutes: 59, seconds: 59 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNum = (num) => String(num).padStart(2, '0');

  return (
    <section className="section hero-section" id="hero">
      <div className="glow-spot" style={{ top: '-10%', left: '30%' }}></div>
      <div className="container hero-grid">
        
        {/* Left: Copy & Call To Actions */}
        <div className="hero-content">
          <div className="badge hero-badge">
            <Sparkles size={14} style={{ marginRight: '6px' }} />
            PREMIUM WHATSAPP MONEY-MAKING MASTERCLASS
          </div>
          
          <h1 className="hero-title">
            YOU'RE NOT STUCK BECAUSE THERE ARE NO OPPORTUNITIES... <br />
            <span className="text-highlight">You're Stuck Because Nobody Taught You the Right System.</span>
          </h1>
          
          <p className="hero-description">
            Every single day, people are making money online. Not because they’re lucky, and definitely not because they have thousands of followers. They simply learned a profitable skill and followed a proven system. Stop jumping from Forex, Crypto, AI, Dropshipping, Sports Betting, to Mini Importation — stay long enough to master ONE system.
          </p>

          {/* Imagine Section */}
          <div className="imagine-box glass-card" style={{ marginBottom: '28px', padding: '22px 26px', borderRadius: '16px', borderLeft: '4px solid var(--accent-color)', background: 'linear-gradient(135deg, rgba(37, 211, 102, 0.05), transparent)' }}>
            <h4 style={{ fontSize: '1.05rem', color: 'var(--accent-color)', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px', letterSpacing: '0.02em', fontWeight: '700' }}>
              <Sparkles size={18} /> IMAGINE WHERE YOU COULD BE AFTER THIS MASTERCLASS:
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.95rem', color: 'var(--text-primary)' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <span style={{ background: 'var(--badge-bg)', color: 'var(--accent-color)', padding: '4px', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginTop: '2px', border: '1px solid var(--border-color)', boxShadow: '0 0 10px var(--accent-glow)' }}>
                  <CheckCircle2 size={15} />
                </span>
                <span>Clear roadmap to getting started with affiliate marketing.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <span style={{ background: 'var(--badge-bg)', color: 'var(--accent-color)', padding: '4px', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginTop: '2px', border: '1px solid var(--border-color)', boxShadow: '0 0 10px var(--accent-glow)' }}>
                  <CheckCircle2 size={15} />
                </span>
                <span>Practical strategies you can begin applying immediately.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <span style={{ background: 'var(--badge-bg)', color: 'var(--accent-color)', padding: '4px', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginTop: '2px', border: '1px solid var(--border-color)', boxShadow: '0 0 10px var(--accent-glow)' }}>
                  <CheckCircle2 size={15} />
                </span>
                <span>Understanding how successful marketers attract buyers & make sales.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <span style={{ background: 'var(--badge-bg)', color: 'var(--accent-color)', padding: '4px', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginTop: '2px', border: '1px solid var(--border-color)', boxShadow: '0 0 10px var(--accent-glow)' }}>
                  <CheckCircle2 size={15} />
                </span>
                <span>The confidence to stop chasing trends and build valuable digital skills.</span>
              </li>
            </ul>
          </div>

          {/* Early Bird & Timer Card */}
          <div className="timer-card glass-card">
            <div className="timer-info">
              <div className="price-tag">
                <span className="price-label">PREMIUM MASTERCLASS SEAT</span>
                <div className="prices">
                  <span className="current-price">₦2,000</span>
                  <span className="old-price">₦10,000</span>
                </div>
              </div>
              <div className="timer-divider"></div>
              <div className="countdown">
                <span className="countdown-label">
                  <Clock size={14} style={{ marginRight: '4px' }} /> Secure Payment • Instant Access
                </span>
                <div className="time-blocks">
                  <div className="time-block">
                    <span className="time-val">{formatNum(timeLeft.hours)}</span>
                    <span className="time-lbl">Hrs</span>
                  </div>
                  <span className="time-sep">:</span>
                  <div className="time-block">
                    <span className="time-val">{formatNum(timeLeft.minutes)}</span>
                    <span className="time-lbl">Mins</span>
                  </div>
                  <span className="time-sep">:</span>
                  <div className="time-block">
                    <span className="time-val">{formatNum(timeLeft.seconds)}</span>
                    <span className="time-lbl">Secs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-buttons">
            <button className="btn btn-primary btn-hero-cta" onClick={onCTA}>
              🚀 RESERVE YOUR SEAT TODAY — ₦2,000
              <ArrowRight size={18} />
            </button>
            <a href="#learn" className="btn btn-secondary">
              Explore Curriculum
            </a>
          </div>

          <div className="hero-trust">
            <div className="trust-item">
              <ShieldCheck size={16} className="trust-icon" />
              <span>No Hype • Practical System</span>
            </div>
            <div className="trust-item">
              <Calendar size={16} className="trust-icon" />
              <span>2-Day Intensive Masterclass</span>
            </div>
            <div className="trust-item">
              <MessageSquare size={16} className="trust-icon" />
              <span>Private WhatsApp Group</span>
            </div>
          </div>
        </div>

        {/* Right: Modern 3D Smartphone and Badges Mockup */}
        <div className="hero-visual">
          <div className="visual-wrapper">
            {/* Floating Badge 1 */}
            <div className="floating-badge fb-1 glass-card animate-float" style={{ animationDelay: '0s' }}>
              <div className="fb-icon-bg green"><Users size={16} /></div>
              <div>
                <h4>Master One Skill</h4>
                <p>Affiliate & WhatsApp Sales</p>
              </div>
            </div>

            {/* Floating Badge 2 */}
            <div className="floating-badge fb-2 glass-card animate-float" style={{ animationDelay: '1.5s' }}>
              <div className="fb-icon-bg blue"><MessageSquare size={16} /></div>
              <div>
                <h4>Build Trust Online</h4>
                <p>Attract buyers naturally</p>
              </div>
            </div>

            {/* Floating Badge 3 */}
            <div className="floating-badge fb-3 glass-card animate-float" style={{ animationDelay: '3s' }}>
              <div className="fb-icon-bg gold"><Sparkles size={16} /></div>
              <div>
                <h4>Proven System</h4>
                <p>Instant Access for ₦2,000</p>
              </div>
            </div>

            {/* Smartphone Container */}
            <div className="phone-mockup">
              <div className="phone-notch"></div>
              <div className="phone-screen">
                <div className="phone-header">
                  <div className="phone-avatar">E</div>
                  <div className="phone-status">
                    <h5>Coach Emmanuvest</h5>
                    <span>Online | Money-Making Masterclass</span>
                  </div>
                </div>
                <div className="phone-chat-area">
                  <div className="chat-bubble received">
                    <p>Ready to stop consuming info and start building real skills? 🚀</p>
                    <span className="chat-time">09:00 AM</span>
                  </div>
                  <div className="chat-bubble received">
                    <p>Confidence and I are revealing the exact WhatsApp sales system! 💡</p>
                    <span className="chat-time">09:01 AM</span>
                  </div>
                  <div className="chat-bubble sent">
                    <p>I just reserved my seat for ₦2,000! Let's go 🔥</p>
                    <span className="chat-time">09:03 AM</span>
                  </div>
                  <div className="chat-bubble received highlight">
                    <p>Welcome! You'll leave with clarity, direction & action plan. 🤝</p>
                    <span className="chat-time">09:04 AM</span>
                  </div>
                </div>
                <div className="phone-input-bar">
                  <div className="mock-input">Message...</div>
                  <div className="send-btn-mock"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <style>{`
        .hero-section {
          padding-top: 120px;
          padding-bottom: 80px;
        }
        .hero-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 60px;
          align-items: center;
        }
        .hero-content {
          text-align: left;
          z-index: 10;
        }
        .hero-badge {
          margin-bottom: 24px;
        }
        .hero-title {
          font-size: 3.5rem;
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -0.03em;
          margin-bottom: 20px;
        }
        .text-highlight {
          color: var(--accent-color);
          position: relative;
          display: inline-block;
        }
        .hero-description {
          font-size: 1.15rem;
          line-height: 1.6;
          margin-bottom: 32px;
          color: var(--text-secondary);
        }
        
        /* Timer Card */
        .timer-card {
          margin-bottom: 36px;
          padding: 20px 24px;
          background: rgba(var(--bg-secondary), 0.4);
        }
        .timer-info {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 20px;
        }
        .price-tag {
          display: flex;
          flex-direction: column;
        }
        .price-label {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--text-secondary);
          letter-spacing: 0.05em;
        }
        .prices {
          display: flex;
          align-items: baseline;
          gap: 10px;
          margin-top: 4px;
        }
        .current-price {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 2.2rem;
          font-weight: 800;
          color: var(--accent-color);
          line-height: 1;
        }
        .old-price {
          font-size: 1.1rem;
          text-decoration: line-through;
          color: var(--text-secondary);
          opacity: 0.6;
        }
        .timer-divider {
          width: 1px;
          height: 50px;
          background: var(--border-color);
        }
        .countdown {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .countdown-label {
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 6px;
          display: flex;
          align-items: center;
        }
        .time-blocks {
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .time-block {
          display: flex;
          flex-direction: column;
          align-items: center;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          border-radius: 8px;
          min-width: 48px;
          padding: 4px 6px;
        }
        .time-val {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1.2;
        }
        .time-lbl {
          font-size: 0.65rem;
          color: var(--text-secondary);
          text-transform: uppercase;
        }
        .time-sep {
          color: var(--accent-color);
          font-weight: bold;
          font-size: 1.2rem;
          margin-bottom: 12px;
        }

        .hero-buttons {
          display: flex;
          gap: 16px;
          margin-bottom: 36px;
          flex-wrap: wrap;
        }
        .btn-hero-cta {
          flex: 1;
          min-width: 230px;
        }
        
        .hero-trust {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
        }
        .trust-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.85rem;
          color: var(--text-primary);
          font-weight: 500;
        }
        .trust-icon {
          color: var(--accent-color);
        }

        /* Hero Visual - Smartphone & Floating badgess */
        .hero-visual {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          z-index: 5;
        }
        .visual-wrapper {
          position: relative;
          width: 100%;
          max-width: 380px;
        }
        
        /* Floating Badges */
        .floating-badge {
          position: absolute;
          z-index: 10;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 18px;
          border-radius: 16px;
          width: 220px;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }
        .fb-icon-bg {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #000000;
        }
        .fb-icon-bg.green { background: #25d366; }
        .fb-icon-bg.blue { background: #00f0ff; }
        .fb-icon-bg.gold { background: #f59e0b; }
        
        .floating-badge h4 {
          font-size: 0.85rem;
          margin-bottom: 2px;
          text-align: left;
        }
        .floating-badge p {
          font-size: 0.75rem;
          text-align: left;
          color: var(--text-secondary);
        }
        
        .fb-1 { top: 12%; left: -25%; }
        .fb-2 { top: 48%; right: -25%; }
        .fb-3 { bottom: 12%; left: -20%; }

        /* Smartphone Structure */
        .phone-mockup {
          width: 260px;
          height: 520px;
          background: #000000;
          border: 10px solid #202025;
          border-radius: 40px;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 20px rgba(255, 255, 255, 0.05);
          position: relative;
          overflow: hidden;
          margin: 0 auto;
          transform: perspective(800px) rotateY(-8deg) rotateX(4deg);
          transition: transform 0.5s ease;
        }
        .phone-mockup:hover {
          transform: perspective(800px) rotateY(0deg) rotateX(0deg);
        }
        .phone-notch {
          width: 120px;
          height: 18px;
          background: #202025;
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          border-bottom-left-radius: 12px;
          border-bottom-right-radius: 12px;
          z-index: 20;
        }
        .phone-screen {
          width: 100%;
          height: 100%;
          background: #0b141a;
          display: flex;
          flex-direction: column;
          padding-top: 18px;
        }
        .phone-header {
          display: flex;
          align-items: center;
          gap: 8px;
          background: #111b21;
          padding: 10px;
          border-bottom: 1px solid #222d34;
        }
        .phone-avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #25d366;
          color: #000000;
          font-weight: bold;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.9rem;
        }
        .phone-status {
          text-align: left;
        }
        .phone-status h5 {
          font-size: 0.8rem;
          color: #e9edef;
          margin: 0;
        }
        .phone-status span {
          font-size: 0.6rem;
          color: #8696a0;
        }
        .phone-chat-area {
          flex: 1;
          padding: 12px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          overflow: hidden;
        }
        .chat-bubble {
          max-width: 85%;
          padding: 8px 10px;
          border-radius: 12px;
          font-size: 0.72rem;
          line-height: 1.3;
          position: relative;
          color: #e9edef;
          text-align: left;
        }
        .chat-bubble.received {
          align-self: flex-start;
          background: #202c33;
          border-top-left-radius: 0;
        }
        .chat-bubble.sent {
          align-self: flex-end;
          background: #005c4b;
          border-top-right-radius: 0;
        }
        .chat-bubble.received.highlight {
          background: rgba(37, 211, 102, 0.15);
          border: 1px solid rgba(37, 211, 102, 0.3);
        }
        .chat-time {
          display: block;
          font-size: 0.55rem;
          color: #8696a0;
          text-align: right;
          margin-top: 4px;
        }
        .phone-input-bar {
          background: #111b21;
          padding: 10px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .mock-input {
          flex: 1;
          background: #2a3942;
          border-radius: 16px;
          padding: 6px 12px;
          font-size: 0.72rem;
          color: #8696a0;
          text-align: left;
        }
        .send-btn-mock {
          width: 28px;
          height: 28px;
          background: #00a884;
          border-radius: 50%;
        }

        /* Responsiveness */
        @media (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 50px;
          }
          .hero-content {
            text-align: center;
          }
          .hero-badge {
            margin: 0 auto 20px;
          }
          .hero-title {
            font-size: 2.8rem;
          }
          .hero-description {
            font-size: 1.05rem;
          }
          .timer-card {
            max-width: 550px;
            margin-left: auto;
            margin-right: auto;
          }
          .hero-buttons {
            justify-content: center;
          }
          .hero-trust {
            justify-content: center;
          }
          .hero-visual {
            margin-top: 20px;
          }
        }
        
        @media (max-width: 600px) {
          .hero-title {
            font-size: 2.2rem;
          }
          .timer-info {
            flex-direction: column;
            align-items: center;
          }
          .timer-divider {
            width: 80%;
            height: 1px;
          }
          .countdown {
            align-items: center;
          }
          .floating-badge {
            display: none; /* Hide floating badges on very small viewports to avoid overlapping */
          }
          .phone-mockup {
            transform: none;
          }
          .phone-mockup:hover {
            transform: none;
          }
        }
      `}</style>
    </section>
  );
}
