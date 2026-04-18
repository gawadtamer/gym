
import React from 'react';
import { useTranslation } from "react-i18next";
import '../css/footer.css';

function Icon({name}){
  if(name==='facebook'){
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22 12a10 10 0 10-11.5 9.9v-7h-2.2v-2.9h2.2V9.3c0-2.2 1.3-3.4 3.3-3.4.95 0 1.94.17 1.94.17v2.1h-1.08c-1.06 0-1.39.66-1.39 1.33v1.6h2.36l-.38 2.9h-1.98v7A10 10 0 0022 12z"/></svg>
    )
  }
  if(name==='twitter'){
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22 5.9c-.6.3-1.3.6-2 .7.7-.4 1.3-1 1.6-1.8-.7.4-1.5.7-2.3.9C18.2 4.6 17.1 4 15.9 4c-2 0-3.5 1.8-3 3.6C10 7.4 7.3 6 5.6 4c-.8 1.4-.3 3.2 1 4.1-.6 0-1.2-.2-1.7-.5v.1c0 1.7 1.2 3.2 2.9 3.5-.5.1-1 .2-1.5.1.4 1.4 1.7 2.4 3.3 2.4-1.2 1-2.7 1.6-4.3 1.6-.3 0-.6 0-.9-.1 1.5.9 3.3 1.5 5.2 1.5C17.8 17.8 21 13.5 21 9v-.6c.7-.5 1.3-1.2 1.8-2z"/></svg>
    )
  }
  if(name==='linkedin'){
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5C4.98 4.6 4.14 5.5 3 5.5S1 4.6 1 3.5 1.84 1.5 3 1.5s1.98.9 1.98 2zM.5 8.5h4.9V24H.5zM8.5 8.5h4.7v2.1h.1c.7-1.3 2.4-2.6 4.9-2.6C23.4 8 24 12 24 16.8V24h-4.9v-6.9c0-1.6 0-3.6-2.2-3.6-2.2 0-2.6 1.8-2.6 3.5V24H8.5z"/></svg>
    )
  }
  if(name==='instagram'){
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.97.24 2.428.403a4.92 4.92 0 011.675 1.093 4.92 4.92 0 011.093 1.675c.163.459.349 1.258.403 2.428.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.403 2.428a4.92 4.92 0 01-1.093 1.675 4.92 4.92 0 01-1.675 1.093c-.459.163-1.258.349-2.428.403-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.428-.403a4.92 4.92 0 01-1.675-1.093 4.92 4.92 0 01-1.093-1.675c-.163-.459-.349-1.258-.403-2.428C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.054-1.17.24-1.97.403-2.428a4.92 4.92 0 011.093-1.675 4.92 4.92 0 011.675-1.093c.459-.163 1.258-.349 2.428-.403C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.012 7.052.07 5.775.128 4.842.354 4.02.675a6.919 6.919 0 00-2.51 1.64A6.919 6.919 0 00.675 4.02C.354 4.842.128 5.775.07 7.052.012 8.332 0 8.741 0 12s.012 3.668.07 4.948c.058 1.277.284 2.21.605 3.032a6.919 6.919 0 001.64 2.51 6.919 6.919 0 002.51 1.64c.822.321 1.755.547 3.032.605C8.332 23.988 8.741 24 12 24s3.668-.012 4.948-.07c1.277-.058 2.21-.284 3.032-.605a6.919 6.919 0 002.51-1.64 6.919 6.919 0 001.64-2.51c.321-.822.547-1.755.605-3.032C23.988 15.668 24 15.259 24 12s-.012-3.668-.07-4.948c-.058-1.277-.284-2.21-.605-3.032a6.919 6.919 0 00-1.64-2.51 6.919 6.919 0 00-2.51-1.64C18.21.354 17.277.128 16 .07 14.72.012 14.309 0 12 0z"/>
        <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998z"/>
        <circle cx="18.406" cy="5.594" r="1.44"/>
      </svg>
    )
  }
  return null;
}

function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();
  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer-inner">
        <div className="footer-top row">
          <div className="col-md-4 mb-4">
            <div className="logo">Gym<span className="dot">.</span></div>
            <p className="muted">{t('footer.desc')}</p>
          </div>

          <nav className="col-md-3 mb-4" aria-label="Footer">
            <h6>{t('footer.quickLinks')}</h6>
            <ul className="list-unstyled link-list">
              <li><a href="#">{t('navbar.home')}</a></li>
              <li><a href="#">{t('navbar.whyUs')}</a></li>
              <li><a href="#">{t('navbar.trainers')}</a></li>
              <li><a href="#">{t('pricing.plans.basic.name')}</a></li>
            </ul>
          </nav>

          <address className="col-md-3 mb-4 contact" aria-label="Contact">
            <h6>{t('footer.contact')}</h6>
            <div className="muted">{t('footer.address')}</div>
            <div className="muted">{t('footer.phone')}</div>
            <div className="muted">{t('footer.email')}</div>
          </address>

          <div className="col-md-2 mb-4">
            <h6>{t('footer.follow')}</h6>
            <div className="social">
              <a href="https://www.facebook.com/share/16xNe6h8Ad/?mibextid=wwXIfr " className="social-icon" aria-label="Facebook"><Icon name="facebook"/></a>
              <a href="#" className="social-icon" aria-label="Twitter"><Icon name="twitter"/></a>
              <a href="https://www.instagram.com/gawad_tamer33?igsh=eGY3a2tpYzdicXJ4&utm_source=qr" className="social-icon" aria-label="Instagram"><Icon name="instagram"/></a>
              <a href="#" className="social-icon" aria-label="LinkedIn"><Icon name="linkedin"/></a>


              
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="small">© {year} Gym — {t('footer.rights')}</div>
          <div className="small">{t('footer.design')} <a href="https://html.design/">Free Html Templates</a></div>
        </div>

        <a href="#" className="back-to-top" aria-label="Back to top">↑</a>
      </div>
    </footer>
  )
}

export default Footer;
