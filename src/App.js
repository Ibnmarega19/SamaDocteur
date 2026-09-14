import React, { useState, useEffect } from 'react';
import './index.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import CliniqueTab from './components/tabs/CliniqueTab';
import WhatsAppTab from './components/tabs/WhatsAppTab';
import PaiementTab from './components/tabs/PaiementTab';
import { AppointmentProvider } from './context/AppointmentContext';

const App = () => {
  const [activeTab, setActiveTab] = useState('clinique');

  return (
    <AppointmentProvider>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <Header />
        <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
        
        <div className="container mx-auto px-4 py-8">
          {activeTab === 'clinique' && <CliniqueTab />}
          {activeTab === 'whatsapp' && <WhatsAppTab />}
          {activeTab === 'paiement' && <PaiementTab />}
        </div>
      </div>
    </AppointmentProvider>
  );
};

export default App;