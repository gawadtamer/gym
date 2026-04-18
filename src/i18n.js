import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "navbar": {
        "home": "Home",
        "whyUs": "Why Us",
        "trainers": "Trainers",
        "contact": "Contact",
        "joinNow": "Join Now ▼",
        "login": "Login",
        "signIn": "Sign In",
        "dashboard": "Dashboard"

      },
      "hero": {
        "fitness": "Fitness",
        "training": "Training",
        "title": "Neogym",
        "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.",
        "contactUs": "Contact Us"
      },
      "whyChooseUs": {
        "title": "Why Choose Us",
        "equipment": "QUALITY EQUIPMENT",
        "nutrition": "NUTRITION",
        "dietPlan": "HEALTHY DIET PLAN",
        "sportTraining": "SPORT TRAINING",
        "genericDesc": "ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        "eliteEquipment": "Elite Equipment",
        "eliteEquipmentDesc": "Top-tier machines engineered for maximum performance.",
        "smartNutrition": "Smart Nutrition",
        "smartNutritionDesc": "Science-based meal plans tailored to your body.",
        "customDiet": "Custom Diet",
        "customDietDesc": "Sustainable programs that deliver real results.",
        "proTraining": "Pro Training",
        "proTrainingDesc": "Train with experts and reach elite performance.",
        "ultraHeaderDesc": "Push Beyond Limits. Become Unstoppable."
      },
      "healthySection": {
        "title": "HEALTHY MIND, HEALTHY BODY",
        "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
        "readMore": "READ MORE"
      },
      "pricing": {
        "title": "💪 Membership Plans",
        "subtitle": "Choose the plan that fits your fitness goals",
        "popular": "POPULAR",
        "joinNow": "JOIN NOW",
        "plans": {
          "basic": {
            "name": "Basic",
            "price": "$20",
            "features": ["Gym Access", "Locker Room", "1 Trainer Session"]
          },
          "pro": {
            "name": "Pro",
            "price": "$40",
            "features": ["Full Gym Access", "Personal Trainer", "Group Classes", "Nutrition Plan"]
          },
          "vip": {
            "name": "VIP",
            "price": "$70",
            "features": ["All Pro Features", "Private Coaching", "Spa & Sauna", "Priority Support"]
          }
        }
      },
      "trainers": {
        "title": "Our Gym Trainers",
        "viewProfile": "View Profile",
        "hideProfile": "Hide Profile",
        "list": {
          "smirth": {
            "name": "Smirth Jon",
            "level": "Senior Coach",
            "details": "8+ years experience in strength and cardio programs.",
            "profile": "Smirth specializes in personalized weightlifting plans and has helped 100+ clients reach their goals."
          },
          "jean": {
            "name": "Jean Doe",
            "level": "Nutrition Expert",
            "details": "Focuses on meal planning and metabolic health.",
            "profile": "Jean provides customized diet plans and lectures on wellness."
          },
          "alex": {
            "name": "Alex Den",
            "level": "Master Trainer",
            "details": "All-rounder trainer with boxing and HIIT specialties.",
            "profile": "Alex runs our high-intensity classes and mentors junior trainers."
          }
        }
      },
      "contact": {
        "header": "JOIN THE ELITE",
        "subtitle": "Ready to change your life?",
        "stronger": "BE STRONGER",
        "transformation": "Your transformation starts here.",
        "placeholders": {
          "name": "Full Name",
          "email": "Email Address",
          "phone": "Phone Number",
          "membership": "Select Membership",
          "basic": "Basic (1 Month)",
          "pro": "Pro (6 Months)",
          "elite": "Elite (1 Year)",
          "goal": "Your Fitness Goal (e.g. Weight Loss)",
          "message": "Tell us more about yourself..."
        },
        "button": "START YOUR JOURNEY"
      },
      "auth": {
        "login": "Login",
        "signUp": "Sign Up",
        "email": "Enter your email",
        "password": "Enter your password",
        "name": "Enter your full name",
        "confirmPassword": "Confirm your password",
        "noAccount": "Don't have an account?",
        "hasAccount": "Already have an account?"
      },
      "footer": {
        "desc": "Premium fitness center focused on results and wellbeing.",
        "quickLinks": "Quick Links",
        "contact": "Contact",
        "follow": "Follow",
        "rights": "All rights reserved",
        "design": "Design by",
        "address": "123 Fitness St., City",
        "phone": "Phone: 01050204024",
        "email": "Email: gsocial74@gmail.com"
      },
      "nutrition": {
        "title": "Fuel Your Beast Mode",
        "subtitle": "Build your custom nutrition stack and dominate your goals.",
        "items": {
          "whey": { "name": "Whey Protein", "desc": "High quality muscle recovery formula." },
          "mass": { "name": "Mass Gainer", "desc": "Serious calories. Serious growth." },
          "fat": { "name": "Fat Burner", "desc": "Cut. Shred. Define." }
        },
        "cart": "Your Cart",
        "total": "Total",
        "checkout": "Checkout Now"
      },
      "smartNutrition": {
        "hero": {
          "title": "Smart Nutrition",
          "subtitle": "Science-based meal plans tailored to your body."
        },
        "plans": {
          "title": "🔥 Nutrition Plans",
          "weightLoss": { "title": "Weight Loss Plan", "desc": "Burn fat with smart meals" },
          "muscleGain": { "title": "Muscle Gain Plan", "desc": "Build lean muscle fast" },
          "healthyLife": { "title": "Healthy Lifestyle", "desc": "Balanced daily nutrition" }
        },
        "supplements": {
          "title": "💊 Supplements",
          "whey": { "title": "Whey Protein", "desc": "Boost muscle recovery" },
          "omega3": { "title": "Omega 3", "desc": "Heart & brain support" },
          "multi": { "title": "Multivitamins", "desc": "Daily health support" },
          "creatine": { "title": "Creatine Monohydrate", "desc": "Enhance strength and power" },
          "bcaa": { "title": "BCAA Amino Acids", "desc": "Energy and recovery" },
          "pre": { "title": "Pre-Workout Elite", "desc": "Explosive energy and focus" }
        },
        "cta": {
          "title": "Start Your Journey Today 🚀",
          "button": "Get Started"
        },
        "buttons": {
          "subscribe": "Subscribe",
          "addCart": "Add to Cart"
        },
        "testimonials": {
          "title": "What Our Members Say",
          "subtitle": "Real stories from real athletes who transformed their lives at NEOGYM.",
          "reviews": {
            "john": { "name": "John Davis", "role": "Pro Athlete", "text": "NEOGYM completely changed my perspective on fitness. The trainers are top-notch and the equipment is state-of-the-art." },
            "sarah": { "name": "Sarah Miller", "role": "Yoga Enthusiast", "text": "The atmosphere here is incredible! I love the group classes and how supportive everyone is towards achieving your goals." },
            "mike": { "name": "Mike Robinson", "role": "Marathon Runner", "text": "From nutrition plans to high-intensity training, this gym offers everything I need to prepare for my next marathon." }
          }
        }
      }
    }
  },
  ar: {
    translation: {
      "navbar": {
        "home": "الرئيسية",
        "whyUs": "لماذا نحن",
        "trainers": "المدربون",
        "contact": "تواصل معنا",
        "joinNow": "انضم الآن ▼",
        "login": "تسجيل الدخول",
        "signIn": "إنشاء حساب",
        "dashboard": "لوحة التحكم"

      },
      "hero": {
        "fitness": "اللياقة",
        "training": "التدريب",
        "title": "نيوجيم",
        "desc": "لوريم إيبسوم هو ببساطة نص شكلي يستخدم في صناعة الطباعة والتنضيد. كان لوريم إيبسوم هو النص الوهمي القياسي في الصناعة منذ القرن الخامس عشر الميلادي عندما أخذت طابعة غير معروفة لوحًا من النوع وتدافعت عليه لعمل كتاب نموذج كتابة.",
        "contactUs": "تواصل معنا"
      },
      "whyChooseUs": {
        "title": "لماذا تختارنا",
        "equipment": "معدات عالية الجودة",
        "nutrition": "التغذية",
        "dietPlan": "خطة نظام غذائي صحي",
        "sportTraining": "تدريب رياضي",
        "genericDesc": "التمارين الرياضية هي مفتاح الصحة الجيدة والنشاط الدائم.",
        "eliteEquipment": "معدات النخبة",
        "eliteEquipmentDesc": "أحدث الآلات المصممة لتحقيق أقصى قدر من الأداء.",
        "smartNutrition": "تغذية ذكية",
        "smartNutritionDesc": "خطط وجبات قائمة على العلم مصممة خصيصاً لجسمك.",
        "customDiet": "نظام غذائي مخصص",
        "customDietDesc": "برامج مستدامة تحقق نتائج حقيقية.",
        "proTraining": "تدريب احترافي",
        "proTrainingDesc": "تدرب مع الخبراء لتصل إلى أداء النخبة.",
        "ultraHeaderDesc": "تجاوز الحدود. كن لا يتوقف."
      },
      "healthySection": {
        "title": "عقل سليم، جسم سليم",
        "desc": "الرياضة هي وسيلة لتحسين نمط الحياة، وليست مجرد وسيلة لفقدان الوزن. نحن هنا لمساعدتك في الحصول على جسم أحلامك وصحة أفضل في نفس الوقت.",
        "readMore": "اقرأ المزيد"
      },
      "pricing": {
        "title": "💪 خطط العضوية",
        "subtitle": "اختر الخطة التي تناسب أهدافك الرياضية",
        "popular": "الأكثر طلباً",
        "joinNow": "انضم الآن",
        "plans": {
          "basic": {
            "name": "الخطة الأساسية",
            "price": "$20",
            "features": ["دخول الجيم", "خزانة ملابس", "جلسة تدريب واحدة"]
          },
          "pro": {
            "name": "الخطة الاحترافية",
            "price": "$40",
            "features": ["دخول شامل للجيم", "مدرب شخصي", "حصص جماعية", "خطة تغذية"]
          },
          "vip": {
            "name": "خطة كبار الشخصيات",
            "price": "$70",
            "features": ["كل ميزات المحترفين", "تدريب خاص", "سبا وساونا", "دعم أولوية"]
          }
        }
      },
      "trainers": {
        "title": "مدربو صالة الألعاب الرياضية لدينا",
        "viewProfile": "عرض الملف الشخصي",
        "hideProfile": "إخفاء الملف الشخصي",
        "list": {
          "smirth": {
            "name": "سميرث جون",
            "level": "مدرب أول",
            "details": "8+ سنوات خبرة في برامج القوة والكارديو.",
            "profile": "سميرث متخصص في خطط رفع الأثقال المخصصة وساعد أكثر من 100 عميل في الوصول لأهدافهم."
          },
          "jean": {
            "name": "جين دو",
            "level": "خبير تغذية",
            "details": "يركز على تخطيط الوجبات والصحة الأيضية.",
            "profile": "جين توفر خطط نظام غذائي مخصص ومحاضرات حول العافية."
          },
          "alex": {
            "name": "أليكس دين",
            "level": "مدرب رئيسي",
            "details": "مدرب شامل متخصص في الملاكمة والـ HIIT.",
            "profile": "أليكس يدير حصصنا عالية الكثافة ويشرف على المدربين المبتدئين."
          }
        }
      },
      "contact": {
        "header": "انضم للنخبة",
        "subtitle": "هل أنت مستعد لتغيير حياتك؟",
        "stronger": "كن أقوى",
        "transformation": "تحولك يبدأ هنا.",
        "placeholders": {
          "name": "الاسم الكامل",
          "email": "البريد الإلكتروني",
          "phone": "رقم الهاتف",
          "membership": "اختر العضوية",
          "basic": "أساسية (شهر واحد)",
          "pro": "احترافية (6 أشهر)",
          "elite": "النخبة (سنة كاملة)",
          "goal": "هدفك الرياضي (مثلاً فقدان الوزن)",
          "message": "أخبرنا المزيد عن نفسك..."
        },
        "button": "ابدأ رحلتك الآن"
      },
      "auth": {
        "login": "تسجيل الدخول",
        "signUp": "إنشاء حساب",
        "email": "أدخل بريدك الإلكتروني",
        "password": "أدخل كلمة المرور",
        "name": "أدخل اسمك الكامل",
        "confirmPassword": "تأكيد كلمة المرور",
        "noAccount": "ليس لديك حساب؟",
        "hasAccount": "لديك حساب بالفعل؟"
      },
      "footer": {
        "desc": "مركز لياقة بدنية متميز يركز على النتائج والرفاهية.",
        "quickLinks": "روابط سريعة",
        "contact": "تواصل",
        "follow": "تابعنا",
        "rights": "جميع الحقوق محفوظة",
        "design": "تصميم بواسطة",
        "address": "شارع اللياقة 123، المدينة",
        "phone": "الهاتف: 01050204024",
        "email": "البريد: gsocial74@gmail.com"
      },
      "nutrition": {
        "title": "غذِ وحشك الداخلي",
        "subtitle": "قم ببناء مجموعة التغذية الخاصة بك وسيطر على أهدافك.",
        "items": {
          "whey": { "name": "واي بروتين", "desc": "تركيبة عالية الجودة لاستشفاء العضلات." },
          "mass": { "name": "ماس جينر", "desc": "سعرات حرارية جادة. نمو جاد." },
          "fat": { "name": "حارق دهون", "desc": "قص. تمزيق. تحديد." }
        },
        "cart": "عربتك",
        "total": "المجموع",
        "checkout": "إتمام الدفع الآن"
      },
      "smartNutrition": {
        "hero": {
          "title": "تغذية ذكية",
          "subtitle": "خطط وجبات قائمة على العلم مصممة خصيصاً لجسمك."
        },
        "plans": {
          "title": "🔥 خطط التغذية",
          "weightLoss": { "title": "خطة فقدان الوزن", "desc": "احرق الدهون بوجبات ذكية" },
          "muscleGain": { "title": "خطة بناء العضلات", "desc": "ابني العضلات بسرعة" },
          "healthyLife": { "title": "نمط حياة صحي", "desc": "تغذية يومية متوازنة" }
        },
        "supplements": {
          "title": "💊 المكملات الغذائية",
          "whey": { "title": "واي بروتين", "desc": "عزز استشفاء العضلات" },
          "omega3": { "title": "أوميجا 3", "desc": "دعم للقلب والدماغ" },
          "multi": { "title": "فيتامينات متعددة", "desc": "دعم صحي يومي" },
          "creatine": { "title": "كرياتين مونوهايدريت", "desc": "زيادة القوة والأداء" },
          "bcaa": { "title": "أحماض أمينية BCAA", "desc": "طاقة واستشفاء سريع" },
          "pre": { "title": "مكمل ما قبل التمرين", "desc": "طاقة وتركيز انفجاري" }
        },
        "cta": {
          "title": "ابدأ رحلتك اليوم 🚀",
          "button": "ابدأ الآن"
        },
        "buttons": {
          "subscribe": "اشترك الآن",
          "addCart": "أضف إلى السلة"
        },
        "testimonials": {
          "title": "ماذا يقول أعضاؤنا",
          "subtitle": "قصص حقيقية من رياضيين حقيقيين غيروا حياتهم في نيوجيم.",
          "reviews": {
            "john": { "name": "جون ديفيس", "role": "رياضي محترف", "text": "غيرت نيوجيم نظرتي للياقة البدنية بالكامل. المدربون من الدرجة الأولى والمعدات هي الأحدث من نوعها." },
            "sarah": { "name": "سارة ميلر", "role": "عاشقة لليوجا", "text": "الجو هنا لا يصدق! أحب الحصص الجماعية ومدى دعم الجميع لك لتحقيق أهدافك الخاصة." },
            "mike": { "name": "مايك روبنسون", "role": "عداء ماراثون", "text": "من خطط التغذية إلى التدريب عالي الكثافة، يوفر هذا الجيم كل ما أحتاجه للتحضير للماراثون القادم." }
          }
        }
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", 
    interpolation: {
      escapeValue: false 
    }
  });

i18n.on('languageChanged', (lng) => {
  document.documentElement.lang = lng;
  document.documentElement.dir = i18n.dir();
});

export default i18n;
