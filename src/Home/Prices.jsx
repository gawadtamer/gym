import { useTranslation } from "react-i18next";

const PricingSection = () => {
  const { t } = useTranslation();

  const planIcons = {
    basic: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="22" height="22">
        <path d="M20 7H4a2 2 0 00-2 2v6a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z"/>
        <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/>
      </svg>
    ),
    pro: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="22" height="22">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
    vip: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="22" height="22">
        <path d="M2 20h20M6 20V10l6-6 6 6v10"/><path d="M9 20v-5h6v5"/>
      </svg>
    ),
  };

  const CheckIcon = () => (
    <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" width="10" height="10">
      <polyline points="2 6 5 9 10 3"/>
    </svg>
  );

  const plans = [
    { key: 'basic',  popular: false },
    { key: 'pro',    popular: true  },
    { key: 'vip',    popular: false },
  ];

  return (
    <section className="ps-section">
      <div className="ps-grid-bg"></div>
      <div className="ps-glow-top"></div>

      <div className="ps-inner">
        <div className="ps-header">
          <p className="ps-eyebrow">{t('pricing.eyebrow', 'Membership Plans')}</p>
          <h2 className="ps-title">
            {t('pricing.title').split(' ').slice(0, -1).join(' ')}{' '}
            <span>{t('pricing.title').split(' ').slice(-1)}</span>
          </h2>
          <p className="ps-subtitle">{t('pricing.subtitle')}</p>

          <div className="ps-toggle">
            <button
              className="ps-toggle-btn active"
              onClick={(e) => handleToggle(e.currentTarget, 'monthly')}
            >
              {t('pricing.monthly', 'Monthly')}
            </button>
            <button
              className="ps-toggle-btn"
              onClick={(e) => handleToggle(e.currentTarget, 'annual')}
            >
              {t('pricing.annual', 'Annual')}
            </button>
            <span className="ps-save-tag">{t('pricing.save', 'Save 20%')}</span>
          </div>
        </div>

        <div className="ps-cards">
          {plans.map(({ key, popular }, idx) => (
            <div
              key={key}
              className={`ps-card${popular ? ' popular' : ''}`}
              style={{ '--ci': `${0.3 + idx * 0.15}s` }}
            >
              {popular && (
                <div className="ps-badge">{t('pricing.popular')}</div>
              )}

              <div className="ps-plan-icon">
                {planIcons[key]}
              </div>

              <div className="ps-plan-name">
                {t(`pricing.plans.${key}.name`)}
              </div>

              <div className="ps-price-row">
                <span className="ps-currency">$</span>
                <span className="ps-amount" id={`${key}-price`}>
                  {t(`pricing.plans.${key}.price`)}
                </span>
              </div>
              <div className="ps-period">{t('pricing.perMonth', 'per month, billed monthly')}</div>

              <div className="ps-divider"></div>

              <ul className="ps-features">
                {t(`pricing.plans.${key}.features`, { returnObjects: true }).map((f, i) => (
                  <li key={i} style={{ '--fd': `${0.55 + i * 0.07}s` }}>
                    <span className="ps-check"><CheckIcon /></span>
                    {f}
                  </li>
                ))}
              </ul>

              <button className="ps-btn">{t('pricing.joinNow')}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

function handleToggle(btn, mode) {
  document.querySelectorAll('.ps-toggle-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const monthly = { basic: 29, pro: 59, vip: 99 };
  const annual  = { basic: 23, pro: 47, vip: 79 };
  const prices  = mode === 'annual' ? annual : monthly;
  const period  = mode === 'annual' ? 'per month, billed annually' : 'per month, billed monthly';
  ['basic', 'pro', 'vip'].forEach(key => {
    animatePrice(`${key}-price`, prices[key]);
  });
  document.querySelectorAll('.ps-period').forEach(el => el.textContent = period);
}

function animatePrice(id, target) {
  const el = document.getElementById(id);
  const start = parseInt(el.textContent) || 0;
  const diff = target - start;
  let step = 0;
  const timer = setInterval(() => {
    step++;
    el.textContent = Math.round(start + diff * (step / 20));
    if (step >= 20) clearInterval(timer);
  }, 18);
}

export default PricingSection;