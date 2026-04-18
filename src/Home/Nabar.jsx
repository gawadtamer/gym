import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useCart } from "../CartContext";

function Navbar() {
  const { t, i18n } = useTranslation();
  const { cartCount } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // when user clicks anywhere outside the drop‑down we should close it
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.nav-dropdown')) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav-wrapper ${scrolled ? "scrolled" : ""}`}>
      <nav className="nav">

        {/* Logo */}
        <div className="nav-logo">
          NEO<span>GYM</span>
        </div>

        {/* Links */}
        <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
          <li><Link to="/">{t('navbar.home')}</Link></li>
          <li><Link to="/dashboard">{t('navbar.dashboard')}</Link></li>
          <li><Link to="/about">{t('navbar.whyUs')}</Link></li>
          <li><Link to="/trainers">{t('navbar.trainers')}</Link></li>
          <li><Link to="/contact">{t('navbar.contact')}</Link></li>
        </ul>

        {/* Right Side */}
        <div className="nav-right">
          <button 
             type="button" 
             className="nav-btn" 
             onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'ar' : 'en')}
             style={{cursor: 'pointer', marginRight: '15px'}}
          >
             🌐 {i18n.language === 'en' ? 'AR' : 'EN'}
          </button>
          {/* Cart Icon */}
          <Link to="/cart" className="nav-cart" style={{ marginRight: '20px', fontSize: '20px', position: 'relative' }}>
            🛒
            {cartCount > 0 && (
              <span className="cart-badge">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Dropdown for Login/Sign In */}
          <div className="nav-dropdown">
            <button 
              type="button"
              className="nav-btn dropdown-toggle" 
              onClick={() => {
              console.log('toggling dropdown, was', dropdownOpen);
              setDropdownOpen(!dropdownOpen);
            }}
              style={{cursor: 'pointer'}}
            >
              {t('navbar.joinNow')}
            </button>
            {dropdownOpen && (
              <div className="dropdown-menu">
                <Link 
                  to="/login" 
                  className="dropdown-item"
                  onClick={() => setDropdownOpen(false)}
                >
                  {t('navbar.login')}
                </Link>
                <Link 
                  to="/signup" 
                  className="dropdown-item"
                  onClick={() => setDropdownOpen(false)}
                >
                  {t('navbar.signIn')}
                </Link>
              </div>
            )}
          </div>

          <div
            className={`hamburger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </div>
        </div>

      </nav>
    </header>
  );
}

export default Navbar;
