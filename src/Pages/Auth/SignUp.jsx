import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Navbar from '../../Home/Nabar';
import Footer from '../../Home/Footer';
import './auth.css';

function SignUp() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '', email: '', password: '', confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    console.log('Sign Up:', formData);
  };

  return (
    <div>
      <Navbar />
      <div className="auth-page">
        <div className="auth-card">

          <div className="auth-icon-circle">
            <svg viewBox="0 0 24 24" fill="white" width="28" height="28">
              <path d="M15 12c2.7 0 4.8-2.1 4.8-4.8S17.7 2.4 15 2.4s-4.8 2.1-4.8 4.8S12.3 12 15 12zm-7.5 2.4C4.3 14.4 0 16 0 19.2v2.4h15v-2.4c0-3.2-3.5-4.8-7.5-4.8z"/>
            </svg>
          </div>

          <h2 className="auth-title">{t('auth.signUp')}</h2>
          <p className="auth-subtitle">{t('auth.signUpSubtitle', "Join us today — it's free")}</p>

          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-group" style={{ '--delay': '0.32s' }}>
              <label>{t('auth.name')}</label>
              <div className="input-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="input-icon">
                  <circle cx="12" cy="8" r="4"/>
                  <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
                </svg>
                <input type="text" name="name" placeholder={t('auth.namePlaceholder', 'Your full name')}
                  value={formData.name} onChange={handleChange} required />
              </div>
            </div>

            <div className="form-group" style={{ '--delay': '0.4s' }}>
              <label>{t('auth.email')}</label>
              <div className="input-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="input-icon">
                  <rect x="2" y="4" width="20" height="16" rx="3"/>
                  <path d="m2 7 10 7 10-7"/>
                </svg>
                <input type="email" name="email" placeholder={t('auth.emailPlaceholder', 'you@example.com')}
                  value={formData.email} onChange={handleChange} required />
              </div>
            </div>

            <div className="form-group" style={{ '--delay': '0.48s' }}>
              <label>{t('auth.password')}</label>
              <div className="input-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="input-icon">
                  <rect x="3" y="11" width="18" height="11" rx="2"/>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
                <input type="password" name="password" placeholder="••••••••"
                  value={formData.password} onChange={handleChange} required />
              </div>
            </div>

            <div className="form-group" style={{ '--delay': '0.56s' }}>
              <label>{t('auth.confirmPassword')}</label>
              <div className="input-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="input-icon">
                  <path d="M9 12l2 2 4-4"/>
                  <rect x="3" y="11" width="18" height="11" rx="2"/>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
                <input type="password" name="confirmPassword" placeholder="••••••••"
                  value={formData.confirmPassword} onChange={handleChange} required />
              </div>
            </div>

            <button type="submit" className="auth-btn" style={{ '--delay': '0.64s' }}>
              {t('auth.signUp')}
            </button>
          </form>

          <p className="auth-link" style={{ '--delay': '0.72s' }}>
            {t('auth.hasAccount')} <Link to="/login">{t('auth.login')}</Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SignUp;