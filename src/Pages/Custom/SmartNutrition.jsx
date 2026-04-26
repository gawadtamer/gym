import React, { useRef, useState } from 'react'
import Navbar from '../../Home/Nabar'
import Footer from '../../Home/Footer'
import { useTranslation } from "react-i18next"
import { useCart } from "../../CartContext"
import { motion, useInView, useScroll, useTransform, useSpring } from "framer-motion"


/* ── PLANS DATA ─────────────────────────────────── */
const plans = [
  {
    id: 1, key: "weightLoss", price: "$29",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="40" height="40">
        <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="2"/>
        <path d="M16 32 L24 16 L32 32" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M19 27h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    color: '#e03060', tag: 'Popular',
  },
  {
    id: 2, key: "muscleGain", price: "$39",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="40" height="40">
        <rect x="5" y="20" width="9" height="8" rx="2.5" fill="currentColor" opacity=".8"/>
        <rect x="2" y="17" width="6" height="14" rx="2" fill="currentColor"/>
        <rect x="34" y="20" width="9" height="8" rx="2.5" fill="currentColor" opacity=".8"/>
        <rect x="40" y="17" width="6" height="14" rx="2" fill="currentColor"/>
        <rect x="14" y="22" width="20" height="4" rx="2" fill="currentColor"/>
      </svg>
    ),
    color: '#BA7517', tag: 'Best Value',
  },
  {
    id: 3, key: "healthyLife", price: "$25",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="40" height="40">
        <path d="M24 40 C24 40 8 30 8 18 C8 13 12 10 16 10 C19 10 22 12 24 15 C26 12 29 10 32 10 C36 10 40 13 40 18 C40 30 24 40 24 40Z"
          stroke="currentColor" strokeWidth="2.2" fill="none" strokeLinejoin="round"/>
      </svg>
    ),
    color: '#1D9E75', tag: 'Beginner',
  },
]

/* ── SUPPLEMENTS DATA ───────────────────────────── */
const supplements = [
  {
    id: 101, key: "whey", price: "$19",
    image: "https://images.unsplash.com/photo-1593095191071-82b0fdf983a1?q=80&w=600&auto=format",
    color: '#e03060', badge: 'Best Seller',
    macros: { protein: '25g', carbs: '3g', cal: '120' },
  },
  {
    id: 102, key: "omega3", price: "$15",
    image: "https://images.unsplash.com/photo-1550572017-edd951b55104?q=80&w=600&auto=format",
    color: '#378ADD', badge: 'Heart Health',
    macros: { protein: '0g', carbs: '0g', cal: '10' },
  },
  {
    id: 103, key: "multi", price: "$12",
    image: "https://images.unsplash.com/photo-1616671276441-2f2c277b8bf6?q=80&w=600&auto=format",
    color: '#1D9E75', badge: 'Daily Use',
    macros: { protein: '0g', carbs: '1g', cal: '5' },
  },
  {
    id: 104, key: "creatine", price: "$22",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=600&auto=format",
    color: '#7F77DD', badge: 'Strength+',
    macros: { protein: '0g', carbs: '0g', cal: '0' },
  },
  {
    id: 105, key: "bcaa", price: "$18",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=600&auto=format",
    color: '#BA7517', badge: 'Recovery',
    macros: { protein: '7g', carbs: '0g', cal: '28' },
  },
  {
    id: 106, key: "pre", price: "$25",
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=600&auto=format",
    color: '#e03060', badge: 'Energy',
    macros: { protein: '2g', carbs: '5g', cal: '30' },
  },
]

/* ── HELPERS ────────────────────────────────────── */
const easing = [0.22, 1, 0.36, 1]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 44 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: easing },
})

function MagneticBtn({ children, className, onClick }) {
  const ref = useRef(null)
  const x = useSpring(0, { stiffness: 280, damping: 22 })
  const y = useSpring(0, { stiffness: 280, damping: 22 })
  const move = (e) => {
    const r = ref.current.getBoundingClientRect()
    x.set((e.clientX - r.left - r.width / 2) * 0.3)
    y.set((e.clientY - r.top - r.height / 2) * 0.3)
  }
  const leave = () => { x.set(0); y.set(0) }
  return (
    <motion.button ref={ref} style={{ x, y }} className={className}
      onMouseMove={move} onMouseLeave={leave} onClick={onClick} whileTap={{ scale: 0.96 }}>
      {children}
    </motion.button>
  )
}

/* ── PLAN CARD ───────────────────────────────────── */
function PlanCard({ plan, index, t, addToCart }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [hov, setHov] = useState(false)

  return (
    <motion.div
      ref={ref}
      className="sn-plan-card"
      style={{ '--c': plan.color }}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.12, ease: easing }}
      whileHover={{ y: -8, transition: { duration: 0.25 } }}
      onHoverStart={() => setHov(true)}
      onHoverEnd={() => setHov(false)}
    >
      {plan.tag && (
        <span className="sn-plan-tag" style={{ background: plan.color + '22', color: plan.color }}>
          {plan.tag}
        </span>
      )}

      <motion.div className="sn-plan-icon" style={{ color: plan.color }}
        animate={hov ? { scale: 1.15, rotate: 5 } : { scale: 1, rotate: 0 }}
        transition={{ duration: 0.3 }}>
        {plan.icon}
      </motion.div>

      <h3 className="sn-plan-title">{t(`smartNutrition.plans.${plan.key}.title`)}</h3>
      <p className="sn-plan-desc">{t(`smartNutrition.plans.${plan.key}.desc`)}</p>

      <div className="sn-plan-price">
        <span className="sn-price-val">{plan.price}</span>
        <span className="sn-price-period">/month</span>
      </div>

      <MagneticBtn
        className="sn-btn-primary"
        style={{ background: plan.color }}
        onClick={() => addToCart({ id: plan.id, name: t(`smartNutrition.plans.${plan.key}.title`), price: plan.price, image: process.env.PUBLIC_URL + '/images/supplements/subscription.png' })}
      >
        {t('smartNutrition.buttons.subscribe', 'اشترك الآن')}
      </MagneticBtn>

      <motion.div className="sn-plan-bar"
        initial={{ scaleX: 0 }}
        animate={hov ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.35 }}
        style={{ background: plan.color }}
      />
    </motion.div>
  )
}

/* ── SUPPLEMENT CARD ─────────────────────────────── */
function SupplementCard({ item, index, t, addToCart }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [hov, setHov] = useState(false)
  const [added, setAdded] = useState(false)

  const handleAdd = () => {
    addToCart({ id: item.id, name: t(`smartNutrition.supplements.${item.key}.title`), price: item.price, image: item.image })
    setAdded(true)
    setTimeout(() => setAdded(false), 1800)
  }

  return (
    <motion.div
      ref={ref}
      className="sn-supp-card"
      style={{ '--c': item.color }}
      initial={{ opacity: 0, y: 55, scale: 0.96 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.68, delay: (index % 3) * 0.1, ease: easing }}
      onHoverStart={() => setHov(true)}
      onHoverEnd={() => setHov(false)}
    >
      {/* Image area */}
      <div className="sn-supp-img-wrap">
        <motion.div className="sn-supp-img-glow"
          animate={hov ? { opacity: 1, scale: 1.15 } : { opacity: 0.4, scale: 1 }}
          transition={{ duration: 0.4 }}
          style={{ background: `radial-gradient(circle, ${item.color}44, transparent 65%)` }}
        />
        <motion.img
          className="sn-supp-img"
          src={item.image}
          alt={item.key}
          loading="lazy"
          animate={hov ? { scale: 1.08 } : { scale: 1 }}
          transition={{ duration: 0.45, ease: easing }}
        />
        <span className="sn-supp-badge" style={{ background: item.color + '22', color: item.color, borderColor: item.color + '44' }}>
          {item.badge}
        </span>
      </div>

      {/* Body */}
      <div className="sn-supp-body">
        <h3 className="sn-supp-title">{t(`smartNutrition.supplements.${item.key}.title`)}</h3>
        <p className="sn-supp-desc">{t(`smartNutrition.supplements.${item.key}.desc`)}</p>

        {/* Macros */}
        <div className="sn-macros">
          <div className="sn-macro">
            <span className="sn-macro-val" style={{ color: item.color }}>{item.macros.protein}</span>
            <span className="sn-macro-l">Protein</span>
          </div>
          <div className="sn-macro-div" />
          <div className="sn-macro">
            <span className="sn-macro-val">{item.macros.carbs}</span>
            <span className="sn-macro-l">Carbs</span>
          </div>
          <div className="sn-macro-div" />
          <div className="sn-macro">
            <span className="sn-macro-val">{item.macros.cal}</span>
            <span className="sn-macro-l">Calories</span>
          </div>
        </div>

        {/* Footer */}
        <div className="sn-supp-footer">
          <span className="sn-supp-price">{item.price}</span>
          <MagneticBtn className={`sn-btn-cart ${added ? 'added' : ''}`} onClick={handleAdd}>
            {added ? (
              <motion.span key="ok" initial={{ scale: 0 }} animate={{ scale: 1 }}>✓ Added</motion.span>
            ) : (
              <motion.span key="add" initial={{ scale: 0 }} animate={{ scale: 1 }}>
                {t('smartNutrition.buttons.addCart', 'أضف للسلة')}
              </motion.span>
            )}
          </MagneticBtn>
        </div>
      </div>
    </motion.div>
  )
}

/* ── MAIN COMPONENT ─────────────────────────────── */
export default function SmartNutrition() {
  const { t } = useTranslation()
  const { addToCart } = useCart()

  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100])
  const heroOp = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  const plansRef = useRef(null)
  const plansInView = useInView(plansRef, { once: true, margin: '-80px' })
  const suppRef = useRef(null)
  const suppInView = useInView(suppRef, { once: true, margin: '-80px' })

  return (
    <div className="sn-page">
      <Navbar />

      {/* BG */}
      <div className="sn-bg">
        <div className="sn-orb sn-orb1" />
        <div className="sn-orb sn-orb2" />
        <div className="sn-grid" />
      </div>

      {/* ── HERO ── */}
      <section className="sn-hero" ref={heroRef}>
        <motion.div className="sn-hero-inner" style={{ y: heroY, opacity: heroOp }}>

          <motion.span className="sn-hero-tag" {...fadeUp(0)}>
            <motion.span className="sn-tag-pulse"
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            Science-Based Nutrition
          </motion.span>

          <motion.h1 className="sn-hero-title" {...fadeUp(0.1)}>
            {t('smartNutrition.hero.title', 'Smart')}
            <span className="sn-hero-red"> Nutrition</span>
          </motion.h1>

          <motion.p className="sn-hero-sub" {...fadeUp(0.25)}>
            {t('smartNutrition.hero.subtitle', 'Science-based meal plans tailored to your body.')}
          </motion.p>

          <motion.div className="sn-hero-pills" {...fadeUp(0.4)}>
            {['خالي من السكر', 'مكونات طبيعية', 'معتمد علمياً'].map((p, i) => (
              <span key={i} className="sn-pill">{p}</span>
            ))}
          </motion.div>

        </motion.div>
      </section>

      <div className="sn-container">

        {/* ── PLANS ── */}
        <section className="sn-section" ref={plansRef}>
          <motion.div className="sn-section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={plansInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}>
            <span className="sn-section-eyebrow">
              <span className="sn-eyebrow-line" />
              Nutrition Plans
            </span>
            <h2 className="sn-section-title">
              {t('smartNutrition.plans.title', 'اختر خطتك')}
            </h2>
          </motion.div>

          <div className="sn-plans-grid">
            {plans.map((plan, i) => (
              <PlanCard key={plan.id} plan={plan} index={i} t={t} addToCart={addToCart} />
            ))}
          </div>
        </section>

        {/* ── SUPPLEMENTS ── */}
        <section className="sn-section" ref={suppRef}>
          <motion.div className="sn-section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={suppInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}>
            <span className="sn-section-eyebrow">
              <span className="sn-eyebrow-line" />
              Premium Supplements
            </span>
            <h2 className="sn-section-title">
              {t('smartNutrition.supplements.title', 'المكملات الغذائية')}
            </h2>
          </motion.div>

          <div className="sn-supps-grid">
            {supplements.map((item, i) => (
              <SupplementCard key={item.id} item={item} index={i} t={t} addToCart={addToCart} />
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <motion.section
          className="sn-cta"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: easing }}
        >
          <div className="sn-cta-glow" />
          <p className="sn-cta-eyebrow">جاهز تبدأ؟</p>
          <h2 className="sn-cta-title">{t('smartNutrition.cta.title', 'ابدأ رحلة التغذية الذكية')}</h2>
          <MagneticBtn className="sn-btn-cta" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <span>{t('smartNutrition.cta.button', 'اشترك الآن')}</span>
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </MagneticBtn>
        </motion.section>

      </div>

      <Footer />
    </div>
  )
}
