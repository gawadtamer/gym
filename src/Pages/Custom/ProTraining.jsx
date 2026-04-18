import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../../Home/Nabar'
import Footer from '../../Home/Footer'
import { useTranslation } from "react-i18next";

const stats = [
  { value: '1,200+', label: 'متدرب نشط' },
  { value: '98%', label: 'نسبة الرضا' },
  { value: '50+', label: 'مدرب خبير' },
  { value: '8 أسابيع', label: 'متوسط النتائج' },
]

const levels = [
  {
    id: 'beginner',
    label: 'مبتدئ',
    tag: 'Starter',
    color: '#1D9E75',
    bg: 'rgba(29,158,117,0.10)',
    border: 'rgba(29,158,117,0.35)',
    features: [
      'أساسيات التدريب الصحيح',
      'خطة تغذية مبسطة',
      'فيديوهات شرح تفصيلية',
      'برنامج 4 أسابيع',
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="12" stroke="#1D9E75" strokeWidth="1.8"/>
        <path d="M9 14l3.5 3.5L19 10" stroke="#1D9E75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 'intermediate',
    label: 'متوسط',
    tag: 'Advanced',
    color: '#BA7517',
    bg: 'rgba(186,117,23,0.10)',
    border: 'rgba(186,117,23,0.35)',
    features: [
      'تمارين متقدمة ومتنوعة',
      'خطة تغذية مخصصة',
      'متابعة أسبوعية مع مدرب',
      'تحليل التقدم بالبيانات',
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="17" width="6" height="8" rx="2" stroke="#BA7517" strokeWidth="1.8"/>
        <rect x="11" y="11" width="6" height="14" rx="2" stroke="#BA7517" strokeWidth="1.8"/>
        <rect x="19" y="5" width="6" height="20" rx="2" stroke="#BA7517" strokeWidth="1.8"/>
      </svg>
    ),
  },
  {
    id: 'pro',
    label: 'محترف',
    tag: 'Elite',
    color: '#D4537E',
    bg: 'rgba(212,83,126,0.10)',
    border: 'rgba(212,83,126,0.35)',
    features: [
      'برنامج تدريب النخبة المكثف',
      'تحليل أداء متقدم',
      'جلسات خاصة مع خبير',
      'خطة تغذية رياضية احترافية',
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <polygon points="14,3 17.5,10 25,11 19.5,16.5 21,24 14,20.5 7,24 8.5,16.5 3,11 10.5,10" stroke="#D4537E" strokeWidth="1.8" fill="none" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

const features = [
  { icon: '⚡', title: 'تدريب مكثف', desc: 'برامج تدريبية مصممة لتحقيق أقصى نتائج في أقصر وقت' },
  { icon: '🎯', title: 'أهداف محددة', desc: 'نضع معك خطة واضحة ونتابع كل خطوة نحو هدفك' },
  { icon: '🏆', title: 'نتائج مضمونة', desc: '98% من متدربينا يحققون نتائج ملموسة خلال 8 أسابيع' },
  { icon: '📊', title: 'تحليل الأداء', desc: 'تقارير أسبوعية تفصيلية لتتبع تقدمك بدقة علمية' },
  { icon: '🥗', title: 'تغذية رياضية', desc: 'خطط غذائية مخصصة تدعم تدريبك وتسرع نتائجك' },
  { icon: '👥', title: 'مجتمع داعم', desc: 'انضم لمجتمع من الرياضيين المحترفين والمتحمسين' },
]

function useInView(threshold = 0.15) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true) }, { threshold })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, inView]
}

function AnimatedCounter({ target }) {
  const [count, setCount] = useState(0)
  const [ref, inView] = useInView(0.3)
  const num = parseInt(target.replace(/\D/g, ''))
  useEffect(() => {
    if (!inView) return
    let start = 0
    const step = Math.ceil(num / 60)
    const timer = setInterval(() => {
      start += step
      if (start >= num) { setCount(num); clearInterval(timer) }
      else setCount(start)
    }, 24)
    return () => clearInterval(timer)
  }, [inView, num])
  const prefix = target.replace(/[\d,+%]/g, '').trim()
  const suffix = target.includes('+') ? '+' : target.includes('%') ? '%' : ''
  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}{prefix}
    </span>
  )
}

function ProTraining() {
  const { t } = useTranslation()
  const [activeLevel, setActiveLevel] = useState('beginner')
  const [heroRef, heroIn] = useInView(0.1)
  const [statsRef, statsIn] = useInView(0.15)
  const [levelsRef, levelsIn] = useInView(0.1)
  const [featRef, featIn] = useInView(0.1)
  const [ctaRef, ctaIn] = useInView(0.2)

  const activeLevelData = levels.find(l => l.id === activeLevel)

  return (
    <div className="pt-page">
      <Navbar />

      {/* HERO */}
      <section className="pt-hero" ref={heroRef}>
        <div className="pt-hero-bg">
          <div className="pt-hero-orb pt-orb1" />
          <div className="pt-hero-orb pt-orb2" />
          <div className="pt-grid-overlay" />
        </div>
        <div className={`pt-hero-content ${heroIn ? 'pt-fade-up' : 'pt-hidden'}`}>
          <span className="pt-hero-tag">Elite Performance Program</span>
          <h1 className="pt-hero-title">
            {t('whyChooseUs.proTraining')}
            <span className="pt-hero-accent"> Pro</span>
          </h1>
          <p className="pt-hero-sub">{t('whyChooseUs.proTrainingDesc')}</p>
          <div className="pt-hero-actions">
            <button className="pt-btn-primary">ابدأ الآن</button>
            <button className="pt-btn-ghost">شاهد البرنامج</button>
          </div>
        </div>
        <div className={`pt-hero-visual ${heroIn ? 'pt-fade-right' : 'pt-hidden'}`}>
          <div className="pt-hero-card">
            <div className="pt-hcard-icon">
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
                <circle cx="28" cy="28" r="24" stroke="#e03060" strokeWidth="2.5"/>
                <line x1="28" y1="8" x2="28" y2="15" stroke="#e03060" strokeWidth="2.5" strokeLinecap="round"/>
                <line x1="28" y1="28" x2="38" y2="20" stroke="#e03060" strokeWidth="2.5" strokeLinecap="round"/>
                <circle cx="28" cy="28" r="3.5" fill="#e03060"/>
                <rect x="23" y="4" width="10" height="5" rx="2.5" fill="#e03060"/>
              </svg>
            </div>
            <p className="pt-hcard-title">Pro Training</p>
            <p className="pt-hcard-sub">Train with experts</p>
            <div className="pt-hcard-bar">
              <div className="pt-hcard-fill" />
            </div>
            <p className="pt-hcard-label">مستوى التقدم</p>
            <div className="pt-hcard-badges">
              {['مبتدئ', 'متوسط', 'محترف'].map((b,i) => (
                <span key={i} className={`pt-hcard-badge ${i === 2 ? 'active' : ''}`}>{b}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="pt-stats" ref={statsRef}>
        <div className={`pt-stats-grid ${statsIn ? 'pt-fade-up' : 'pt-hidden'}`}>
          {stats.map((s, i) => (
            <div key={i} className="pt-stat-item" style={{ animationDelay: `${i * 0.1}s` }}>
              <span className="pt-stat-value">
                {statsIn ? <AnimatedCounter target={s.value} /> : '0'}
              </span>
              <span className="pt-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* LEVELS */}
      <section className="pt-levels" ref={levelsRef}>
        <div className={`pt-section-header ${levelsIn ? 'pt-fade-up' : 'pt-hidden'}`}>
          <span className="pt-section-tag">اختر مستواك</span>
          <h2 className="pt-section-title">برامج لكل المستويات</h2>
        </div>
        <div className={`pt-levels-tabs ${levelsIn ? 'pt-fade-up' : 'pt-hidden'}`} style={{ animationDelay: '0.15s' }}>
          {levels.map(l => (
            <button
              key={l.id}
              className={`pt-level-tab ${activeLevel === l.id ? 'active' : ''}`}
              style={activeLevel === l.id ? { borderColor: l.color, color: l.color, background: l.bg } : {}}
              onClick={() => setActiveLevel(l.id)}
            >
              {l.icon}
              <span>{l.label}</span>
              <span className="pt-level-tag" style={activeLevel === l.id ? { background: l.color, color: '#fff' } : {}}>{l.tag}</span>
            </button>
          ))}
        </div>
        {activeLevelData && (
          <div className="pt-level-content" key={activeLevel} style={{ borderColor: activeLevelData.border, background: activeLevelData.bg }}>
            <h3 className="pt-level-content-title" style={{ color: activeLevelData.color }}>
              برنامج {activeLevelData.label}
            </h3>
            <ul className="pt-level-features">
              {activeLevelData.features.map((f, i) => (
                <li key={i} className="pt-level-feature" style={{ animationDelay: `${i * 0.08}s` }}>
                  <span className="pt-level-dot" style={{ background: activeLevelData.color }} />
                  {f}
                </li>
              ))}
            </ul>
            <button className="pt-btn-level" style={{ background: activeLevelData.color }}>
              انضم لبرنامج {activeLevelData.label}
            </button>
          </div>
        )}
      </section>

      {/* FEATURES GRID */}
      <section className="pt-features" ref={featRef}>
        <div className={`pt-section-header ${featIn ? 'pt-fade-up' : 'pt-hidden'}`}>
          <span className="pt-section-tag">لماذا نحن؟</span>
          <h2 className="pt-section-title">كل ما تحتاجه في مكان واحد</h2>
        </div>
        <div className="pt-features-grid">
          {features.map((f, i) => (
            <div
              key={i}
              className={`pt-feature-card ${featIn ? 'pt-fade-up' : 'pt-hidden'}`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <span className="pt-feature-icon">{f.icon}</span>
              <h4 className="pt-feature-title">{f.title}</h4>
              <p className="pt-feature-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="pt-testimonial">
        <div className="pt-testi-inner">
          <div className="pt-testi-stars">★★★★★</div>
          <p className="pt-testi-quote">
            "بعد شهرين مع Pro Training تغير جسمي بشكل مذهل. المدربين محترفين جداً والبرنامج منظم ومدروس."
          </p>
          <div className="pt-testi-author">
            <div className="pt-testi-avatar">أح</div>
            <div>
              <p className="pt-testi-name">أحمد حسن</p>
              <p className="pt-testi-role">مستوى محترف · 8 أسابيع</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pt-cta" ref={ctaRef}>
        <div className={`pt-cta-inner ${ctaIn ? 'pt-fade-up' : 'pt-hidden'}`}>
          <h2 className="pt-cta-title">مستعد تبدأ رحلتك؟</h2>
          <p className="pt-cta-sub">انضم لأكثر من 1,200 متدرب وابدأ تحول حقيقي اليوم</p>
          <button className="pt-btn-primary large">ابدأ التدريب الآن</button>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ProTraining
