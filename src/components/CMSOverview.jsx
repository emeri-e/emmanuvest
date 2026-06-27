import React from 'react';
import { ShieldAlert, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function CMSOverview({ onCTA }) {
  return (
    <section className="section cms-section" id="cms">
      <div className="glow-spot" style={{ top: '20%', right: '15%' }}></div>
      <div className="container" style={{ maxWidth: '900px' }}>
        
        {/* Next Step Box */}
        <div className="glass-card text-center" style={{ padding: '40px', borderRadius: '20px', marginBottom: '32px', border: '1px solid var(--border-color)' }}>
          <span className="section-tag" style={{ background: 'var(--badge-bg)', color: 'var(--accent-color)' }}>WHAT COMES NEXT</span>
          <h2 style={{ fontSize: '2rem', fontWeight: '800', marginTop: '10px', marginBottom: '16px' }}>YOUR NEXT STEP AFTER THE MASTERCLASS</h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 24px', lineHeight: '1.6' }}>
            During the training, you'll also get an exclusive introduction to the <strong>CashFlow Mastery System (CMS)</strong>. We'll show you what CMS is, how it works, who it's designed for, and what you'll gain inside the full program.
          </p>
          <p style={{ fontSize: '0.95rem', fontWeight: '600', color: 'var(--accent-color)' }}>
            Then YOU decide whether it's the right next step for you. No pressure. No obligation.
          </p>
        </div>

        {/* Important Notice Box */}
        <div className="glass-card" style={{ padding: '36px', borderRadius: '20px', border: '1px solid #f59e0b', background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.05), transparent)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <ShieldAlert size={24} style={{ color: '#f59e0b', flexShrink: 0 }} />
            <h3 style={{ fontSize: '1.4rem', fontWeight: '800', color: 'var(--text-primary)', margin: 0 }}>IMPORTANT INFORMATION</h3>
          </div>
          
          <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '20px' }}>
            Your <strong>₦2,000 registration</strong> gives you access to this Premium WhatsApp Masterclass only. During the training, Coach Emmanuvest will introduce you to the CashFlow Mastery System (CMS)—the complete implementation program for those serious about scaling an affiliate marketing business.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px', background: 'var(--bg-tertiary)', padding: '20px', borderRadius: '12px', border: '1px solid var(--border-color)', textAlign: 'left' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
              <CheckCircle2 size={18} style={{ color: 'var(--accent-color)', flexShrink: 0, marginTop: '2px' }} />
              <span style={{ fontSize: '0.88rem', color: 'var(--text-primary)' }}><strong>Masterclass:</strong> Your first step to learn the core skills & strategies.</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
              <CheckCircle2 size={18} style={{ color: 'var(--accent-color)', flexShrink: 0, marginTop: '2px' }} />
              <span style={{ fontSize: '0.88rem', color: 'var(--text-primary)' }}><strong>CMS & Valpulse:</strong> Where you put everything into action with structured tools & support.</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
