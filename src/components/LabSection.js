import React, { useState } from 'react';
import { useAppointments } from '../../context/AppointmentContext';

const LabSection = () => {
  const { uploadLabResults } = useAppointments();
  const [fileName, setFileName] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleFileUpload = () => {
    if (fileName) {
      uploadLabResults(fileName);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
      setFileName('');
    }
  };

  return (
    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg card-shadow p-6 mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
        <span>🧬</span> Espace Laboratoire
      </h2>
      <div className="bg-white rounded-lg p-6">
        <p className="text-gray-600 mb-4">Uploadez les résultats médicaux du patient (PDF)</p>
        <div className="flex gap-3 items-end">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nom du fichier PDF
            </label>
            <input
              type="text"
              value={fileName}
              onChange={(e) => setFileName(e.target.value)}
              placeholder="ex: resultats_analyses_2024.pdf"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <button
            onClick={handleFileUpload}
            className="btn-primary flex items-center gap-2"
          >
            <span>📤</span> Envoyer au patient
          </button>
        </div>
        {showSuccess && (
          <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-lg flex items-center gap-2">
            <span>✅</span>
            Fichier envoyé avec succès au patient via WhatsApp!
          </div>
        )}
      </div>
    </div>
  );
};

export default LabSection;