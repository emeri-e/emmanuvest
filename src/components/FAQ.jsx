import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqItems = [
  {
    q: "Will I get recordings of the sessions if I miss a class?",
    a: "Absolutely! Every single live training session, slides, scripts, and links will be compiled and made available for you to download. You get lifetime access to all learning materials."
  },
  {
    q: "I don't have a product or service to sell yet, is this helpful?",
    a: "Yes! In Day 1, we show you how to find hot physical products that people buy willingly, and how to source digital affiliate products that pay 50% commission. You don't need your own product to profit."
  },
  {
    q: "Do I need a laptop or paid tools to implement this?",
    a: "No laptop is required. 99% of our students implement this entire training using only their Android or iOS smartphone. The only tools we use are free WhatsApp automation apps."
  },
  {
    q: "What is the venue and how will the class be hosted?",
    a: "The class is hosted inside a private, closed WhatsApp group. Modules are delivered through voice recordings, screen share videos, text scripts, and live Q&A. It is 100% remote."
  },
  {
    q: "How do I secure my spot and access the group?",
    a: "Click any 'Reserve Spot' button to open the Checkout window. Complete the registration with your name and email, and you will be immediately redirected to the private WhatsApp group."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="section faq-section" id="faq">
      <div className="glow-spot" style={{ bottom: '10%', left: '10%' }}></div>
      <div className="container" style={{ maxWidth: '800px' }}>
        
        <div className="text-center">
          <span className="section-tag">QUESTIONS & ANSWERS</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Everything you need to know about the WhatsApp Sales Masterclass.
          </p>
        </div>

        <div className="faq-list">
          {faqItems.map((item, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <div 
                key={idx} 
                className={`faq-item-card glass-card ${isOpen ? 'active' : ''}`}
                onClick={() => toggleFAQ(idx)}
              >
                <div className="faq-question">
                  <div className="q-left">
                    <HelpCircle size={18} className="faq-q-icon" />
                    <h3>{item.q}</h3>
                  </div>
                  <ChevronDown size={18} className={`faq-chevron ${isOpen ? 'open' : ''}`} />
                </div>
                
                <div className={`faq-answer-container ${isOpen ? 'open' : ''}`}>
                  <div className="faq-answer-content">
                    <p>{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      <style>{`
        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-top: 20px;
        }
        .faq-item-card {
          padding: 20px 24px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: left;
        }
        .faq-item-card:hover {
          border-color: var(--accent-color);
        }
        .faq-item-card.active {
          border-color: var(--accent-color);
          box-shadow: 0 4px 20px var(--accent-glow), var(--card-shadow);
        }
        
        .faq-question {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }
        .q-left {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .faq-q-icon {
          color: var(--accent-color);
          flex-shrink: 0;
        }
        .faq-question h3 {
          font-size: 1.05rem;
          font-weight: 600;
          line-height: 1.4;
          color: var(--text-primary);
        }
        .faq-chevron {
          color: var(--text-secondary);
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          flex-shrink: 0;
        }
        .faq-chevron.open {
          transform: rotate(180deg);
          color: var(--accent-color);
        }
        
        /* Answer accordion height transition */
        .faq-answer-container {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
        }
        .faq-answer-container.open {
          grid-template-rows: 1fr;
        }
        .faq-answer-content {
          min-height: 0;
        }
        .faq-answer-content p {
          font-size: 0.95rem;
          line-height: 1.5;
          color: var(--text-secondary);
          padding-top: 16px;
          border-top: 1px solid var(--border-color);
          margin-top: 16px;
        }

        @media (max-width: 600px) {
          .faq-item-card {
            padding: 16px;
          }
          .faq-question h3 {
            font-size: 0.95rem;
          }
        }
      `}</style>
    </section>
  );
}
