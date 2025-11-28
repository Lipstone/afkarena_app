# AFK Arena App

Application Next.js avec architecture moderne, prête pour le déploiement sur Vercel.

## Structure du projet

```
afkarena_app/
├── app/                    # App Router (Next.js 13+)
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Page d'accueil
│   └── globals.css        # Styles globaux
├── public/                # Fichiers statiques
├── package.json           # Dépendances
├── tsconfig.json          # Configuration TypeScript
├── next.config.js         # Configuration Next.js
├── .eslintrc.json        # Configuration ESLint
└── .gitignore            # Fichiers ignorés par Git
```

## Installation et initialisation

### 1. Cloner ou créer le projet
```bash
# Le projet est déjà dans c:\Users\henea\Documents\GitHub\afkarena_app
cd afkarena_app
```

### 2. Installer les dépendances
```bash
npm install
```

Ou avec Yarn:
```bash
yarn install
```

### 3. Démarrer le serveur de développement
```bash
npm run dev
```

L'application sera accessible à `http://localhost:3000`

### 4. Construire pour la production
```bash
npm run build
npm start
```

## Déploiement sur Vercel

### Option 1: Via GitHub (recommandé)
1. Pushez votre code sur GitHub
2. Allez sur [vercel.com](https://vercel.com)
3. Cliquez sur "New Project"
4. Importez votre repository GitHub
5. Cliquez sur "Deploy"

Vercel détectera automatiquement que c'est un projet Next.js et le configurera correctement.

### Option 2: Via Vercel CLI
```bash
# Installer la CLI Vercel
npm i -g vercel

# Déployer
vercel
```

### Option 3: Via Git avec déploiement automatique
```bash
git push origin main
# Vercel redéploiera automatiquement
```

## Fichiers de configuration expliqués

- **package.json**: Dépendances et scripts npm
- **tsconfig.json**: Configuration TypeScript avec chemins d'alias (`@/*`)
- **next.config.js**: Configuration Next.js (optimisations, plugins, etc.)
- **.eslintrc.json**: Règles de linting
- **app/layout.tsx**: Layout principal partagé par toutes les pages
- **app/page.tsx**: Page d'accueil (route `/`)

## Prochaines étapes

- Créer des composants dans `app/components/`
- Ajouter des routes supplémentaires dans le dossier `app/`
- Configurer les variables d'environnement dans `.env.local`
- Ajouter des API routes dans `app/api/`

## Scripts disponibles

- `npm run dev`: Démarrage en développement
- `npm run build`: Build pour production
- `npm start`: Démarrage du serveur production
- `npm run lint`: Vérification du linting
