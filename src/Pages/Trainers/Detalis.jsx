/* =====================================================
   FILE 1:  src/pages/Trainers/Detalis.jsx
   ===================================================== */

import React from 'react';
import { useTranslation } from 'react-i18next';
import TrainerCard from '../../components/TrainerCard';


function Detalis() {
  const { t } = useTranslation();

  const trainers = [
    {
      name:    t('trainers.list.smirth.name'),
      img:     'images/t1.jpg',
      level:   t('trainers.list.smirth.level'),
      details: t('trainers.list.smirth.details'),
      certs:   ['NASM Certified', 'CPR / First Aid'],
      profile: t('trainers.list.smirth.profile'),
    },
    {
      name:    t('trainers.list.jean.name'),
      img:     'images/t2.jpg',
      level:   t('trainers.list.jean.level'),
      details: t('trainers.list.jean.details'),
      certs:   ['Precision Nutrition L2'],
      profile: t('trainers.list.jean.profile'),
    },
    {
      name:    t('trainers.list.alex.name'),
      img:     'images/t3.jpg',
      level:   t('trainers.list.alex.level'),
      details: t('trainers.list.alex.details'),
      certs:   ['CrossFit Level 2', 'Boxing Coach'],
      profile: t('trainers.list.alex.profile'),
    },
  ];

  return (
    <div className="sub_page">
      <section className="trainer_section layout_padding">
        <div className="container">
          <h2 className="section-title">{t('trainers.title')}</h2>
          <div className="trainers-grid">
            {trainers.map((trainer, i) => (
              <TrainerCard key={i} trainer={trainer} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Detalis;



