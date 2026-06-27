import React, { useState, useEffect, useRef } from 'react';
import { Palette, Check, Zap, Crown, Leaf, Sun } from 'lucide-react';

const themes = [
  { id: 'emerald', name: 'Emerald Aurora', icon: Leaf, color: '#25d366' },
  { id: 'cyber', name: 'Cyberpunk', icon: Zap, color: '#00f0ff' },
  { id: 'royal', name: 'Royal Amber', icon: Crown, color: '#f59e0b' },
  { id: 'light', name: 'Alabaster Light', icon: Sun, color: '#0d9488' }
];

export default function ThemeToggler({ currentTheme, setTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="theme-toggler-container" ref={dropdownRef}>
      <button 
        className="theme-toggle-btn" 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Select Theme"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          background: 'var(--bg-secondary)',
          border: '1px solid var(--border-color)',
          color: 'var(--text-primary)',
          padding: '10px 16px',
          borderRadius: '12px',
          cursor: 'pointer',
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: '500',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          transition: 'all 0.3s ease',
          boxShadow: 'var(--card-shadow)'
        }}
      >
        <Palette size={18} style={{ color: 'var(--accent-color)' }} />
        <span className="btn-text">Theme</span>
      </button>

      {isOpen && (
        <div 
          className="theme-dropdown"
          style={{
            position: 'absolute',
            top: 'calc(100% + 8px)',
            right: 0,
            background: 'var(--bg-tertiary)',
            border: '1px solid var(--border-color)',
            borderRadius: '16px',
            padding: '8px',
            width: '200px',
            zIndex: 1000,
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.5), var(--card-shadow)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            animation: 'fadeInUp 0.2s ease-out'
          }}
        >
          {themes.map((theme) => {
            const Icon = theme.icon;
            const isSelected = currentTheme === theme.id;
            return (
              <button
                key={theme.id}
                onClick={() => {
                  setTheme(theme.id);
                  setIsOpen(false);
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                  padding: '10px 12px',
                  borderRadius: '10px',
                  border: 'none',
                  background: isSelected ? 'var(--badge-bg)' : 'transparent',
                  color: isSelected ? 'var(--accent-color)' : 'var(--text-secondary)',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.2s ease'
                }}
                className="theme-option"
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Icon size={16} style={{ color: theme.color }} />
                  <span style={{ fontSize: '0.9rem', fontWeight: isSelected ? '600' : '400' }}>
                    {theme.name}
                  </span>
                </div>
                {isSelected && <Check size={14} style={{ color: 'var(--accent-color)' }} />}
              </button>
            );
          })}
        </div>
      )}

      <style>{`
        .theme-toggler-container {
          position: relative;
        }
        .theme-toggle-btn:hover {
          border-color: var(--accent-color);
          box-shadow: 0 0 15px var(--accent-glow);
          transform: translateY(-1px);
        }
        .theme-option:hover {
          background: rgba(255, 255, 255, 0.05);
          color: var(--text-primary);
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @media (max-width: 600px) {
          .btn-text {
            display: none;
          }
          .theme-toggle-btn {
            padding: 10px;
            border-radius: 50%;
          }
        }
      `}</style>
    </div>
  );
}
