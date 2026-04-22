# Test Technique – Développeur Full Stack | Vaybe

Application fullstack de gestion de candidatures réalisée dans le cadre du test technique Vaybe.

---

## 🚀 Stack technique

| Côté | Technologie |
|---|---|
| Frontend | React.js + TailwindCSS + DaisyUI |
| Backend | Django + Django REST Framework |
| Base de données | SQLite (dev) |
| Authentification | Token Authentication (DRF) |

---

## ⚙️ Lancer le projet

### Prérequis
- Python 3
- Node.js 18+

---

### Backend

```bash
#Accéder au backend
cd backApp

# Installer les dépendances
pip install -r requirements.txt

# Créer  les migrations
pip manage.py makemigrations

# Appliquer les migrations
python manage.py migrate

# Créer le compte admin (gardez le mot de passe vous en auriez besoin lors de l'affichage des candidatures)
python manage.py createsuperuser

# Lancer le serveur
python manage.py runserver
```

Le serveur démarre sur **http://localhost:8000**

---

### Frontend

```bash
# Installer les dépendances
npm install

# Lancer l'application
npm run dev
```

L'application démarre sur **http://localhost:5173**

---

## 📡 Endpoints API

| Méthode | Endpoint | Auth | Description |
|---|---|---|---|
| `POST` | `/api/applications/` | ❌ | Soumettre une candidature |
| `GET` | `/api/applications/` | ✅ Token | Consulter les candidatures |
| `POST` | `/api/admin/login` | ❌ | Connexion admin |

---

## 🧠 Logique de scoring

Chaque candidature reçoit un score calculé automatiquement côté backend :

| Critère | Points |
|---|---|
| Email valide | +1 |
| Portfolio renseigné | +1 |
| Mots clés dans la motivation | +1 |
| CV uploadé | +1 |

**Score maximum : 4 points**

---
## ✅ Fonctionnalités implémentées

- Formulaire de soumission de candidature (nom, email, rôle, motivation, CV, portfolio)
- Validation côté client et côté serveur
- Système de scoring automatique
- Interface admin protégée par token
- Affichage de la liste des candidatures avec score
- Feedback utilisateur (alertes succès / erreur)
- Responsive mobile + desktop

---

## 💡 Choix techniques

- **Django** plutôt qu'Express : développement rapide, validation native, admin intégré
- **SQLite** en développement : zéro configuration, suffisant pour ce contexte
- **Token Auth** : standard simple et efficace pour sécuriser les routes admin
- **Axios** : gestion centralisée des appels API, plus propre que fetch natif

---

## 🔮 Améliorations possibles en production

- Migrer vers **PostgreSQL**
- Ajouter un système de **filtres et tri** sur le dashboard
- Déploiement sur **Railway** (backend) et **Vercel** (frontend)
- Système de **pagination** pour les candidatures

## 🔮 Pour Accéder à la page Admin

- localhost:5173/admin
---

Réalisé par **Eudes HODONOU**  
Contact : hodonoueudeshdn@gmail.com