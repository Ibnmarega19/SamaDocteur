# Configuration du Projet SamaDocteur

## Variables d'Environnement

Créez un fichier `.env` à la racine du projet :

```env
# Application
REACT_APP_NAME=SamaDocteur
REACT_APP_VERSION=1.0.0

# API (à configurer ultérieurement)
REACT_APP_API_URL=https://api.samadocteur.sn
REACT_APP_API_KEY=your_api_key_here

# WhatsApp (API officielle - futur)
REACT_APP_WHATSAPP_API_URL=https://api.whatsapp.com
REACT_APP_WHATSAPP_TOKEN=your_whatsapp_token

# Paiement
REACT_APP_WAVE_API_KEY=your_wave_api_key
REACT_APP_ORANGE_MONEY_API_KEY=your_orange_money_api_key

# Google Analytics (optionnel)
REACT_APP_GA_ID=your_google_analytics_id
```

## Configuration de Base

### Informations Clinique
Modifiez les informations dans `src/components/Header.js` :

```javascript
const clinicInfo = {
  name: "Clinique Médicale SamaDocteur",
  location: "Dakar, Sénégal",
  phone: "+221 33 XXX XXXX",
  email: "contact@samadocteur.sn"
};
```

### Horaires d'Ouverture

À ajouter dans la configuration :

```javascript
const workingHours = {
  monday: { open: "08:00", close: "20:00" },
  tuesday: { open: "08:00", close: "20:00" },
  wednesday: { open: "08:00", close: "20:00" },
  thursday: { open: "08:00", close: "20:00" },
  friday: { open: "08:00", close: "20:00" },
  saturday: { open: "09:00", close: "18:00" },
  sunday: { open: "closed", close: "closed" }
};
```

## Intégrations Futures

### 1. API WhatsApp Officielle
```javascript
// À implémenter dans un fichier services/whatsappService.js
import axios from 'axios';

const sendWhatsAppMessage = async (phoneNumber, message) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_WHATSAPP_API_URL}/send`,
      {
        to: phoneNumber,
        message: message
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_WHATSAPP_TOKEN}`
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error sending WhatsApp message:', error);
    throw error;
  }
};
```

### 2. Intégration Paiement Wave
```javascript
// À implémenter dans un fichier services/paymentService.js
const initializeWavePayment = (amount, phoneNumber, reference) => {
  // Intégrer l'API Wave avec les paramètres
};
```

### 3. Intégration Orange Money
```javascript
// À implémenter dans un fichier services/paymentService.js
const initializeOrangeMoneyPayment = (amount, phoneNumber, reference) => {
  // Intégrer l'API Orange Money
};
```

### 4. Base de Données
```javascript
// Structure Firebase/Firestore (recommandé)
const appointmentsCollection = {
  id: "unique_id",
  patientName: "string",
  patientPhone: "string",
  appointmentTime: "timestamp",
  appointmentDate: "date",
  doctor: "string",
  status: "enum: waiting, present, late, in-progress, absent, completed",
  arrivalTime: "timestamp",
  completionTime: "timestamp",
  notes: "string"
};

const paymentsCollection = {
  id: "unique_id",
  clinicId: "string",
  amount: "number",
  currency: "XOF",
  method: "enum: wave, orange_money",
  status: "enum: pending, success, failed",
  reference: "string",
  createdAt: "timestamp",
  updatedAt: "timestamp"
};
```

### 5. Authentification
```javascript
// À implémenter avec Firebase Auth ou JWT
const loginClinic = async (email, password) => {
  // Authentifier la clinique
};

const logoutClinic = async () => {
  // Déconnecter
};
```

## Déploiement

### Sur Vercel (recommandé)
```bash
npm install -g vercel
vercel login
vercel
```

### Sur Netlify
```bash
npm run build
# Uploader le dossier 'build' sur Netlify
```

### Docker
```dockerfile
FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## Tests

### Unit Tests (avec Jest)
```bash
npm test
```

### E2E Tests (avec Cypress)
```bash
npm run cypress:open
```

## Performance

### Optimisations appliquées
- Code splitting avec React.lazy()
- Image optimization
- Minification CSS/JS
- Caching des composants

## Sécurité

### Recommandations
- Utiliser HTTPS en production
- Valider tous les inputs côté client et serveur
- Implémenter le rate limiting
- Chiffrer les données sensibles
- Implémenter 2FA pour les cliniques

## Monitoring

### Services recommandés
- **Sentry** : Suivi des erreurs
- **Google Analytics** : Analyses d'utilisation
- **Datadog** : Monitoring de performance
- **Grafana** : Tableaux de bord
