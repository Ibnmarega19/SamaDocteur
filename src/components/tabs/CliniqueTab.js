import React from 'react';
import Stats from '../Stats';
import AppointmentQueue from '../AppointmentQueue';
import DoctorSection from '../DoctorSection';
import LabSection from '../LabSection';

const CliniqueTab = () => {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-lg card-shadow p-6">
        <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-3 mb-2">
          <span>🏥</span> Tableau de Bord de la Clinique
        </h1>
        <p className="text-gray-600">Vue d'ensemble de la journée et gestion des rendez-vous en temps réel</p>
      </div>

      <Stats />
      <AppointmentQueue />
      <DoctorSection />
      <LabSection />
    </div>
  );
};

export default CliniqueTab;