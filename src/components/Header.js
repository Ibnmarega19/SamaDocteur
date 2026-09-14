import React from 'react';

const Header = () => {
  return (
    <div className="gradient-header text-white shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <span className="text-2xl">🏥</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold">SamaDocteur</h1>
              <p className="text-purple-100 text-sm">Gestion intelligente des rendez-vous médicaux</p>
            </div>
          </div>
          <div className="text-right text-purple-100 text-sm">
            <p>Clinique Médicale - Dakar</p>
            <p className="text-xs mt-1">Sénégal 🇸🇳</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;