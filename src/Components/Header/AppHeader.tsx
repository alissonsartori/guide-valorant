import './header-styles.css';
import React, { useState, useEffect } from 'react';
import logoUrl from '../../../public/logo.png';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/agents', label: 'Agents' },
  { href: '/weapons', label: 'Weapons' },
  { href: '/sprays', label: 'Sprays' },
  { href: '/buddies', label: 'Buddies' },
  { href: '/maps', label: 'Maps' },
  { href: '/bundles', label: 'Bundles' },
  { href: '/cards', label: 'Cards' },
  { href: '/tiers', label: 'Tiers' },
];

const AppHeader = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 950);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Fecha o menu ao navegar
  const handleNavClick = () => {
    setMenuOpen(false);
  };

  // Fecha o menu ao apertar ESC
  useEffect(() => {
    if (!menuOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

  return (
    <header className="header-container">
      <div className="header-content">
        <nav className="nav">
          {isMobile ? (
            <>
              <button
                className="mobile-menu-toggle"
                aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
                onClick={() => setMenuOpen(v => !v)}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
              >
                {menuOpen ? '✕' : '☰'}
              </button>
              <div
                className={`mobile-menu-overlay${menuOpen ? ' mobile-menu-overlay--open' : ''}`}
                onClick={() => setMenuOpen(false)}
                tabIndex={-1}
                aria-hidden={!menuOpen}
              />
              <ul
                id="mobile-menu"
                className={`nav__list${menuOpen ? ' nav__list--open' : ''}`}
                style={{ pointerEvents: menuOpen ? 'auto' : 'none' }}
              >
                {NAV_LINKS.map(link => (
                  <li className="nav__item" key={link.href}>
                    <a
                      href={link.href}
                      className="nav__link"
                      onClick={handleNavClick}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <ul className="nav__list">
              {NAV_LINKS.map(link => (
                <li className="nav__item" key={link.href}>
                  <a href={link.href} className="nav__link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </nav>
      </div>
    </header>
  );
};

export default AppHeader;
