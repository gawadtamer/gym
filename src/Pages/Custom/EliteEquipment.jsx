import React, { useRef, useState, useEffect } from 'react'
import Navbar from '../../Home/Nabar'
import Footer from '../../Home/Footer'
import { useTranslation } from "react-i18next"
import { motion, useScroll, useTransform, useInView, useSpring } from "framer-motion"


/* ── DATA ─────────────────────────────────────────── */
const features = [
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" width="36" height="36">
        <rect x="3" y="17" width="8" height="6" rx="2" fill="currentColor" opacity=".85"/>
        <rect x="1" y="15" width="5" height="10" rx="1.5" fill="currentColor"/>
        <rect x="29" y="17" width="8" height="6" rx="2" fill="currentColor" opacity=".85"/>
        <rect x="34" y="15" width="5" height="10" rx="1.5" fill="currentColor"/>
        <rect x="11" y="18.5" width="18" height="3" rx="1.5" fill="currentColor"/>
      </svg>
    ),
    label: 'High Performance',
    sub: 'أجهزة مصممة لأقصى أداء',
    accent: '#e03060',
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" width="36" height="36">
        <polygon points="20,4 24,14 35,15 27,23 29,34 20,29 11,34 13,23 5,15 16,14"
          stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round"/>
      </svg>
    ),
    label: 'Premium Quality',
    sub: 'جودة عالمية مضمونة',
    accent: '#BA7517',
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" width="36" height="36">
        <path d="M6 30 L14 10 L20 22 L26 16 L34 30 Z"
          stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round"/>
        <circle cx="20" cy="22" r="3" fill="currentColor"/>
      </svg>
    ),
    label: 'Elite Results',
    sub: 'نتائج ملموسة مع الخبراء',
    accent: '#1D9E75',
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" width="36" height="36">
        <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="2"/>
        <path d="M20 10 L20 20 L28 20" stroke="currentColor" strokeWidth="2.2"
          strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: 'Fast Delivery',
    sub: 'تركيب وتسليم سريع',
    accent: '#7F77DD',
  },
]

const equipment = [
  { id: 1, name: 'Power Rack', nameAr: 'باور راك', muscle: 'الصدر · الظهر · الساقين', tier: 'Elite' },
  { id: 2, name: 'Cable System', nameAr: 'سيستم كابل', muscle: 'الكتفين · الذراعين · الظهر', tier: 'Pro' },
  { id: 3, name: 'Treadmill X9', nameAr: 'تريدميل X9', muscle: 'كارديو · الساقين · القلب', tier: 'Elite' },
  { id: 4, name: 'Leg Press', nameAr: 'ليج برس', muscle: 'الرباعية · المؤخرة · السمانة', tier: 'Pro' },
  { id: 5, name: 'Smith Machine', nameAr: 'سميث ماشين', muscle: 'الصدر · الكتفين · الساقين', tier: 'Elite' },
  { id: 6, name: 'Rowing Erg', nameAr: 'جهاز التجديف', muscle: 'الظهر · الذراعين · البطن', tier: 'Pro' },
]

/* ── STAGGER VARIANTS ─────────────────────────────── */
const stagger = {
  container: { hidden: {}, show: { transition: { staggerChildren: 0.12 } } },
  item: {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
  },
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] },
})

/* ── MAGNETIC BUTTON ──────────────────────────────── */
function MagneticBtn({ children, className }) {
  const ref = useRef(null)
  const x = useSpring(0, { stiffness: 300, damping: 25 })
  const y = useSpring(0, { stiffness: 300, damping: 25 })

  const handleMove = (e) => {
    const r = ref.current.getBoundingClientRect()
    x.set((e.clientX - r.left - r.width / 2) * 0.35)
    y.set((e.clientY - r.top - r.height / 2) * 0.35)
  }
  const handleLeave = () => { x.set(0); y.set(0) }

  return (
    <motion.button
      ref={ref} style={{ x, y }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={className}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </motion.button>
  )
}

/* ── ANIMATED COUNTER ─────────────────────────────── */
function Counter({ to, suffix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!inView) return
    let n = 0
    const step = Math.ceil(to / 60)
    const t = setInterval(() => {
      n += step
      if (n >= to) { setCount(to); clearInterval(t) } else setCount(n)
    }, 20)
    return () => clearInterval(t)
  }, [inView, to])
  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>
}

/* ── MAIN COMPONENT ───────────────────────────────── */
export default function EliteEquipment() {
  const { t } = useTranslation()
  const heroRef = useRef(null)
  const [hoveredFeat, setHoveredFeat] = useState(null)

  /* Parallax on hero */
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroY      = useTransform(scrollYProgress, [0, 1], [0, 130])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0])
  const heroScale  = useTransform(scrollYProgress, [0, 1], [1, 0.93])

  /* InView refs */
  const featRef  = useRef(null)
  const featInView = useInView(featRef,  { once: true, margin: '-80px' })
  const eqRef    = useRef(null)
  const eqInView   = useInView(eqRef,   { once: true, margin: '-60px' })
  const ctaRef   = useRef(null)
  const ctaInView  = useInView(ctaRef,  { once: true, margin: '-60px' })

  return (
    <div className="ee2-page">
      <Navbar />

      {/* VIDEO BACKGROUND */}
      <div className="ee2-video-wrap">
        <video autoPlay loop muted playsInline className="ee2-video">
          <source src="/videos/gym.mp4" type="video/mp4" />
        </video>
        <div className="ee2-video-overlay" />
      </div>

      {/* ──────── HERO ──────── */}
      <section className="ee2-hero" ref={heroRef}>
        <motion.div
          className="ee2-hero-inner"
          style={{ y: heroY, opacity: heroOpacity, scale: heroScale }}
        >
          {/* Animated tag */}
          <motion.div {...fadeUp(0)}>
            <span className="ee2-tag">
              <motion.span
                className="ee2-tag-dot"
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0.4, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              Professional Gym Equipment
            </span>
          </motion.div>

          {/* Letter-by-letter title */}
          <div className="ee2-title-wrap" aria-label="Elite Equipment">
            {'ELITE'.split('').map((c, i) => (
              <motion.span key={i} className="ee2-title-char"
                initial={{ opacity: 0, y: 90, rotateX: -55 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.7, delay: 0.15 + i * 0.075, ease: [0.22, 1, 0.36, 1] }}
              >{c}</motion.span>
            ))}
            <br />
            {'EQUIPMENT'.split('').map((c, i) => (
              <motion.span key={i} className="ee2-title-char red"
                initial={{ opacity: 0, y: 90, rotateX: -55 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.7, delay: 0.5 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              >{c}</motion.span>
            ))}
          </div>

          <motion.p className="ee2-hero-desc" {...fadeUp(1.1)}>
            {t('whyChooseUs.eliteEquipmentDesc', 'Top-tier machines engineered for maximum performance.')}
          </motion.p>

          {/* Stats */}
          <motion.div className="ee2-stats" {...fadeUp(1.25)}>
            {[
              { n: 120, s: '+', l: 'جهاز احترافي' },
              { n: 98,  s: '%', l: 'رضا العملاء' },
              { n: 15,  s: '+', l: 'سنة خبرة' },
            ].map((st, i) => (
              <React.Fragment key={i}>
                {i > 0 && <div className="ee2-stat-div" />}
                <div className="ee2-stat">
                  <span className="ee2-stat-n"><Counter to={st.n} suffix={st.s} /></span>
                  <span className="ee2-stat-l">{st.l}</span>
                </div>
              </React.Fragment>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div className="ee2-cta-row" {...fadeUp(1.4)}>
            <MagneticBtn className="ee2-btn-primary">
              <span>Explore Products</span>
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </MagneticBtn>
            <MagneticBtn className="ee2-btn-ghost">Watch Demo</MagneticBtn>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div className="ee2-scroll-hint"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2 }}>
          <motion.div className="ee2-scroll-line"
            animate={{ scaleY: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
          <span>scroll</span>
        </motion.div>
      </section>

      {/* ──────── FEATURES ──────── */}
      <section className="ee2-features-section" ref={featRef}>
        <motion.div className="ee2-section-label"
          initial={{ opacity: 0, x: -30 }}
          animate={featInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="ee2-section-line" />
          Why Elite
        </motion.div>

        <motion.div
          className="ee2-features-grid"
          variants={stagger.container}
          initial="hidden"
          animate={featInView ? 'show' : 'hidden'}
        >
          {features.map((f, i) => (
            <motion.div
              key={i}
              className="ee2-feat-card"
              variants={stagger.item}
              style={{ '--accent': f.accent }}
              whileHover={{ y: -10, transition: { duration: 0.25 } }}
              onHoverStart={() => setHoveredFeat(i)}
              onHoverEnd={() => setHoveredFeat(null)}
            >
              <motion.div className="ee2-feat-icon" style={{ color: f.accent }}
                animate={hoveredFeat === i ? { scale: 1.18, rotate: 6 } : { scale: 1, rotate: 0 }}
                transition={{ duration: 0.3 }}
              >
                {f.icon}
              </motion.div>
              <p className="ee2-feat-label">{f.label}</p>
              <p className="ee2-feat-sub">{f.sub}</p>
              <motion.div className="ee2-feat-bar"
                initial={{ scaleX: 0 }}
                animate={hoveredFeat === i ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 0.3 }}
                style={{ background: f.accent }}
              />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ──────── EQUIPMENT GRID ──────── */}
      <section className="ee2-eq-section" ref={eqRef}>
        <motion.div className="ee2-eq-header"
          initial={{ opacity: 0, y: 40 }}
          animate={eqInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="ee2-eq-title">Our <span className="ee2-red">Machines</span></h2>
          <p className="ee2-eq-sub">أجهزة النخبة — مصممة للمحترفين</p>
        </motion.div>

        <motion.div className="ee2-eq-grid"
          variants={stagger.container}
          initial="hidden"
          animate={eqInView ? 'show' : 'hidden'}
        >
          {equipment.map((eq) => (
            <motion.div key={eq.id} className="ee2-eq-card"
              variants={stagger.item}
              whileHover={{ scale: 1.04, transition: { duration: 0.22 } }}
            >
              <span className="ee2-eq-tier">{eq.tier}</span>
              <span className="ee2-eq-num">0{eq.id}</span>
              <p className="ee2-eq-name">{eq.name}</p>
              <p className="ee2-eq-name-ar">{eq.nameAr}</p>
              <p className="ee2-eq-muscle">{eq.muscle}</p>
              <motion.span className="ee2-eq-arrow" whileHover={{ x: 6 }}>
                <svg width="17" height="17" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ──────── CTA BANNER ──────── */}
      <section className="ee2-cta-banner" ref={ctaRef}>
        <motion.div className="ee2-cta-inner"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={ctaInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="ee2-cta-glow" />
          <p className="ee2-cta-eyebrow">Ready to train?</p>
          <h2 className="ee2-cta-heading">ابدأ رحلتك مع الأفضل</h2>
          <MagneticBtn className="ee2-btn-primary large">
            <span>احجز جولتك الآن</span>
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </MagneticBtn>
        </motion.div>
      </section>

      <Footer />
    </div>
  )
}
