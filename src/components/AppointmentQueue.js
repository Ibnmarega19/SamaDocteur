import React from 'react';
import { useAppointments } from '../../context/AppointmentContext';

const AppointmentQueue = () => {
  const {
    appointments,
    checkInPatient,
    markLate,
    cancelAppointment,
    callNextPatient
  } = useAppointments();

  const getStatusBadge = (status) => {
    const statusMap = {
      'present': { bg: 'bg-green-100', text: 'text-green-700', label: '✅ Présent à l\'heure' },
      'late': { bg: 'bg-orange-100', text: 'text-orange-700', label: '⚠️ En retard' },
      'absent': { bg: 'bg-red-100', text: 'text-red-700', label: '❌ Absent' },
      'in-progress': { bg: 'bg-blue-100', text: 'text-blue-700', label: '🔵 En consultation' },
      'waiting': { bg: 'bg-gray-100', text: 'text-gray-700', label: '⏳ En attente' }
    };
    return statusMap[status] || statusMap['waiting'];
  };

  return (
    <div className="bg-white rounded-lg card-shadow p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          <span>📋</span> File d'Attente du Jour
        </h2>
        <button
          onClick={callNextPatient}
          className="btn-primary flex items-center gap-2"
        >
          <span>📞</span> Appeler le patient suivant
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b-2 border-gray-200 text-left">
              <th className="pb-3 font-bold text-gray-700">Patient</th>
              <th className="pb-3 font-bold text-gray-700">Heure RDV</th>
              <th className="pb-3 font-bold text-gray-700">Médecin</th>
              <th className="pb-3 font-bold text-gray-700">Statut</th>
              <th className="pb-3 font-bold text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((apt) => {
              const statusBadge = getStatusBadge(apt.status);
              return (
                <tr key={apt.id} className="border-b border-gray-100 hover:bg-gray-50 transition py-4">
                  <td className="py-4 font-medium text-gray-800">
                    <div className="flex items-center gap-2">
                      <span>👤</span>
                      {apt.patientName}
                    </div>
                  </td>
                  <td className="py-4 text-gray-600">🕐 {apt.appointmentTime}</td>
                  <td className="py-4 text-gray-600">👨‍⚕️ {apt.doctor}</td>
                  <td className="py-4">
                    <span className={`status-badge ${statusBadge.bg} ${statusBadge.text}`}>
                      {statusBadge.label}
                    </span>
                  </td>
                  <td className="py-4">
                    <div className="flex gap-2 flex-wrap">
                      {apt.status === 'waiting' && (
                        <>
                          <button
                            onClick={() => checkInPatient(apt.id)}
                            className="btn-primary text-sm py-1 px-3"
                            title="Valider l'arrivée du patient"
                          >
                            ✅ Check-in
                          </button>
                          <button
                            onClick={() => markLate(apt.id)}
                            className="btn-warning text-sm py-1 px-3"
                            title="Marquer le patient en retard"
                          >
                            ⚠️ Retard
                          </button>
                        </>
                      )}
                      {apt.status !== 'absent' && apt.status !== 'in-progress' && (
                        <button
                          onClick={() => cancelAppointment(apt.id)}
                          className="btn-danger text-sm py-1 px-3"
                          title="Annuler le rendez-vous"
                        >
                          ❌ Annuler
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AppointmentQueue;