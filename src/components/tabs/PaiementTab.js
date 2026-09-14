import React, { useState } from 'react';
import { useAppointments } from '../../context/AppointmentContext';

const PaiementTab = () => {
  const { selectedPayment, setSelectedPayment, paymentStatus, setPaymentStatus } = useAppointments();
  const [showQRModal, setShowQRModal] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const paymentMethods = [
    {
      id: 'wave',
      name: 'Wave',
      icon: '📱',
      description: 'Paiement mobile sécurisé',
      color: 'from-blue-400 to-blue-600'
    },
    {
      id: 'orange',
      name: 'Orange Money',
      icon: '🏠',
      description: 'Service de paiement Orange',
      color: 'from-orange-400 to-orange-600'
    }
  ];

  const handlePayment = (methodId) => {
    setSelectedPayment(methodId);
    setShowQRModal(true);
  };

  const simulatePayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setPaymentStatus('success');
      setIsProcessing(false);
      setTimeout(() => {
        setShowQRModal(false);
        setSelectedPayment(null);
        setPaymentStatus(null);
      }, 2000);
    }, 3000);
  };

  const paymentMethod = paymentMethods.find(m => m.id === selectedPayment);

  return (
    <div className="max-w-6xl mx-auto">
      {/* Clinic Profile Section */}
      <div className="bg-white rounded-lg card-shadow p-8 mb-8">
        <div className="flex items-center gap-6 mb-8">
          <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full flex items-center justify-center text-4xl">
            🏥
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Clinique Médicale SamaDocteur</h1>
            <p className="text-gray-600 mt-2">Dakar, Sénégal</p>
            <p className="text-sm text-gray-500 mt-1">📞 +221 33 XXX XXXX | ✉️ contact@samadocteur.sn</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
            <p className="text-gray-600 text-sm font-medium">Abonnement Mensuel</p>
            <p className="text-3xl font-bold text-blue-600 mt-2">49,999 FCFA</p>
            <p className="text-xs text-gray-500 mt-2">Accès complet à toutes les fonctionnalités</p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg border border-green-200">
            <p className="text-gray-600 text-sm font-medium">Patients Actifs</p>
            <p className="text-3xl font-bold text-green-600 mt-2">125</p>
            <p className="text-xs text-gray-500 mt-2">Gérés ce mois-ci</p>
          </div>
          <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
            <p className="text-gray-600 text-sm font-medium">Transactions</p>
            <p className="text-3xl font-bold text-orange-600 mt-2">18</p>
            <p className="text-xs text-gray-500 mt-2">Paiements effectués</p>
          </div>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="bg-white rounded-lg card-shadow p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
          <span>💳</span> Méthodes de Paiement Locales
        </h2>
        <p className="text-gray-600 mb-6">Sélectionnez votre méthode de paiement préférée pour l'abonnement ou la réservation :</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {paymentMethods.map((method) => (
            <div
              key={method.id}
              onClick={() => handlePayment(method.id)}
              className={`payment-option cursor-pointer ${
                selectedPayment === method.id ? 'selected' : ''
              }`}
            >
              <div className="text-5xl mb-3">{method.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{method.name}</h3>
              <p className="text-gray-600 text-sm mb-4">{method.description}</p>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePayment(method.id);
                }}
                className={`w-full py-2 px-4 rounded-lg font-semibold text-white transition ${
                  selectedPayment === method.id
                    ? `bg-gradient-to-r ${method.color}`
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              >
                Payer avec {method.name}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Subscription Plans */}
      <div className="bg-white rounded-lg card-shadow p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
          <span>📦</span> Plans d'Abonnement
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: 'Starter',
              price: '24,999',
              features: ['Jusqu\'à 50 patients', 'Tableau de bord basique', 'Support email']
            },
            {
              name: 'Professional',
              price: '49,999',
              features: ['Patients illimités', 'Toutes les fonctionnalités', 'Chat WhatsApp', 'Support prioritaire'],
              popular: true
            },
            {
              name: 'Enterprise',
              price: 'Sur devis',
              features: ['Solution personnalisée', 'Multi-cliniques', 'API personnalisée', 'Support 24/7']
            }
          ].map((plan, idx) => (
            <div
              key={idx}
              className={`border-2 rounded-lg p-6 ${
                plan.popular
                  ? 'border-purple-600 bg-purple-50 shadow-lg relative'
                  : 'border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                    ⭐ Populaire
                  </span>
                </div>
              )}
              <h3 className="text-xl font-bold text-gray-800 mb-2">{plan.name}</h3>
              <p className="text-3xl font-bold text-purple-600 mb-4">
                {plan.price} <span className="text-sm text-gray-600">FCFA/mois</span>
              </p>
              <ul className="space-y-2 mb-6">
                {plan.features.map((feature, fi) => (
                  <li key={fi} className="flex items-center gap-2 text-gray-700">
                    <span>✅</span> {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-2 px-4 rounded-lg font-semibold transition ${
                  plan.popular
                    ? 'btn-primary'
                    : 'btn-secondary'
                }`}
              >
                Choisir ce plan
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* QR Code Modal */}
      {showQRModal && paymentMethod && (
        <div className="modal">
          <div className="modal-content">
            {!isProcessing && paymentStatus !== 'success' ? (
              <>
                <div className="text-center">
                  <div className="text-5xl mb-4">{paymentMethod.icon}</div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">Paiement {paymentMethod.name}</h2>
                  <p className="text-gray-600 mb-6">Montant: <span className="font-bold text-lg">49,999 FCFA</span></p>

                  <div className="bg-gray-100 p-6 rounded-lg mb-6">
                    <p className="text-sm text-gray-600 mb-4">Scannez ce code QR avec votre téléphone :</p>
                    <div className="qr-code-placeholder">
                      <span className="text-white text-center">
                        <div className="text-4xl mb-2">📱</div>
                        QR Code
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 mb-6">
                    Validez le paiement sur votre appareil mobile
                  </p>

                  <button
                    onClick={simulatePayment}
                    className="btn-primary w-full mb-2"
                  >
                    ✅ Valider le paiement
                  </button>
                  <button
                    onClick={() => setShowQRModal(false)}
                    className="btn-secondary w-full"
                  >
                    ❌ Annuler
                  </button>
                </div>
              </>
            ) : isProcessing ? (
              <div className="text-center">
                <div className="spinner mx-auto"></div>
                <p className="text-lg font-semibold text-gray-700 mt-4">Traitement en cours...</p>
                <p className="text-gray-600 mt-2">Veuillez patienter</p>
              </div>
            ) : paymentStatus === 'success' ? (
              <div className="text-center">
                <div className="text-6xl mb-4 animate-pulse">✅</div>
                <h2 className="text-2xl font-bold text-green-600 mb-2">Paiement Réussi!</h2>
                <p className="text-gray-600 mb-4">
                  Votre abonnement a été activé avec succès.
                </p>
                <div className="bg-green-50 p-4 rounded-lg mb-6">
                  <p className="text-sm text-gray-700">
                    Référence: <span className="font-mono font-bold">TXN-2024-{Math.random().toString(36).substr(2, 9).toUpperCase()}</span>
                  </p>
                </div>
                <button
                  onClick={() => setShowQRModal(false)}
                  className="btn-primary w-full"
                >
                  Fermer
                </button>
              </div>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
};

export default PaiementTab;