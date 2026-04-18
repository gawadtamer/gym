import React from 'react';
import { useTranslation } from 'react-i18next';
import './Testimonials.css';

export default function Testimonials() {
  const { t } = useTranslation();

  const reviews = [
    {
      id: 'john',
      rating: 5,
      image: 'images/t1.jpg' // Use placeholder or existing image paths
    },
    {
      id: 'sarah',
      rating: 5,
      image: 'images/t2.jpg'
    },
    {
      id: 'mike',
      rating: 5,
      image: 'images/t3.jpg'
    }
  ];

  return (
    <section className="testimonials-section layout_padding">
      <div className="container">
        <div className="heading_container heading_center">
          <h2>{t('testimonials.title')}</h2>
          <p className="testimonials-subtitle">{t('testimonials.subtitle')}</p>
        </div>
        
        <div className="testimonials-grid">
          {reviews.map((review) => (
            <div key={review.id} className="testimonial-card">
              <div className="testimonial-header">
                <div className="testimonial-avatar">
                   {/* Fallback to initials if images 404 */}
                  <img src={review.image} alt={t(`testimonials.reviews.${review.id}.name`)} onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `<span>${t(`testimonials.reviews.${review.id}.name`)[0]}</span>`;
                  }} />
                </div>
                <div className="testimonial-info">
                  <h4>{t(`testimonials.reviews.${review.id}.name`)}</h4>
                  <span className="testimonial-role">{t(`testimonials.reviews.${review.id}.role`)}</span>
                </div>
              </div>
              <div className="testimonial-rating">
                {'★'.repeat(review.rating)}
              </div>
              <p className="testimonial-text">"{t(`testimonials.reviews.${review.id}.text`)}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
