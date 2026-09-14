import React from 'react';

const Navigation = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'clinique', label: '📊 Tableau de Bord Clinique', icon: '🏥' },
    { id: 'whatsapp', label: '💬 Simulateur WhatsApp', icon: '📱' },
    { id: 'paiement', label: '💳 Paiement & Facturation', icon: '💰' }
  ];

  return (
    <div className="bg-white shadow-md border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex gap-0">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`nav-tab ${
                activeTab === tab.id
                  ? 'text-purple-600 border-b-4 border-purple-600'
                  : 'text-gray-600 hover:text-purple-600'
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navigation;