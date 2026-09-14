import React, { createContext, useContext, useState, useCallback } from 'react';

const AppointmentContext = createContext();

const initialAppointments = [
  {
    id: 1,
    patientName: 'Fatou Diop',
    appointmentTime: '09:00',
    doctor: 'Dr. Sall',
    status: 'present', // present, late, absent, in-progress
    phone: '+221771234567',
    arrivalTime: '08:58'
  },
  {
    id: 2,
    patientName: 'Amadou Diallo',
    appointmentTime: '09:30',
    doctor: 'Dr. Sall',
    status: 'waiting', // waiting
    phone: '+221772345678',
    arrivalTime: null
  },
  {
    id: 3,
    patientName: 'Moussa Ndiaye',
    appointmentTime: '10:00',
    doctor: 'Dr. Ba',
    status: 'waiting',
    phone: '+221773456789',
    arrivalTime: null
  },
  {
    id: 4,
    patientName: 'Aïssatou Ly',
    appointmentTime: '10:30',
    doctor: 'Dr. Sall',
    status: 'waiting',
    phone: '+221774567890',
    arrivalTime: null
  },
  {
    id: 5,
    patientName: 'Cheikh Sarr',
    appointmentTime: '11:00',
    doctor: 'Dr. Ba',
    status: 'waiting',
    phone: '+221775678901',
    arrivalTime: null
  }
];

export const AppointmentProvider = ({ children }) => {
  const [appointments, setAppointments] = useState(initialAppointments);
  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      type: 'received',
      text: 'Bienvenue sur SamaDocteur! 👋 Comment puis-je vous aider?',
      timestamp: new Date()
    }
  ]);
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [paymentStatus, setPaymentStatus] = useState(null);

  // Fonction pour marquer une arrivée
  const checkInPatient = useCallback((appointmentId) => {
    setAppointments(prev =>
      prev.map(apt =>
        apt.id === appointmentId
          ? { ...apt, status: 'present', arrivalTime: new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }) }
          : apt
      )
    );
  }, []);

  // Fonction pour marquer en retard
  const markLate = useCallback((appointmentId) => {
    setAppointments(prev =>
      prev.map(apt =>
        apt.id === appointmentId
          ? { ...apt, status: 'late' }
          : apt
      )
    );
    // Ajouter message WhatsApp automatique
    addChatMessage(
      'received',
      `⚠️ Rappel : Sans enregistrement à l'accueil avant 15 minutes, votre place sera automatiquement réattribuée.`
    );
  }, []);

  // Fonction pour annuler un rendez-vous
  const cancelAppointment = useCallback((appointmentId) => {
    setAppointments(prev =>
      prev.map(apt =>
        apt.id === appointmentId
          ? { ...apt, status: 'absent' }
          : apt
      )
    );
  }, []);

  // Fonction pour appeler le patient suivant
  const callNextPatient = useCallback(() => {
    const waitingPatient = appointments.find(apt => apt.status === 'waiting');
    if (waitingPatient) {
      setAppointments(prev =>
        prev.map(apt =>
          apt.id === waitingPatient.id
            ? { ...apt, status: 'in-progress' }
            : apt
        )
      );
      // Simuler l'envoi WhatsApp
      const position = appointments.filter(apt => apt.status === 'waiting').length;
      addChatMessage(
        'received',
        `🔔 ${waitingPatient.patientName}, vous êtes appelé! Veuillez vous présenter au cabinet du Dr. ${waitingPatient.doctor}.`
      );
    }
  }, [appointments]);

  // Fonction pour obtenir le statut de la file d'attente
  const getQueueStatus = useCallback(() => {
    const waiting = appointments.filter(apt => apt.status === 'waiting').length;
    const present = appointments.filter(apt => apt.status === 'present').length;
    const late = appointments.filter(apt => apt.status === 'late').length;
    const inProgress = appointments.filter(apt => apt.status === 'in-progress').length;
    const absent = appointments.filter(apt => apt.status === 'absent').length;

    return { waiting, present, late, inProgress, absent };
  }, [appointments]);

  // Fonction pour ajouter un message au chat
  const addChatMessage = useCallback((type, text) => {
    setChatMessages(prev => [
      ...prev,
      {
        id: prev.length + 1,
        type,
        text,
        timestamp: new Date()
      }
    ]);
  }, []);

  // Fonction pour simuler l'arrivée du patient
  const simulatePatientArrival = useCallback(() => {
    const waitingPatient = appointments.find(apt => apt.status === 'waiting');
    if (waitingPatient) {
      checkInPatient(waitingPatient.id);
      addChatMessage(
        'sent',
        `Je suis arrivé pour mon rendez-vous de ${waitingPatient.appointmentTime}`
      );
      addChatMessage(
        'received',
        `✅ Merci ${waitingPatient.patientName}! Votre présence est confirmée. Vous êtes le ${getQueueStatus().present} dans la file d'attente.`
      );
    }
  }, [appointments, checkInPatient, getQueueStatus]);

  // Fonction pour simuler l'alerte anti-retard
  const simulateLateAlert = useCallback(() => {
    const waitingPatient = appointments.find(apt => apt.status === 'waiting');
    if (waitingPatient) {
      addChatMessage(
        'received',
        `⚠️ Rappel : Rendez-vous avec le Dr. ${waitingPatient.doctor} à ${waitingPatient.appointmentTime}. Sans enregistrement à l'accueil avant cette heure, votre place sera automatiquement réattribuée.`
      );
    }
  }, [appointments]);

  // Fonction pour simuler le suivi de file
  const simulateQueueUpdate = useCallback(() => {
    const queueStatus = getQueueStatus();
    const nextPosition = queueStatus.waiting + 1;
    addChatMessage(
      'received',
      `📋 Vous êtes le ${nextPosition}ème sur la liste. Passage estimé dans ${nextPosition * 15} minutes.`
    );
  }, [getQueueStatus]);

  // Fonction pour simuler l'annulation automatique
  const simulateAutoCancel = useCallback(() => {
    const latePatient = appointments.find(apt => apt.status === 'late');
    if (latePatient) {
      setAppointments(prev =>
        prev.map(apt =>
          apt.id === latePatient.id
            ? { ...apt, status: 'absent' }
            : apt
        )
      );
      addChatMessage(
        'received',
        `❌ Désolé, votre rendez-vous a été reporté en fin de file d'attente en raison du délai. Veuillez nous contacter pour reprogrammer.`
      );
    }
  }, [appointments]);

  // Fonction pour uploader un fichier de résultats
  const uploadLabResults = useCallback((fileName) => {
    addChatMessage(
      'received',
      `📄 Vos résultats d'analyse sont disponibles: ${fileName}. Vous pouvez les télécharger ci-dessous.`
    );
  }, []);

  const value = {
    appointments,
    chatMessages,
    selectedPayment,
    paymentStatus,
    checkInPatient,
    markLate,
    cancelAppointment,
    callNextPatient,
    getQueueStatus,
    addChatMessage,
    simulatePatientArrival,
    simulateLateAlert,
    simulateQueueUpdate,
    simulateAutoCancel,
    uploadLabResults,
    setSelectedPayment,
    setPaymentStatus
  };

  return (
    <AppointmentContext.Provider value={value}>
      {children}
    </AppointmentContext.Provider>
  );
};

export const useAppointments = () => {
  const context = useContext(AppointmentContext);
  if (!context) {
    throw new Error('useAppointments must be used within AppointmentProvider');
  }
  return context;
};