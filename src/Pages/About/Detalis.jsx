import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const cardVariants = {
  hidden: { opacity: 0, y: 80 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      ease: "easeOut"
    }
  })
};

function WhySection() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const data = [
    {
      img: "images/u-1.png",
      title: t('whyChooseUs.eliteEquipment'),
      text: t('whyChooseUs.eliteEquipmentDesc'),
      path: "/elite-equipment"
    },
    {
      img: "images/u-4.png",
      title: t('whyChooseUs.smartNutrition'),
      text: t('whyChooseUs.smartNutritionDesc'),
      path: "/smart-nutrition"
    },
    {
      img: "images/u-2.png",
      title: t('whyChooseUs.customDiet'),
      text: t('whyChooseUs.customDietDesc'),
      path: "/customdiet-details"
    },
    {
      img: "images/u-3.png",
      title: t('whyChooseUs.proTraining'),
      text: t('whyChooseUs.proTrainingDesc'),
      path: "/pro-training"
    }
  ];

  return (
    <section className="why-ultra">
      <div className="container">

        <motion.div
          className="ultra-header"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>{t('whyChooseUs.title')}</h2>
          <p>{t('whyChooseUs.ultraHeaderDesc')}</p>
        </motion.div>

        <div className="ultra-grid">
          {data.map((item, i) => (
            <motion.div
              className="ultra-card"
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotateX: 5, rotateY: -5 }}
              onClick={() => navigate(item.path)}
              style={{ cursor: 'pointer' }}
            >
              <div className="ultra-icon">
                <img src={item.img} alt="" />
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </div>


        <section className="nutrition-cart-section">
          <h2 className="nutrition-title">{t('nutrition.title')}</h2>
          <p className="nutrition-subtitle">
            {t('nutrition.subtitle')}
          </p>

          <div className="cart-container">
            <div className="cart-items">
              <div className="cart-item">
                <h3>{t('nutrition.items.whey.name')}</h3>
                <p>{t('nutrition.items.whey.desc')}</p>
                <span>$49</span>
              </div>

              <div className="cart-item">
                <h3>{t('nutrition.items.mass.name')}</h3>
                <p>{t('nutrition.items.mass.desc')}</p>
                <span>$65</span>
              </div>

              <div className="cart-item">
                <h3>{t('nutrition.items.fat.name')}</h3>
                <p>{t('nutrition.items.fat.desc')}</p>
                <span>$39</span>
              </div>
            </div>

            <div className="cart-summary">
              <h3>{t('nutrition.cart')}</h3>
              <p>{t('nutrition.total')}: <strong>$153</strong></p>
              <button className="checkout-btn">{t('nutrition.checkout')}</button>
            </div>
          </div>
        </section>

      </div>
    </section>
  );
}

export default WhySection;
