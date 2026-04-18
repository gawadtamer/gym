import { useState, useEffect, useCallback } from 'react';

const mockServices = [
  { id: 1, name: 'Personal Training', type: '1-on-1', duration: '60 min', price: '$50', label: 'Hot', color: '#ff1e56' },
  { id: 2, name: 'CrossFit Elite', type: 'Group', duration: '45 min', price: '$35', label: 'Active', color: '#22c55e' },
  { id: 3, name: 'Yoga Core', type: 'Group', duration: '60 min', price: '$25', label: '', color: '#a78bfa' },
  { id: 4, name: 'HIIT Blast', type: 'Cardio', duration: '30 min', price: '$20', label: 'New', color: '#38bdf8' },
  { id: 5, name: 'Nutrition Consult', type: 'Diet', duration: '40 min', price: '$45', label: '', color: '#fbbf24' }
];

const mockStats = {
  totalMembers: { value: 1248, delta: '+12%', up: true },
  monthlyRevenue: { value: '$45,210', delta: '+8.5%', up: true },
  sessionsToday: { value: 156, delta: '-2%', up: false },
  trainerRating: { value: '4.9', delta: '+0.1', up: true }
};

const mockTopMembers = [
  { id: 1, name: 'Alex Johnson', plan: 'Elite Annual', rating: 5, color: '#ff1e56' },
  { id: 2, name: 'Sarah Miller', plan: 'Pro Monthly', rating: 5, color: '#a78bfa' },
  { id: 3, name: 'Mike Ross', plan: 'Basic', rating: 4, color: '#38bdf8' }
];

const mockActivity = [
  { id: 1, member: 'Emma W.', action: 'booked Personal Training', time: '2m ago', color: '#38bdf8' },
  { id: 2, member: 'David K.', action: 'upgraded to Elite Plan', time: '15m ago', color: '#22c55e' },
  { id: 3, member: 'John S.', action: 'completed HIIT Blast', time: '1h ago', color: '#ff1e56' },
  { id: 4, member: 'Lisa M.', action: 'renewed Pro Monthly', time: '3h ago', color: '#fbbf24' },
  { id: 5, member: 'Chris F.', action: 'canceled session', time: '5h ago', color: '#a78bfa' }
];

const mockGoals = [
  { id: 1, name: 'New Memberships', percent: 85, color: '#ff1e56' },
  { id: 2, name: 'Trainer Utilization', percent: 62, color: '#38bdf8' },
  { id: 3, name: 'Revenue Target', percent: 90, color: '#22c55e' }
];

const mockChartData = [
  { day: 'Mon', count: 120 },
  { day: 'Tue', count: 150 },
  { day: 'Wed', count: 140 },
  { day: 'Thu', count: 180 },
  { day: 'Fri', count: 200 },
  { day: 'Sat', count: 250 },
  { day: 'Sun', count: 210 }
];

export function useDashboardData() {
  const [data, setData] = useState({
    services: [],
    stats: null,
    topMembers: [],
    activity: [],
    goals: [],
    chartData: []
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Mock API fetcher
  const fetchData = useCallback(async (isManualRefresh = false) => {
    if (isManualRefresh) setIsRefreshing(true);
    else setLoading(true);
    setError(null);

    try {
      // Simulate network request latency
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // In a real app, this would be:
      // const [servicesRes, statsRes, topRes, activityRes, goalsRes, chartRes] = await Promise.all([
      //   fetch('/api/services'), fetch('/api/members/stats'), ...
      // ]);
      
      // Apply slight randomization to simulate live data changing on refresh
      const randomize = (val) => isManualRefresh && typeof val === 'number' ? val + Math.floor(Math.random() * 5 - 2) : val;

      setData({
        services: mockServices,
        stats: {
          ...mockStats,
          sessionsToday: { ...mockStats.sessionsToday, value: randomize(156) }
        },
        topMembers: mockTopMembers,
        activity: mockActivity,
        goals: mockGoals.map(g => ({ ...g, percent: randomize(g.percent) })),
        chartData: mockChartData
      });
    } catch (err) {
      setError('Failed to fetch dashboard data. Please check connection.');
    } finally {
      setLoading(false);
      setIsRefreshing(false);
    }
  }, []);

  useEffect(() => {
    fetchData();

    // Refresh data every 30 seconds automatically
    const interval = setInterval(() => {
      fetchData(true);
    }, 30000);

    return () => clearInterval(interval);
  }, [fetchData]);

  return { data, loading, error, isRefreshing, refresh: () => fetchData(true) };
}
