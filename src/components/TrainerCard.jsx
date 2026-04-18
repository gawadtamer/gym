import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

function TrainerCard({ trainer }) {
  const { t } = useTranslation();
  const { name, img, level, details, certs = [], profile } = trainer;
  const [showProfile, setShowProfile] = useState(false);

  return (
    <div className="trainer-card">

      {/* Hover color overlay */}
      <div className="trainer-overlay" />

      {/* IMAGE */}
      <div className="trainer-img-wrap">
        <img src={img} alt={name} loading="lazy" />

        {/* Cert badges on top of image */}
        {certs.length > 0 && (
          <div className="trainer-certs">
            {certs.map((c, i) => (
              <span key={i} className="cert-badge">{c}</span>
            ))}
          </div>
        )}
      </div>

      {/* BODY */}
      <div className="trainer-body">
        <h3 className="trainer-name">{name}</h3>
        <p className="trainer-level">{level}</p>
        <hr className="trainer-divider" />
        <p className="trainer-details">{details}</p>
        <button 
          className="trainer-btn" 
          onClick={() => setShowProfile(!showProfile)}
        >
          {showProfile ? t('trainers.hideProfile', 'Hide Profile') : t('trainers.viewProfile', 'View Profile')}
        </button>

        {showProfile && (
          <div className="trainer-profile-info" style={{ marginTop: '20px', textAlign: 'left', animation: 'fadeInUp 0.3s ease both' }}>
            <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: '1.6', background: 'rgba(255,255,255,0.03)', padding: '12px', borderRadius: '8px', border: '0.5px solid rgba(255,255,255,0.05)' }}>
              {profile}
            </p>
          </div>
        )}
      </div>

    </div>
  );
}

export default TrainerCard;
