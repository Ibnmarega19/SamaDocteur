import React from 'react';
import { useAppointments } from '../../context/AppointmentContext';

const Stats = () => {
  const { getQueueStatus } = useAppointments();
  const stats = getQueueStatus();

  const statCards = [
    { label: 'En attente', value: stats.waiting, color: 'bg-blue-100 text-blue-700', icon: '⏳' },
    { label: 'Présents', value: stats.present, color: 'bg-green-100 text-green-700', icon: '✅' },
    { label: 'En retard', value: stats.late, color: 'bg-orange-100 text-orange-700', icon: '⚠️' },
    { label: 'En consultation', value: stats.inProgress, color: 'bg-indigo-100 text-indigo-700', icon: '🔵' },
    { label: 'Absent', value: stats.absent, color: 'bg-red-100 text-red-700', icon: '❌' }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
      {statCards.map((card, idx) => (
        <div key={idx} className={`${card.color} rounded-lg p-6 card-shadow`}>
          <div className="text-3xl mb-2">{card.icon}</div>
          <div className="text-3xl font-bold">{card.value}</div>
          <div className="text-sm font-medium mt-1">{card.label}</div>
        </div>
      ))}
    </div>
  );
};

export default Stats;