import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import Navbar from '../../Home/Nabar';
import Footer from '../../Home/Footer';
import './auth.css';

function Login() {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login:', { email, password });
  };

  return (
    <div>
      <Navbar />
      <div className="auth-page">
        <div className="auth-card">

          <div className="auth-icon-circle">
            <svg viewBox="0 0 24 24" fill="white" width="28" height="28">
              <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
            </svg>
          </div>

          <h2 className="auth-title">{t('auth.login')}</h2>
          <p className="auth-subtitle">{t('auth.loginSubtitle', 'Sign in to your account')}</p>

          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-group" style={{ '--delay': '0.32s' }}>
              <label>{t('auth.email')}</label>
              <div className="input-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="input-icon">
                  <rect x="2" y="4" width="20" height="16" rx="3"/>
                  <path d="m2 7 10 7 10-7"/>
                </svg>
                <input
                  type="email"
                  placeholder={t('auth.emailPlaceholder', 'you@example.com')}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="form-group" style={{ '--delay': '0.4s' }}>
              <label>{t('auth.password')}</label>
              <div className="input-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="input-icon">
                  <rect x="3" y="11" width="18" height="11" rx="2"/>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
                <input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <button type="submit" className="auth-btn" style={{ '--delay': '0.5s' }}>
              {t('auth.login')}
            </button>
          </form>

          <p className="auth-link" style={{ '--delay': '0.58s' }}>
            {t('auth.noAccount')} <a href="/signup">{t('auth.signUp')}</a>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;