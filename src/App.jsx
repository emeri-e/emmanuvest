import React, { useState, useEffect } from 'react';
import ThemeToggler from './components/ThemeToggler';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Comparison from './components/Comparison';
import Curriculum from './components/Curriculum';
import TargetAudience from './components/TargetAudience';
import Hosts from './components/Hosts';
import FAQ from './components/FAQ';
import CMSOverview from './components/CMSOverview';
import CheckoutModal from './components/CheckoutModal';
import { ArrowRight, Sparkles, MessageCircle, AlertCircle, ShieldCheck } from 'lucide-react';

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
            <div className="logo-icon">E</div>
            <div className="logo-text">
              <h3>Emmanuvest</h3>
              <span>Masterclass</span>
            </div>
          </a>

          <nav className="nav-links">
            <a href="#hero">Overview</a>
            <a href="#comparison">The Real Truth</a>
            <a href="#learn">Curriculum</a>
            <a href="#target">Who It's For</a>
            <a href="#hosts">Hosts</a>
            <a href="#cms">CMS Roadmap</a>
            <a href="#faq">FAQ</a>
          </nav>

          <div className="header-actions">
            <div style={{ display: 'none' }}>
              <ThemeToggler currentTheme={theme} setTheme={setTheme} />
            </div>
            <button className="btn btn-primary btn-header-cta" onClick={openCheckout}>
              Reserve Seat (₦2,000)
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

        <CMSOverview onCTA={openCheckout} />
        
        <FAQ />

        {/* Final CTA Section */}
        <section className="section final-cta-section" id="join">
          <div className="container" style={{ maxWidth: '900px' }}>
            <div className="glass-card cta-card text-center">
              <span className="section-tag">TAKE ACTION TODAY</span>
              <h2>YOUR FUTURE WON'T CHANGE... <br /><span style={{ color: 'var(--accent-color)' }}>Until Your Decisions Do.</span></h2>
              <p className="cta-description">
                Six months from now, you can still be watching other people make money online from the sidelines… Or you can be grateful you finally invested in learning a skill that opened new opportunities for you. <strong>The choice is yours.</strong>
              </p>
              
              <div className="cta-pricing-grid">
                <div className="cta-price-box">
                  <span className="cta-price-label">Premium Seat Access</span>
                  <div className="cta-price-value">₦2,000</div>
                  <span className="cta-price-muted">🔒 Secure Payment • Instant Access</span>
                </div>
                
                <div className="cta-features-box">
                  <div className="cta-feat-item">
                    <MessageCircle size={16} className="cta-feat-icon" />
                    <span>Live WhatsApp Training & Replay</span>
                  </div>
                  <div className="cta-feat-item">
                    <Sparkles size={16} className="cta-feat-icon" />
                    <span>Sales Frameworks & Script Templates</span>
                  </div>
                  <div className="cta-feat-item">
                    <ShieldCheck size={16} className="cta-feat-icon" />
                    <span>Private WhatsApp Community Access</span>
                  </div>
                </div>
              </div>

              <button className="btn btn-primary btn-large-cta" onClick={openCheckout}>
                Reserve Your Seat Today — Only ₦2,000
                <ArrowRight size={20} />
              </button>
              
              <p className="cta-guarantee">🛡️ Invest in clarity. Learn practical skills. Take the first step toward building your online income journey.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="app-footer">
        <div className="container footer-container">
          <div className="footer-top">
            <div className="footer-logo">
              <div className="logo-icon">E</div>
              <h3>Coach Emmanuvest</h3>
            </div>
            <p>Empowering ambitious individuals with practical digital skills and proven online systems.</p>
          </div>
          
          <div className="footer-divider"></div>
          
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} Emmanuvest Masterclass. All Rights Reserved.</span>
            <div className="footer-links">
              <a href="#hero">Terms of Service</a>
              <a href="#hero">Privacy Policy</a>
              <a href="#hero">Support</a>
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
