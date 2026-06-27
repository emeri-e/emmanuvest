import React, { useState } from 'react';
import { X, ShieldCheck, User, Loader2, ArrowRight } from 'lucide-react';

export default function CheckoutModal({ isOpen, onClose }) {
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    setIsSubmitting(true);
    
    // Construct customized message
    const message = `Hello Coach Emmanuvest, my name is ${name.trim()}. I want to register for the Premium WhatsApp Money-Making Masterclass (₦2,000).`;
    const whatsappUrl = `https://wa.me/2349112663866?text=${encodeURIComponent(message)}`;

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setIsSubmitting(false);
      setName('');
      onClose();
    }, 1000);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-card glass-card" onClick={(e) => e.stopPropagation()}>
        
        {/* Close Button */}
        <button className="modal-close-btn" onClick={onClose} aria-label="Close Checkout">
          <X size={18} />
        </button>

        <form onSubmit={handleSubmit} className="modal-form">
          <div className="modal-header">
            <h2>Reserve Your Seat Today</h2>
            <p>Enter your full name to connect on WhatsApp and get instant access after registration.</p>
          </div>
          
          <div className="order-summary-card">
            <span>Premium WhatsApp Masterclass Ticket</span>
            <span className="summary-price">₦2,000</span>
          </div>

          <div className="input-group">
            <label htmlFor="name">Full Name</label>
            <div className="input-wrapper">
              <User size={16} className="input-icon" />
              <input 
                type="text" 
                id="name" 
                name="name"
                placeholder="e.g. John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          </div>

          <button type="submit" className="btn btn-primary w-full submit-btn" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 size={18} className="spinner" style={{ marginRight: '8px' }} />
                Connecting to WhatsApp...
              </>
            ) : (
              <>
                Proceed to WhatsApp
                <ArrowRight size={18} style={{ marginLeft: '8px' }} />
              </>
            )}
          </button>

          <div className="modal-footer-security">
            <ShieldCheck size={14} />
            <span>Direct registration via secure WhatsApp chat</span>
          </div>
        </form>

      </div>

      <style>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          padding: 20px;
          animation: fadeIn 0.3s ease;
        }
        
        .modal-card {
          width: 100%;
          max-width: 460px;
          position: relative;
          padding: 36px;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5), var(--card-shadow);
          animation: scaleUp 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        
        .modal-close-btn {
          position: absolute;
          top: 16px;
          right: 16px;
          background: transparent;
          border: none;
          color: var(--text-secondary);
          cursor: pointer;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          border: 1px solid transparent;
        }
        .modal-close-btn:hover {
          background: rgba(255, 255, 255, 0.05);
          color: var(--text-primary);
          border-color: var(--border-color);
        }
        
        .modal-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
          text-align: left;
        }
        
        .modal-header h2 {
          font-size: 1.6rem;
          margin-bottom: 4px;
        }
        .modal-header p {
          font-size: 0.85rem;
          color: var(--text-secondary);
        }
        
        .order-summary-card {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          padding: 12px 16px;
          border-radius: 10px;
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text-primary);
        }
        .summary-price {
          font-weight: 700;
          color: var(--accent-color);
        }
        
        .input-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .input-group label {
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--text-primary);
        }
        .input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }
        .input-icon {
          position: absolute;
          left: 12px;
          color: var(--text-secondary);
          pointer-events: none;
        }
        .input-wrapper input {
          width: 100%;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          border-radius: 10px;
          padding: 12px 12px 12px 40px;
          color: var(--text-primary);
          font-size: 0.95rem;
          outline: none;
          transition: all 0.3s ease;
        }
        .input-wrapper input:focus {
          border-color: var(--accent-color);
          box-shadow: 0 0 10px var(--accent-glow);
        }
        
        .w-full {
          width: 100%;
        }
        .submit-btn {
          margin-top: 10px;
        }
        
        .modal-footer-security {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          font-size: 0.75rem;
          color: var(--text-secondary);
          opacity: 0.7;
        }
        
        /* Spinner */
        .spinner {
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        /* Processing screen styling */
        .modal-processing-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 30px 10px;
          text-align: center;
        }
        .processing-spinner {
          color: var(--accent-color);
          margin-bottom: 24px;
        }
        .modal-processing-state h3 {
          font-size: 1.4rem;
          margin-bottom: 8px;
        }
        .modal-processing-state p {
          font-size: 0.9rem;
          color: var(--text-secondary);
          max-width: 320px;
          margin-bottom: 24px;
        }
        .processing-bar {
          width: 80%;
          height: 6px;
          background: var(--bg-tertiary);
          border-radius: 3px;
          overflow: hidden;
        }
        .processing-progress {
          height: 100%;
          width: 70%;
          background: var(--accent-color);
          border-radius: 3px;
          animation: progress 2s ease-in-out infinite;
        }
        @keyframes progress {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(150%); }
        }
        
        /* Success Screen */
        .modal-success-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 10px 0;
        }
        .success-icon-wrapper {
          width: 90px;
          height: 90px;
          border-radius: 50%;
          background: var(--badge-bg);
          border: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }
        .success-icon {
          color: var(--accent-color);
        }
        .modal-success-state h3 {
          font-size: 1.5rem;
          margin-bottom: 8px;
        }
        .modal-success-state p {
          font-size: 0.95rem;
          color: var(--text-secondary);
          margin-bottom: 24px;
        }
        .next-steps-card {
          background: rgba(37, 211, 102, 0.08);
          border: 1px dashed rgba(37, 211, 102, 0.4);
          padding: 16px;
          border-radius: 12px;
          margin-bottom: 24px;
          text-align: left;
        }
        .next-steps-card h4 {
          font-size: 0.85rem;
          color: var(--accent-color);
          margin-bottom: 4px;
        }
        .next-steps-card p {
          font-size: 0.85rem;
          margin-bottom: 0;
          color: var(--text-primary);
        }
        .redirect-btn {
          margin-top: 10px;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleUp {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }

        @media (max-width: 480px) {
          .modal-card {
            padding: 24px;
          }
        }
      `}</style>
    </div>
  );
}
