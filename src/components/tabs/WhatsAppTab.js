import React, { useState } from 'react';
import { useAppointments } from '../../context/AppointmentContext';

const WhatsAppTab = () => {
  const {
    chatMessages,
    addChatMessage,
    simulatePatientArrival,
    simulateLateAlert,
    simulateQueueUpdate,
    simulateAutoCancel
  } = useAppointments();

  const [inputMessage, setInputMessage] = useState('');
  const [userRole, setUserRole] = useState('patient'); // patient or clinic

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      addChatMessage('sent', inputMessage);
      setInputMessage('');
      // Simuler une réponse après 1 seconde
      setTimeout(() => {
        addChatMessage('received', 'Message reçu! 👋');
      }, 1000);
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-white rounded-lg card-shadow overflow-hidden">
        <div className="bg-gradient-to-r from-green-400 to-green-600 text-white p-6 flex items-center gap-3">
          <span className="text-4xl">💬</span>
          <div>
            <h1 className="text-3xl font-bold">Simulateur WhatsApp</h1>
            <p className="text-green-100">Testez les scénarios de communication automatique</p>
          </div>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Chatbox */}
            <div className="border-2 border-gray-200 rounded-lg overflow-hidden flex flex-col h-96 lg:h-auto lg:row-span-3">
              <div className="bg-gray-50 p-4 border-b border-gray-200 flex items-center gap-3">
                <span className="text-2xl">📱</span>
                <div>
                  <p className="font-bold text-gray-800">SamaDocteur Bot</p>
                  <p className="text-xs text-gray-500">Actuellement connecté</p>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-4 bg-gradient-to-b from-blue-50 to-white space-y-3">
                {chatMessages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${
                      msg.type === 'sent' ? 'justify-end' : 'justify-start'
                    } animate-slideIn`}
                  >
                    <div
                      className={`max-w-xs px-4 py-2 rounded-lg ${
                        msg.type === 'sent'
                          ? 'bg-blue-500 text-white rounded-br-none'
                          : 'bg-gray-300 text-gray-800 rounded-bl-none'
                      }`}
                    >
                      <p className="text-sm">{msg.text}</p>
                      <p
                        className={`text-xs mt-1 ${
                          msg.type === 'sent' ? 'text-blue-100' : 'text-gray-600'
                        }`}
                      >
                        {msg.timestamp.toLocaleTimeString('fr-FR', {
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 p-3 bg-white flex gap-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Écrivez un message..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  onClick={handleSendMessage}
                  className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition"
                >
                  📤
                </button>
              </div>
            </div>

            {/* Scenario Buttons */}
            <div className="space-y-3">
              <h3 className="font-bold text-lg text-gray-800 mb-4">📋 Scénarios de Test</h3>

              <button
                onClick={simulatePatientArrival}
                className="w-full btn-primary text-left p-4 rounded-lg hover:shadow-lg transition flex items-start gap-3"
              >
                <span className="text-2xl">✅</span>
                <div>
                  <p className="font-bold">Arrivée Patient</p>
                  <p className="text-sm text-purple-200">Simule l'arrivée du patient à l'accueil</p>
                </div>
              </button>

              <button
                onClick={simulateLateAlert}
                className="w-full btn-warning text-left p-4 rounded-lg hover:shadow-lg transition flex items-start gap-3"
              >
                <span className="text-2xl">⚠️</span>
                <div>
                  <p className="font-bold">Alerte Anti-Retard</p>
                  <p className="text-sm text-orange-200">Rappel 15 min avant le RDV</p>
                </div>
              </button>

              <button
                onClick={simulateQueueUpdate}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white text-left p-4 rounded-lg transition flex items-start gap-3"
              >
                <span className="text-2xl">📋</span>
                <div>
                  <p className="font-bold">Suivi de File</p>
                  <p className="text-sm text-indigo-200">Position dans la file d'attente</p>
                </div>
              </button>

              <button
                onClick={simulateAutoCancel}
                className="w-full btn-danger text-left p-4 rounded-lg hover:shadow-lg transition flex items-start gap-3"
              >
                <span className="text-2xl">❌</span>
                <div>
                  <p className="font-bold">Annulation Auto</p>
                  <p className="text-sm text-red-200">Reporté après 15 min de retard</p>
                </div>
              </button>
            </div>
          </div>

          {/* Info Box */}
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
            <p className="text-sm text-gray-700">
              <span className="font-bold">💡 Conseil:</span> Utilisez les boutons ci-dessus pour simuler différents scénarios de communication WhatsApp. Les messages apparaîtront automatiquement dans le chat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppTab;