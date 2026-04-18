import React from 'react';
import { useTranslation } from "react-i18next";


function Details() {
  const { t } = useTranslation();

  return (
    <div className="ng-page">
      <div className="ng-bg-line"></div>
      <div className="ng-glow"></div>

      <div className="ng-inner">

        {/* ── جانب الصورة ── */}
        <div className="ng-img-side">
          <div className="ng-img-bg">
            <img
              src="/images/contact-img.jpg"
              alt="Gym member training"
              className="ng-actual-img"
            />
            <div className="ng-img-overlay"></div>

            <div className="ng-img-deco">
              <div className="ng-img-deco-inner">
                <svg viewBox="0 0 24 24" fill="#ff1e56" width="24" height="24">
                  <path d="M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9L7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3C14.8 12 16.8 13 19 13v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6l1.8-.7"/>
                </svg>
              </div>
            </div>

            <div className="ng-stats">
              <div className="ng-tag">
                <div className="ng-tag-dot"></div>
                {t('contact.liveNow', 'Live Now')}
              </div>
              <div className="ng-big-text">
                {t('contact.stronger').split(' ')[0]}{' '}
                <span>{t('contact.stronger').split(' ')[1]}</span>
              </div>
              <div className="ng-sub-text">{t('contact.transformation')}</div>
              <div className="ng-counters">
                <div className="ng-counter-item">
                  <span className="ng-counter-num">2K+</span>
                  <span className="ng-counter-label">{t('contact.members', 'Members')}</span>
                </div>
                <div className="ng-divider-v"></div>
                <div className="ng-counter-item">
                  <span className="ng-counter-num">15+</span>
                  <span className="ng-counter-label">{t('contact.trainers', 'Trainers')}</span>
                </div>
                <div className="ng-divider-v"></div>
                <div className="ng-counter-item">
                  <span className="ng-counter-num">98%</span>
                  <span className="ng-counter-label">{t('contact.satisfied', 'Satisfied')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── جانب الفورم ── */}
        <div className="ng-form-side">
          <div className="ng-form-header">
            <p className="ng-eyebrow">{t('contact.eyebrow', 'Join the elite')}</p>
            <h2 className="ng-heading">
              {t('contact.header').split(' ')[0]}{' '}
              {t('contact.header').split(' ')[1]}{' '}
              <span>{t('contact.header').split(' ')[2]}</span>
            </h2>
            <p className="ng-heading-sub">{t('contact.subtitle')}</p>
          </div>

          <div className="ng-progress-bar">
            <div className="ng-progress-fill" id="ngProg"></div>
          </div>

          <form className="ng-form" onSubmit={(e) => e.preventDefault()}>
            <div className="ng-row ng-row-anim" style={{ '--rd': '0.78s' }}>
              <div className="ng-field">
                <svg className="ng-field-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
                </svg>
                <input type="text" name="name" placeholder={t('contact.placeholders.name')} onChange={updateProg} required />
              </div>
              <div className="ng-field">
                <svg className="ng-field-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="2" y="4" width="20" height="16" rx="3"/><path d="m2 7 10 7 10-7"/>
                </svg>
                <input type="email" name="email" placeholder={t('contact.placeholders.email')} onChange={updateProg} required />
              </div>
            </div>

            <div className="ng-row ng-row-anim" style={{ '--rd': '0.88s' }}>
              <div className="ng-field">
                <svg className="ng-field-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <input type="tel" name="phone" placeholder={t('contact.placeholders.phone')} onChange={updateProg} required />
              </div>
              <div className="ng-field">
                <svg className="ng-field-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
                </svg>
                <select name="membership" className="gym-select" onChange={updateProg}>
                  <option value="">{t('contact.placeholders.membership')}</option>
                  <option value="basic">{t('contact.placeholders.basic')}</option>
                  <option value="pro">{t('contact.placeholders.pro')}</option>
                  <option value="elite">{t('contact.placeholders.elite')}</option>
                </select>
              </div>
            </div>

            <div className="ng-field ng-row-anim" style={{ '--rd': '0.96s' }}>
              <svg className="ng-field-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
              <input type="text" name="goal" placeholder={t('contact.placeholders.goal')} onChange={updateProg} />
            </div>

            <div className="ng-field full-width ng-row-anim" style={{ '--rd': '1.04s' }}>
              <textarea name="message" placeholder={t('contact.placeholders.message')}
                className="message-box" onChange={updateProg}></textarea>
            </div>

            <div className="ng-submit">
              <button type="submit" className="ng-btn">{t('contact.button')}</button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
}

function updateProg() {
  const inputs = document.querySelectorAll('.ng-form input, .ng-form select, .ng-form textarea');
  let filled = 0;
  inputs.forEach(el => { if (el.value && el.value.trim()) filled++; });
  const pct = Math.round((filled / inputs.length) * 100);
  const bar = document.getElementById('ngProg');
  if (bar) bar.style.width = pct + '%';
}

export default Details;