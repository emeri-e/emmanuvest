import React, { useState, useEffect } from 'react';
import ThemeToggler from './components/ThemeToggler';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Comparison from './components/Comparison';
import Curriculum from './components/Curriculum';
import TargetAudience from './components/TargetAudience';
import Hosts from './components/Hosts';
import FAQ from './components/FAQ';
import CheckoutModal from './components/CheckoutModal';
import { ArrowRight, Sparkles, MessageCircle, AlertCircle } from 'lucide-react';

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('masterclass-theme') || 'emerald';
  });
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Set the data-theme attribute on the html element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('masterclass-theme', theme);
  }, [theme]);

  // Monitor scroll for header styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openCheckout = () => setIsCheckoutOpen(true);
  const closeCheckout = () => setIsCheckoutOpen(false);

  return (
    <div className="app-layout">
      {/* Dynamic glow background elements */}
      <div className="glow-spot" style={{ top: '2%', left: '10%' }}></div>
      <div className="glow-spot" style={{ top: '40%', right: '5%' }}></div>
      <div className="glow-spot" style={{ top: '80%', left: '15%' }}></div>

      {/* Header / Navigation */}
      <header className={`header-navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container header-container">
          <a href="#hero" className="logo-link">
            <div className="logo-icon">T</div>
            <div className="logo-text">
              <h3>Tehilla</h3>
              <span>Masterclass</span>
            </div>
          </a>

          <nav className="nav-links">
            <a href="#hero">The Class</a>
            <a href="#comparison">Comparison</a>
            <a href="#learn">Curriculum</a>
            <a href="#target">Audience</a>
            <a href="#hosts">Instructors</a>
            <a href="#faq">FAQ</a>
          </nav>

          <div className="header-actions">
            <ThemeToggler currentTheme={theme} setTheme={setTheme} />
            <button className="btn btn-primary btn-header-cta" onClick={openCheckout}>
              Join Masterclass
            </button>
          </div>
        </div>
      </header>

      {/* Main Sections */}
      <main>
        <Hero onCTA={openCheckout} />
        
        <Stats />
        
        <Comparison />
        
        <Curriculum />
        
        <TargetAudience />
        
        <Hosts />
        
        <FAQ />

        {/* Final CTA Section */}
        <section className="section final-cta-section" id="join">
          <div className="container" style={{ maxWidth: '900px' }}>
            <div className="glass-card cta-card text-center">
              <span className="section-tag">FINAL CALL</span>
              <h2>Ready To Command Your WhatsApp Audience?</h2>
              <p className="cta-description">
                Spots are strictly limited to keep class interaction high. Once we start, the price returns to its regular <strong>₦10,000</strong>. Secure your ticket today for only <strong>₦3,000</strong>.
              </p>
              
              <div className="cta-pricing-grid">
                <div className="cta-price-box">
                  <span className="cta-price-label">Standard Ticket</span>
                  <div className="cta-price-value">₦3,000</div>
                  <span className="cta-price-muted">One-time payment</span>
                </div>
                
                <div className="cta-features-box">
                  <div className="cta-feat-item">
                    <MessageCircle size={16} className="cta-feat-icon" />
                    <span>2 Days Live Group Access</span>
                  </div>
                  <div className="cta-feat-item">
                    <Sparkles size={16} className="cta-feat-icon" />
                    <span>Free templates & closing scripts</span>
                  </div>
                  <div className="cta-feat-item">
                    <AlertCircle size={16} className="cta-feat-icon" />
                    <span>Recorded sessions & lifetime downloads</span>
                  </div>
                </div>
              </div>

              <button className="btn btn-primary btn-large-cta" onClick={openCheckout}>
                Secure My Seat Now (₦3,000)
                <ArrowRight size={20} />
              </button>
              
              <p className="cta-guarantee">🛡️ 100% Satisfaction Guarantee. Learn practical skills or get your money back.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="app-footer">
        <div className="container footer-container">
          <div className="footer-top">
            <div className="footer-logo">
              <div className="logo-icon">T</div>
              <h3>Tehilla solutions</h3>
            </div>
            <p>Empowering creators and business operators with high-converting online systems.</p>
          </div>
          
          <div className="footer-divider"></div>
          
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} Tehilla Solutions. All Rights Reserved.</span>
            <div className="footer-links">
              <a href="#hero">Terms of Service</a>
              <a href="#hero">Privacy Policy</a>
              <a href="mailto:support@tehillasolutions.com">Support</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Checkout Modal */}
      <CheckoutModal isOpen={isCheckoutOpen} onClose={closeCheckout} />

      <style>{`
        /* App general layout */
        .app-layout {
          position: relative;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }
        
        main {
          flex: 1;
        }

        /* Header Navigation */
        .header-navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 80px;
          display: flex;
          align-items: center;
          z-index: 100;
          transition: all 0.3s ease;
          border-bottom: 1px solid transparent;
        }
        .header-navbar.scrolled {
          background: var(--bg-secondary);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--border-color);
          height: 70px;
          box-shadow: var(--card-shadow);
        }
        
        .header-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }
        
        .logo-link {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
        }
        .logo-icon {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--accent-color), #ffffff);
          color: #000000;
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.1rem;
        }
        .logo-text h3 {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1;
        }
        .logo-text span {
          font-size: 0.65rem;
          color: var(--text-secondary);
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }
        
        .nav-links {
          display: flex;
          gap: 24px;
        }
        .nav-links a {
          text-decoration: none;
          color: var(--text-secondary);
          font-size: 0.9rem;
          font-weight: 500;
          transition: color 0.2s ease;
        }
        .nav-links a:hover {
          color: var(--accent-color);
        }
        
        .header-actions {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .btn-header-cta {
          padding: 8px 16px;
          font-size: 0.85rem;
          border-radius: 8px;
        }

        /* Final CTA Section */
        .final-cta-section {
          background: rgba(0, 0, 0, 0.1);
        }
        .cta-card {
          padding: 50px;
          border-color: var(--accent-color);
        }
        .cta-description {
          font-size: 1.1rem;
          margin-bottom: 36px;
          max-width: 650px;
          margin-left: auto;
          margin-right: auto;
        }
        .cta-pricing-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 30px;
          text-align: left;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          border-radius: 16px;
          padding: 30px;
          margin-bottom: 36px;
        }
        .cta-price-box {
          display: flex;
          flex-direction: column;
          justify-content: center;
          border-right: 1px solid var(--border-color);
          padding-right: 30px;
        }
        .cta-price-label {
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-secondary);
        }
        .cta-price-value {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 2.8rem;
          font-weight: 800;
          color: var(--accent-color);
          line-height: 1.2;
          margin: 6px 0;
        }
        .cta-price-muted {
          font-size: 0.8rem;
          color: var(--text-secondary);
        }
        
        .cta-features-box {
          display: flex;
          flex-direction: column;
          gap: 16px;
          justify-content: center;
        }
        .cta-feat-item {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text-primary);
        }
        .cta-feat-icon {
          color: var(--accent-color);
          flex-shrink: 0;
        }
        .btn-large-cta {
          padding: 16px 40px;
          font-size: 1.1rem;
          border-radius: 14px;
        }
        .cta-guarantee {
          font-size: 0.8rem;
          margin-top: 16px;
          color: var(--text-secondary);
        }

        /* Footer styling */
        .app-footer {
          background: rgba(0, 0, 0, 0.4);
          border-top: 1px solid var(--border-color);
          padding: 40px 0;
          text-align: left;
        }
        .footer-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
        }
        .footer-logo {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .footer-logo h3 {
          font-size: 1.2rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .footer-top p {
          max-width: 400px;
          font-size: 0.85rem;
        }
        
        .footer-divider {
          height: 1px;
          background: var(--border-color);
          margin: 24px 0;
          opacity: 0.5;
        }
        
        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.8rem;
          flex-wrap: wrap;
          gap: 16px;
        }
        .footer-links {
          display: flex;
          gap: 20px;
        }
        .footer-links a {
          color: var(--text-secondary);
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .footer-links a:hover {
          color: var(--accent-color);
        }

        /* Responsive Layout adjustments */
        @media (max-width: 900px) {
          .nav-links {
            display: none; /* Hide standard navigation links on tablets/mobiles */
          }
          .cta-pricing-grid {
            grid-template-columns: 1fr;
            gap: 20px;
            padding: 20px;
          }
          .cta-price-box {
            border-right: none;
            border-bottom: 1px solid var(--border-color);
            padding-right: 0;
            padding-bottom: 20px;
            align-items: center;
          }
          .cta-features-box {
            align-items: flex-start;
          }
          .cta-card {
            padding: 30px;
          }
        }
        @media (max-width: 600px) {
          .btn-header-cta {
            display: none; /* Hide header CTA button on small mobiles, keeping only theme and logo */
          }
          .footer-top {
            flex-direction: column;
            align-items: flex-start;
          }
          .footer-bottom {
            flex-direction: column-reverse;
            align-items: flex-start;
          }
        }
      `}</style>
    </div>
  );
}
