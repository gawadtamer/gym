import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../../Home/Nabar'
import Footer from '../../Home/Footer'


function DietDetails() {
  const [selectedGoal, setSelectedGoal] = useState('')
  const [bmi, setBmi] = useState(null)
  const [bmiStatus, setBmiStatus] = useState('')
  const [calories, setCalories] = useState('')
  const [showBmi, setShowBmi] = useState(false)
  const [toast, setToast] = useState({ show: false, msg: '' })
  const [openFaq, setOpenFaq] = useState(null)

  const [form, setForm] = useState({
    name: '', age: '', weight: '', height: '', gender: '', activity: ''
  })

  /* ---------- scroll reveal ---------- */
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.12 }
    )
    document.querySelectorAll('.obs-card,.obs-step,.obs-meal,.obs-review').forEach((el, i) => {
      el.style.transitionDelay = `${(i % 6) * 0.09}s`
      obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  /* ---------- BMI calc ---------- */
  const calcBMI = (overrides = {}) => {
    const w = parseFloat(overrides.weight ?? form.weight)
    const h = parseFloat(overrides.height ?? form.height)
    const age = parseInt(overrides.age ?? form.age) || 25
    const gender = overrides.gender ?? form.gender
    const activity = parseFloat(overrides.activity ?? form.activity) || 1.375
    const goal = overrides.goal ?? selectedGoal

    if (!w || !h || h < 100) return

    const bmiVal = (w / (h / 100) ** 2).toFixed(1)
    const status =
      bmiVal < 18.5 ? 'نحافة — يُنصح بزيادة الوزن' :
      bmiVal < 25   ? 'وزن مثالي — ممتاز!'          :
      bmiVal < 30   ? 'زيادة وزن — يمكن التحسين'    :
                      'سمنة — ننصح ببدء البرنامج'

    let bmr = gender === 'female'
      ? (10 * w + 6.25 * h - 5 * age - 161)
      : (10 * w + 6.25 * h - 5 * age + 5)
    let tdee = Math.round(bmr * activity)

    let cal = ''
    if      (goal === 'loss')     { tdee -= 400; cal = `هدف: حرق الدهون — ${tdee} سعر يومياً` }
    else if (goal === 'gain')     { tdee += 300; cal = `هدف: بناء عضلة — ${tdee} سعر يومياً` }
    else if (goal === 'maintain')              { cal = `هدف: ثبات الوزن — ${tdee} سعر يومياً` }
    else                                       { cal = `احتياجك اليومي: ${tdee} سعر حراري` }

    setBmi(bmiVal)
    setBmiStatus(`مؤشر كتلة الجسم • ${status}`)
    setCalories(cal)
    setShowBmi(true)
  }

  const handleInput = e => {
    const updated = { ...form, [e.target.name]: e.target.value }
    setForm(updated)
    calcBMI(updated)
  }

  const handleGoal = val => {
    setSelectedGoal(val)
    calcBMI({ goal: val })
  }

  /* ---------- form submit ---------- */
  const submitForm = () => {
    if (!form.name || !form.weight || !form.height) {
      showToast('من فضلك أكمل البيانات الأساسية')
      return
    }
    calcBMI()
    showToast('تم إرسال بياناتك! نظامك جاهز قريباً')
  }

  /* ---------- toast ---------- */
  const showToast = msg => {
    setToast({ show: true, msg })
    setTimeout(() => setToast({ show: false, msg: '' }), 3000)
  }

  /* ---------- FAQ ---------- */
  const toggleFaq = i => setOpenFaq(openFaq === i ? null : i)

  /* ---------- scroll helper ---------- */
  const scrollTo = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  /* ---------- data ---------- */
  const features = [
    { icon: '🎯', title: 'مناسب لهدفك',    desc: 'خطة مخصصة حسب وزنك وهدفك' },
    { icon: '🥗', title: 'وصفات سهلة',     desc: 'أكلات لذيذة وسريعة التحضير' },
    { icon: '🔄', title: 'بدائل مرنة',     desc: 'لكل وجبة بدائل جاهزة' },
    { icon: '📊', title: 'متابعة مستمرة',  desc: 'تقارير أسبوعية لتقدمك' },
    { icon: '⚡', title: 'تعديل تلقائي',   desc: 'النظام يتكيف مع تقدمك' },
    { icon: '💪', title: 'بدون حرمان',     desc: 'كل مجموعات الغذاء متاحة' },
  ]

  const steps = [
    { title: 'أدخل بياناتك',         desc: 'الوزن، الطول، العمر، ومستوى نشاطك اليومي' },
    { title: 'تحليل جسمك وهدفك',     desc: 'خوارزمية تحسب احتياجاتك الدقيقة من السعرات' },
    { title: 'استلم نظامك الغذائي',  desc: 'خطة أسبوعية كاملة مع وصفات وقوائم تسوق' },
    { title: 'تابع وحقق النتائج',    desc: 'تعديلات دورية بناءً على تقدمك الفعلي' },
  ]

  const meals = [
    { time: '🌅 إفطار', name: 'شوفان + موز + عسل',   cal: '~320 سعر' },
    { time: '🍎 سناك',  name: 'مكسرات + تفاحة',       cal: '~180 سعر' },
    { time: '☀️ غداء',  name: 'فراخ + رز + خضار',     cal: '~450 سعر' },
    { time: '🌿 سناك',  name: 'زبادي + توت',           cal: '~150 سعر' },
    { time: '🌙 عشاء',  name: 'بيض + سلطة خضراء',     cal: '~280 سعر' },
  ]

  const reviews = [
    { stars: '★★★★★', text: '"خسيت 7 كيلو في شهر ونص من غير ما أحس بأي حرمان، الوصفات سهلة ولذيذة جداً!"', name: 'سارة محمود', initials: 'سم' },
    { stars: '★★★★★', text: '"أفضل نظام جربته، التعديلات الأسبوعية فرقت معايا كتير وحسيت بالنتيجة بسرعة."',  name: 'أحمد حسن',   initials: 'أح' },
    { stars: '★★★★☆', text: '"البدائل المرنة دي حاجة مش لاقياها في أي نظام تاني، والنتيجة بتتكلم عن نفسها."', name: 'نادية عمر',   initials: 'ند' },
  ]

  const faqs = [
    { q: 'هل النظام مناسب للمبتدئين؟',                   a: 'نعم، مصمم للجميع. الخطوات واضحة والوصفات بسيطة سواء كنت تبدأ لأول مرة أو لديك خبرة سابقة.' },
    { q: 'هل فيه حرمان من أكل معين؟',                    a: 'لا، النظام لا يعتمد على الحرمان. كل مجموعات الغذاء متاحة مع ضبط الكميات وتوزيع الوجبات.' },
    { q: 'هل أقدر أعدّل النظام؟',                        a: 'طبعاً، لكل وجبة بدائل جاهزة. ولو تقدمك وقف، النظام بيتعدل تلقائياً كل أسبوع.' },
    { q: 'كم الوقت اللازم لرؤية نتائج؟',                 a: 'معظم العملاء يلاحظون فرقاً في أول أسبوعين. النتائج تعتمد على الالتزام ومستوى النشاط البدني.' },
    { q: 'هل النظام مناسب لمرضى السكر أو الضغط؟',        a: 'لدينا خطط خاصة لحالات صحية مختلفة. ننصح باستشارة الطبيب أولاً ثم إخبارنا بحالتك.' },
  ]

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh', direction: 'rtl' }}>
      <Navbar />

      <div className="hero">
        <div className="hero-badge">نظام غذائي ذكي ومخصص</div>
        <h1>حقق هدفك مع نظام<br /><span>مصمم خصيصاً لك</span></h1>
        <p>برامج علمية مستدامة بدون حرمان<br />تناسب جسمك وأسلوب حياتك</p>
        <div className="hero-btns">
          <button className="btn-primary" onClick={() => scrollTo('plan-form')}>احصل على خطتك مجاناً</button>
          <button className="btn-outline"  onClick={() => scrollTo('how')}>كيف يعمل؟</button>
        </div>
      </div>

      {/* ===== STATS ===== */}
      <div style={{ padding: '0 24px' }}>
        <div className="stats">
          <div className="stat-card"><div className="num">+5000</div><div className="lbl">عميل راضي</div></div>
          <div className="stat-card"><div className="num">92%</div><div className="lbl">نسبة النجاح</div></div>
          <div className="stat-card"><div className="num">8 كيلو</div><div className="lbl">متوسط / شهر</div></div>
        </div>
      </div>

      {/* ===== FEATURES ===== */}
      <div className="section">
        <div className="section-title">مميزات النظام</div>
        <div className="section-sub">كل ما تحتاجه لرحلة صحية ناجحة</div>
        <div className="divider" />
        <div className="features-grid">
          {features.map((f, i) => (
            <div className="feature-card obs-card" key={i}>
              <span className="feature-icon">{f.icon}</span>
              <strong>{f.title}</strong>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ===== HOW IT WORKS ===== */}
      <div id="how" className="section alt-bg">
        <div className="section-title">كيف يعمل النظام؟</div>
        <div className="section-sub">أربع خطوات بسيطة لرحلتك</div>
        <div className="divider" />
        <div style={{ maxWidth: 480, margin: '0 auto' }}>
          {steps.map((s, i) => (
            <div className="step-item obs-step" key={i}>
              <div className="step-num">{i + 1}</div>
              <div className="step-content">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== MEALS ===== */}
      <div className="section">
        <div className="section-title">مثال يوم غذائي</div>
        <div className="section-sub">وجبات متوازنة ومتنوعة طوال اليوم</div>
        <div className="divider" />
        <div className="meals-grid">
          {meals.map((m, i) => (
            <div className="meal-card obs-meal" key={i}>
              <div className="meal-time">{m.time}</div>
              <div className="meal-name">{m.name}</div>
              <div className="meal-cal">{m.cal}</div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 16, fontSize: 12, color: 'var(--muted)' }}>
          إجمالي ~1380 سعر • يتغير حسب هدفك الشخصي
        </div>
      </div>

      {/* ===== FORM ===== */}
      <div id="plan-form" className="section alt-bg">
        <div className="section-title">احسب نظامك الغذائي</div>
        <div className="section-sub">أدخل بياناتك واستلم خطتك فوراً</div>
        <div className="divider" />
        <div className="form-wrap">

          <div className="form-row">
            <div className="form-group">
              <label>الاسم</label>
              <input name="name" placeholder="اسمك الكريم" value={form.name} onChange={handleInput} />
            </div>
            <div className="form-group">
              <label>العمر</label>
              <input name="age" type="number" placeholder="28" value={form.age} onChange={handleInput} />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>الوزن (كجم)</label>
              <input name="weight" type="number" placeholder="80" value={form.weight} onChange={handleInput} />
            </div>
            <div className="form-group">
              <label>الطول (سم)</label>
              <input name="height" type="number" placeholder="170" value={form.height} onChange={handleInput} />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>الجنس</label>
              <select name="gender" value={form.gender} onChange={handleInput}>
                <option value="">اختر</option>
                <option value="male">ذكر</option>
                <option value="female">أنثى</option>
              </select>
            </div>
            <div className="form-group">
              <label>مستوى النشاط</label>
              <select name="activity" value={form.activity} onChange={handleInput}>
                <option value="">اختر</option>
                <option value="1.2">قليل الحركة</option>
                <option value="1.375">نشاط خفيف</option>
                <option value="1.55">نشاط متوسط</option>
                <option value="1.725">نشاط مرتفع</option>
              </select>
            </div>
          </div>

          <div className="form-group" style={{ marginBottom: 16 }}>
            <label>هدفك الأساسي</label>
            <div className="goal-btns">
              {[['loss','خسارة وزن'],['gain','زيادة عضل'],['maintain','الحفاظ على الوزن'],['health','صحة عامة']].map(([val, label]) => (
                <button
                  key={val}
                  className={`goal-btn${selectedGoal === val ? ' active' : ''}`}
                  onClick={() => handleGoal(val)}
                >{label}</button>
              ))}
            </div>
          </div>

          {showBmi && (
            <div className="bmi-box show">
              <div className="bmi-num">{bmi}</div>
              <div className="bmi-status">{bmiStatus}</div>
              <div className="bmi-cal">{calories}</div>
            </div>
          )}

          <button
            className="btn-primary"
            style={{ width: '100%', marginTop: 20, padding: 14, fontSize: 15, borderRadius: 12 }}
            onClick={submitForm}
          >
            احسب نظامي الغذائي
          </button>
        </div>
      </div>

      {/* ===== REVIEWS ===== */}
      <div className="section">
        <div className="section-title">آراء عملائنا</div>
        <div className="section-sub">أكثر من 5000 شخص غيّروا حياتهم</div>
        <div className="divider" />
        <div className="reviews-grid">
          {reviews.map((r, i) => (
            <div className="review-card obs-review" key={i} style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="stars">{r.stars}</div>
              <p className="review-text">{r.text}</p>
              <div className="reviewer">
                <div className="avatar">{r.initials}</div>
                <div className="reviewer-name">{r.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== FAQ ===== */}
      <div className="section alt-bg">
        <div className="section-title">أسئلة شائعة</div>
        <div className="divider" />
        <div className="faq-list">
          {faqs.map((f, i) => (
            <div className={`faq-item${openFaq === i ? ' open' : ''}`} key={i} onClick={() => toggleFaq(i)}>
              <div className="faq-q">{f.q}<span className="faq-icon">+</span></div>
              <div className="faq-a"><p>{f.a}</p></div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== CTA ===== */}
      <div className="cta-section">
        <div style={{ fontSize: 36, marginBottom: 16 }}>🔥</div>
        <h2>ابدأ رحلتك اليوم</h2>
        <p>انضم لأكثر من 5000 شخص غيّروا حياتهم<br />الخطة الأولى مجانية</p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', position: 'relative' }}>
          <button className="btn-primary" style={{ padding: '14px 36px', fontSize: 15 }} onClick={() => scrollTo('plan-form')}>احصل على خطتك مجاناً</button>
          <button className="btn-outline"  style={{ padding: '14px 36px', fontSize: 15 }} onClick={() => showToast('سيتم التواصل معك قريباً!')}>تواصل معنا</button>
        </div>
      </div>
      <Footer />

      {/* ===== TOAST ===== */}
      <div className={`toast${toast.show ? ' show' : ''}`}>{toast.msg}</div>

    </div>
  )
}

export default DietDetails
