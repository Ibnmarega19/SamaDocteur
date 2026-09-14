# SamaDocteur 🏥

**Application SaaS complète pour la gestion des rendez-vous médicaux au Sénégal**

## 📋 Vue d'ensemble

SamaDocteur est une solution innovante et intégrée conçue spécifiquement pour les cliniques et cabinets médicaux au Sénégal. L'application optimise la gestion des rendez-vous, réduit les retards des patients et automatise la communication via WhatsApp.

## 🎯 Fonctionnalités principales

### 1. 📊 Tableau de Bord Clinique
- **Vue d'ensemble du jour** : statistiques en temps réel (RDV, patients en attente, temps d'attente moyen)
- **File d'attente interactive** : liste complète avec statuts de présence codifiés par couleur
- **Actions rapides pour la secrétaire** :
  - ✅ Valider l'arrivée (Check-in)
  - ⚠️ Marquer en retard
  - ❌ Annuler/Libérer la place
- **Espace Médecin** : bouton pour appeler le patient suivant avec simulation WhatsApp
- **Espace Laboratoire** : upload de résultats médicaux PDF avec envoi automatique

### 2. 💬 Simulateur WhatsApp
Interface interactive simulant la réception de messages automatiques :
- 🛎️ **Prise de RDV** : chatbot automatique (accueil → choix médecin → créneau → confirmation)
- ⚠️ **Alerte Anti-Retard** : rappel 15 min avant le RDV
- 📍 **Suivi de File** : position et temps d'attente estimé
- 🔄 **Annulation Automatique** : report en fin de file après 15 min de retard

### 3. 💳 Paiement & Facturation
- Profil clinique avec statistiques
- **Intégration des paiements locaux** :
  - 📱 **Wave** : paiement mobile sécurisé
  - 🏠 **Orange Money** : service Orange
- Plans d'abonnement (Starter, Professional, Enterprise)
- Simulation QR code et validation de transaction

## 🎨 Design

- **Modern et épuré** : interface chaleureux adaptée au secteur santé
- **Tailwind CSS** : styles réactifs et modernes
- **Codes couleurs intuitifs** :
  - 🟢 Vert : Présent à l'heure
  - 🟠 Orange : En retard / Alerte
  - 🔴 Rouge : Absent
  - 🔵 Bleu : En consultation

## 📱 Données de test

L'application inclut des faux profils de patients sénégalais :
- Fatou Diop
- Amadou Diallo
- Moussa Ndiaye
- Aïssatou Ly
- Cheikh Sarr

## 🚀 Installation & Démarrage

### Prérequis
- Node.js (v16+)
- npm ou yarn

### Installation

```bash
# Cloner le repository
git clone https://github.com/Ibnmarega19/SamaDocteur.git
cd SamaDocteur

# Installer les dépendances
npm install

# Démarrer l'application
npm start
```

L'application ouvrira automatiquement dans votre navigateur à `http://localhost:3000`

## 📦 Structure du Projet

```
SamaDocteur/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Navigation.js
│   │   ├── Stats.js
│   │   ├── AppointmentQueue.js
│   │   ├── DoctorSection.js
│   │   ├── LabSection.js
│   │   └── tabs/
│   │       ├── CliniqueTab.js
│   │       ├── WhatsAppTab.js
│   │       └── PaiementTab.js
│   ├── context/
│   │   └── AppointmentContext.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## 🔄 Fonctionnalités Interactives

### Scénario 1 : Arrivée Patient
Cliquez sur "Arrivée Patient" → Le statut passe à "Présent" → Message WhatsApp confirmant la présence

### Scénario 2 : Alerte Anti-Retard
Cliquez sur "Marquer en retard" → Status orange → Message WhatsApp alertant le patient

### Scénario 3 : Suivi de File
Cliquez sur "Suivi de File" → Le patient reçoit sa position et temps estimé

### Scénario 4 : Paiement
Allez à l'onglet "Paiement" → Cliquez sur Wave ou Orange Money → Scannez le QR code → Validez le paiement

## 💡 Règles de Fonctionnement

✅ **Synchronisation en temps réel** : Les actions dans l'espace clinique déclenchent immédiatement les messages WhatsApp
✅ **Gestion intelligente de la file** : Les patients en retard sont automatiquement placés en fin de file
✅ **Communication automatique** : Chaque action déclenche un message WhatsApp au patient
✅ **Système de couleurs** : Chaque statut est visuellement identifiable

## 🛠️ Technologies Utilisées

- **React 18.2.0** : Bibliothèque JavaScript pour l'interface utilisateur
- **Tailwind CSS** : Framework CSS utilitaire
- **React Context API** : Gestion de l'état global
- **JavaScript ES6+** : Logique fonctionnelle moderne

## 📊 Plans d'Abonnement

| Plan | Prix | Patients | Fonctionnalités |
|------|------|----------|------------------|
| Starter | 24,999 FCFA | Jusqu'à 50 | Basique |
| Professional | 49,999 FCFA | Illimités | Complètes + WhatsApp |
| Enterprise | Sur devis | Multi-cliniques | Personnalisé + API |

## 🌍 Localisation

L'application est entièrement en français et adaptée au contexte sénégalais :
- Devises locales (FCFA)
- Méthodes de paiement locales (Wave, Orange Money)
- Numéros de téléphone au format sénégalais
- Noms et prénoms locaux

## 📝 Licence

MIT License - Libre d'utilisation

## 👨‍💻 Développeur

**Ibnmarega19** - 2024

## 📧 Support

Pour toute question ou demande de support :
- 📧 Email : contact@samadocteur.sn
- 🌐 Web : www.samadocteur.sn
- 📱 WhatsApp : +221 77 XXX XXXX

## 🚀 Roadmap Futur

- [ ] Intégration API WhatsApp officielle
- [ ] Historique et statistiques avancées
- [ ] Système de notifications en temps réel
- [ ] Application mobile (iOS & Android)
- [ ] Intégration avec les dossiers médicaux électroniques
- [ ] Système de facturation et comptabilité
- [ ] Multi-langage (Wolof, Français, Anglais)

## ⭐ Contributions

Les contributions sont les bienvenues ! N'hésitez pas à fork le projet et soumettre vos pull requests.

---

**Fait avec ❤️ pour améliorer la santé au Sénégal**
