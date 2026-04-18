import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDashboardData } from './useDashboardData';
import './dashboard.css';

// Chart.js integrations
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import Navbar from '../../Home/Nabar';
import Footer from '../../Home/Footer';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function DashboardPage() {
  const { t } = useTranslation();
  const { data, loading, error, isRefreshing, refresh } = useDashboardData();

  if (loading) return <DashboardSkeleton />;

  if (error) {
    return (
      <div className="dashboard-layout" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div className="dashboard-error">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
          {error}
          <button onClick={refresh} className="dashboard-btn-refresh" style={{ marginLeft: '1rem' }}>
            ↻
          </button>
        </div>
      </div>
    );
  }

  const { services, stats, topMembers, activity, goals, chartData } = data;

  // ChartJS config
  const chartOptions = {
    responsive: true,
    animation: {
      duration: 900,
      easing: 'easeOutQuart'
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: { color: 'rgba(255, 255, 255, 0.05)' },
        ticks: { color: 'rgba(255, 255, 255, 0.5)' }
      },
      x: {
        grid: { display: false },
        ticks: { color: 'rgba(255, 255, 255, 0.5)' }
      }
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: '#1a1a1a',
        titleColor: '#fff',
        bodyColor: '#ff1e56',
        borderColor: 'rgba(255, 255, 255, 0.1)',
        borderWidth: 1,
        padding: 10
      }
    }
  };

  const chartDataConfig = {
    labels: chartData.map(d => d.day),
    datasets: [
      {
        label: 'Bookings',
        data: chartData.map(d => d.count),
        backgroundColor: 'rgba(255, 30, 86, 0.15)',
        borderColor: '#ff1e56',
        borderWidth: 1,
        borderRadius: 4,
        hoverBackgroundColor: 'rgba(255, 30, 86, 0.3)'
      }
    ]
  };

  const statCards = [
    { label: 'Active Members', key: 'totalMembers', color: 'var(--primary-accent)' },
    { label: 'Monthly Revenue', key: 'monthlyRevenue', color: 'var(--success)' },
    { label: 'Sessions Today', key: 'sessionsToday', color: 'var(--warning)' },
    { label: 'Trainer Rating', key: 'trainerRating', color: 'var(--info-purple)' }
  ];

  return (
    <>
      <Navbar />
      <div className="dashboard-layout">
      {/* Top Navbar */}
      <nav className="dashboard-nav">
        <div className="dashboard-logo">
          NEO<span className="accent">GYM</span>
          <span className="label">Dashboard</span>
        </div>
        <div className="dashboard-nav-actions">
          <div className="dashboard-live-pill">
            <span className="dashboard-live-dot"></span> Live API
          </div>
          <button 
            onClick={refresh} 
            className="dashboard-btn-refresh" 
            disabled={isRefreshing}
            title="Manual Refresh"
          >
            <svg 
              className={isRefreshing ? 'spinning' : ''} 
              width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            >
              <polyline points="23 4 23 10 17 10"></polyline>
              <polyline points="1 20 1 14 7 14"></polyline>
              <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Main Container */}
      <div className="dashboard-container">
        
        {/* KPI Grid */}
        <div className="dashboard-grid-kpi">
          {statCards.map((card, index) => {
            const stat = stats[card.key];
            return (
              <div key={card.key} className="dashboard-card" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="dashboard-card-topbar" style={{ background: card.color }}></div>
                <div className="dashboard-kpi-title">{card.label}</div>
                <div className="dashboard-kpi-value">{stat.value}</div>
                <div className={`dashboard-kpi-delta ${stat.up ? 'up' : 'down'}`}>
                  {stat.up ? '↑' : '↓'} {stat.delta}
                </div>
              </div>
            );
          })}
        </div>

        {/* Mid Section */}
        <div className="dashboard-grid-main">
          
          {/* Left Column: Chart & Services */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="dashboard-card" style={{ animationDelay: '0.4s' }}>
              <div className="dashboard-section-title">
                Weekly Bookings Overview
              </div>
              <div style={{ height: '300px' }}>
                <Bar options={chartOptions} data={chartDataConfig} />
              </div>
            </div>

            <div className="dashboard-card" style={{ animationDelay: '0.5s' }}>
              <div className="dashboard-section-title">
                Gym Services & Classes
              </div>
              {services.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-muted)' }}>
                  No services found
                </div>
              ) : (
                <div className="dashboard-services-list">
                  {services.map((svc, i) => (
                    <div key={svc.id} className="dashboard-service-row" style={{ animationDelay: `${0.5 + i * 0.1}s` }}>
                      <div className="dashboard-service-info">
                        <div className="dashboard-service-icon" style={{ background: `${svc.color}15`, color: svc.color }}>
                          ★
                        </div>
                        <div>
                          <div className="dashboard-service-name">{svc.name}</div>
                          <div className="dashboard-service-sub">{svc.type} · {svc.duration}</div>
                        </div>
                      </div>
                      <div className="dashboard-service-meta">
                        <div className="dashboard-service-price">{svc.price}</div>
                        {svc.label && (
                          <span className={`dashboard-badge ${svc.label.toLowerCase()}`}>
                            {svc.label}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Top Members, Actions, Goals */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            
            {/* Top Members */}
            <div className="dashboard-card" style={{ animationDelay: '0.6s' }}>
              <div className="dashboard-section-title">Top Members</div>
              <div>
                {topMembers.map((member, i) => (
                  <div key={member.id} className="dashboard-member-row" style={{ animationDelay: `${0.6 + i * 0.1}s` }}>
                    <div className="dashboard-member-info">
                      <div className="dashboard-avatar" style={{ background: `${member.color}20`, color: member.color, border: `1px solid ${member.color}40` }}>
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <div className="dashboard-member-name">{member.name}</div>
                        <div className="dashboard-member-plan">{member.plan}</div>
                      </div>
                    </div>
                    <div className="dashboard-rating">
                      {'★'.repeat(member.rating)}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="dashboard-card" style={{ animationDelay: '0.7s' }}>
              <div className="dashboard-section-title">Recent Activity</div>
              <div>
                {activity.map((act, i) => (
                  <div key={act.id} className="dashboard-activity-item" style={{ animationDelay: `${0.7 + i * 0.1}s` }}>
                    <div className="dashboard-activity-dot-col">
                      <div className="dashboard-activity-dot" style={{ color: act.color }}></div>
                      <div className="dashboard-activity-line"></div>
                    </div>
                    <div className="dashboard-activity-content">
                      <div className="dashboard-activity-action">
                        <strong>{act.member}</strong> {act.action}
                      </div>
                      <div className="dashboard-activity-time">{act.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Monthly Goals */}
            <div className="dashboard-card" style={{ animationDelay: '0.8s' }}>
              <div className="dashboard-section-title">Monthly Goals</div>
              <div>
                {goals.map((goal, i) => (
                  <div key={goal.id} className="dashboard-goal-item">
                    <div className="dashboard-goal-header">
                      <span>{goal.name}</span>
                      <span>{goal.percent}%</span>
                    </div>
                    <div className="dashboard-progress-bg">
                      <div 
                        className="dashboard-progress-fill" 
                        style={{ 
                          width: `${isRefreshing ? 0 : goal.percent}%`, 
                          background: goal.color,
                          color: goal.color 
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </>
  );
}

// Skeleton loader component
function DashboardSkeleton() {
  return (
    <>
      <Navbar />
      <div className="dashboard-layout">
      <nav className="dashboard-nav">
        <div className="dashboard-logo">NEOGYM</div>
      </nav>
      <div className="dashboard-container">
        <div className="dashboard-grid-kpi">
          {[1,2,3,4].map(i => (
            <div key={i} className="dashboard-card" style={{ height: '140px' }}>
               <div className="dashboard-skeleton" style={{ width: '40%', height: '16px', marginBottom: '20px' }}></div>
               <div className="dashboard-skeleton" style={{ width: '60%', height: '40px' }}></div>
            </div>
          ))}
        </div>
        <div className="dashboard-grid-main">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="dashboard-card" style={{ height: '380px' }}>
              <div className="dashboard-skeleton" style={{ width: '100%', height: '100%' }}></div>
            </div>
            <div className="dashboard-card" style={{ height: '400px' }}>
              <div className="dashboard-skeleton" style={{ width: '100%', height: '100%' }}></div>
            </div>
          </div>
          <div className="dashboard-card" style={{ height: '800px' }}>
            <div className="dashboard-skeleton" style={{ width: '100%', height: '100%' }}></div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}
