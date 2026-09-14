import React from 'react';
import { useAppointments } from '../../context/AppointmentContext';

const DoctorSection = () => {
  const { appointments, callNextPatient } = useAppointments();
  const inProgressPatient = appointments.find(apt => apt.status === 'in-progress');
  const nextWaiting = appointments.find(apt => apt.status === 'waiting');

  return (
    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg card-shadow p-6 mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
        <span>👨‍⚕️</span> Espace Médecin
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg p-6 border-2 border-blue-200">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Patient en Consultation</h3>
          {inProgressPatient ? (
            <div className="space-y-2">
              <p className="text-2xl font-bold text-blue-600">{inProgressPatient.patientName}</p>
              <p className="text-gray-600">Heure du RDV: <span className="font-semibold">{inProgressPatient.appointmentTime}</span></p>
              <p className="text-gray-600">Téléphone: <span className="font-semibold">{inProgressPatient.phone}</span></p>
              <div className="mt-4 p-3 bg-blue-50 rounded-lg text-blue-700 text-sm">
                🔵 En consultation...
              </div>
            </div>
          ) : (
            <div className="text-center py-8 text-gray-500">
              <p className="text-lg">Aucun patient en consultation</p>
              <p className="text-sm mt-2">Appelez le patient suivant pour commencer</p>
            </div>
          )}
        </div>

        <div className="bg-white rounded-lg p-6 border-2 border-orange-200">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Patient Suivant</h3>
          {nextWaiting ? (
            <div className="space-y-2">
              <p className="text-2xl font-bold text-orange-600">{nextWaiting.patientName}</p>
              <p className="text-gray-600">Heure du RDV: <span className="font-semibold">{nextWaiting.appointmentTime}</span></p>
              <p className="text-gray-600">Téléphone: <span className="font-semibold">{nextWaiting.phone}</span></p>
              <button
                onClick={callNextPatient}
                className="mt-4 btn-primary w-full flex items-center justify-center gap-2"
              >
                <span>📞</span> Appeler ce patient
              </button>
            </div>
          ) : (
            <div className="text-center py-8 text-gray-500">
              <p className="text-lg">Aucun patient en attente</p>
              <p className="text-sm mt-2">Tous les patients ont été traités! 🎉</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DoctorSection;