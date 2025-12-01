# Adoucisseur Haute-Savoie - Site de génération de leads

Site complet de génération de leads pour des adoucisseurs d'eau dans le département de la Haute-Savoie (74).

## 🚀 Technologies utilisées

- **Next.js 14** avec App Router
- **TypeScript**
- **Tailwind CSS**
- **Déploiement Vercel**

## 📋 Prérequis

- Node.js 18+ 
- npm ou yarn

## 🛠️ Installation

1. Installer les dépendances :
```bash
npm install
```

2. Lancer le serveur de développement :
```bash
npm run dev
```

3. Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur

## 📁 Structure du projet

```
├── app/                    # Pages Next.js (App Router)
│   ├── layout.tsx          # Layout principal avec Header/Footer
│   ├── page.tsx           # Page d'accueil
│   ├── globals.css         # Styles globaux
│   ├── adoucisseur/        # Page service adoucisseur
│   ├── entretien-adoucisseur/
│   ├── depannage-adoucisseur/
│   ├── prix-adoucisseur/
│   ├── villes/             # Pages villes
│   │   └── [slug]/         # Pages dynamiques par ville
│   ├── guides/             # Section blog/guides
│   │   └── [slug]/         # Articles individuels
│   ├── contact/            # Page contact
│   ├── mentions-legales/
│   ├── politique-confidentialite/
│   ├── api/
│   │   └── contact/        # Route API vers Formspree
│   ├── robots.ts           # Configuration robots.txt
│   └── sitemap.ts          # Génération sitemap.xml
├── components/             # Composants réutilisables
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── LeadForm.tsx        # Formulaire de contact
│   ├── CityList.tsx
│   ├── FAQ.tsx
│   ├── Section.tsx
│   └── JsonLd.tsx
├── config/
│   ├── departement.ts      # Paramètres du site (nom, numéro, domaine, villes majeures)
│   └── site.ts             # Configuration globale (villes détaillées, coordonnées)
└── data/
    ├── faq.ts              # Questions/réponses FAQ
    └── guides.ts           # Articles de blog
```

## 🔧 Configuration

### Modifier la liste des villes

Éditez le fichier `config/site.ts` :

```typescript
export const villes: Ville[] = [
  {
    slug: "nouvelle-ville",
    nom: "Nouvelle Ville",
    codePostal: "74000",
    zone: "Lac d'Annecy",
    metaDescription: "Description personnalisée pour le SEO",
  },
  // ...
];
```

Les pages de ville seront automatiquement générées lors du build.

### Modifier les métadonnées

Les métadonnées SEO sont définies dans chaque fichier `page.tsx` via l'export `metadata` :

```typescript
export const metadata: Metadata = {
  title: "Titre de la page",
  description: "Description pour le SEO",
  alternates: {
    canonical: "/url-de-la-page",
  },
};
```

### Modifier les textes des pages

Les textes sont directement dans les fichiers `page.tsx` de chaque route. Ils sont en français et peuvent être facilement modifiés.

### Configurer le formulaire de contact

Les formulaires `LeadForm` envoient désormais toutes les demandes vers Formspree à travers la route serveur `/api/contact`.  
Cela évite d'exposer votre identifiant Formspree côté client tout en conservant une seule logique pour toutes les pages.

1. Créez un formulaire sur [Formspree](https://formspree.io) et récupérez l'identifiant du type `mzblabla`.
2. Copiez le fichier `env.example` en `.env.local` puis renseignez votre identifiant :
   ```
   FORMSPREE_FORM_ID=votre_id_formspree
   ```
3. Relancez le serveur (`npm run dev`) pour que la variable soit prise en compte.
4. Chaque soumission sera stockée dans votre tableau de bord Formspree (et vous pourrez activer les notifications email ☑️).

Vous pouvez personnaliser les champs envoyés ou ajouter du routage supplémentaire dans `app/api/contact/route.ts`.

## 📝 Ajouter un article de blog

Éditez le fichier `data/guides.ts` :

```typescript
export const guides: Guide[] = [
  {
    slug: "mon-nouvel-article",
    title: "Titre de l'article",
    description: "Description courte",
    date: "2024-03-20",
    content: `
# Titre de l'article

Contenu en markdown simple...
    `.trim(),
  },
];
```

La page sera automatiquement générée à `/guides/mon-nouvel-article`.

## 🎨 Personnalisation du design

### Couleurs

Les couleurs sont définies dans `tailwind.config.ts` :
- `primary` : Bleu (eau, confiance)
- `secondary` : Vert (écologique)

### Police

La police Inter est chargée via Google Fonts dans `app/layout.tsx`. Pour changer, modifiez l'import.

## 🔍 SEO

Le site est optimisé pour le SEO avec :
- ✅ Métadonnées complètes sur toutes les pages
- ✅ Schémas JSON-LD (Organization, Service, FAQ)
- ✅ Sitemap.xml généré automatiquement
- ✅ Robots.txt configuré
- ✅ URLs canoniques
- ✅ Open Graph et Twitter Cards
- ✅ Structure sémantique HTML

## 🚀 Déploiement sur Vercel

1. Créer un compte sur [Vercel](https://vercel.com)
2. Connecter votre dépôt Git
3. Vercel détectera automatiquement Next.js
4. Ajouter les variables d'environnement si nécessaire
5. Déployer !

Le site sera accessible sur `https://votre-projet.vercel.app`

Pour utiliser le domaine personnalisé `adoucisseur-haute-savoie.fr`, configurez-le dans les paramètres du projet Vercel.

## 📊 Génération de leads

Le formulaire `LeadForm` est utilisé sur :
- Page d'accueil (hero section)
- Pages de service (en bas de page)
- Page contact
- Pages de ville

Toutes les soumissions passent par `/api/contact` qui doit être configuré pour envoyer les emails.

## 🛠️ Commandes disponibles

```bash
# Développement
npm run dev

# Build de production
npm run build

# Démarrer en production
npm start

# Linter
npm run lint
```

## 📄 Pages disponibles

- `/` - Page d'accueil
- `/adoucisseur` - Informations sur l'adoucisseur d'eau
- `/entretien-adoucisseur` - Service d'entretien
- `/depannage-adoucisseur` - Service de dépannage
- `/prix-adoucisseur` - Tarifs et devis
- `/villes` - Liste des villes desservies
- `/villes/[slug]` - Page par ville (ex: `/villes/annecy`)
- `/guides` - Liste des articles
- `/guides/[slug]` - Article individuel
- `/contact` - Page contact
- `/mentions-legales` - Mentions légales
- `/politique-confidentialite` - Politique de confidentialité

## 🔐 Données personnelles

Le site est conforme au RGPD :
- Politique de confidentialité complète
- Mentions légales
- Consentement explicite pour le formulaire
- Droits des utilisateurs expliqués

## 📞 Contact et support

Pour toute question ou modification, consultez la documentation Next.js :
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## 📝 Notes importantes

- Les coordonnées de contact dans `config/site.ts` sont des placeholders à remplacer
- Le formulaire est prêt pour Formspree : pensez juste à définir `FORMSPREE_FORM_ID`
- Les textes sont génériques et peuvent être personnalisés selon vos besoins
- Les images peuvent être ajoutées dans `public/` et utilisées avec `next/image`

## 🎯 Prochaines étapes suggérées

1. Configurer le service d'email pour le formulaire
2. Remplacer les coordonnées placeholder
3. Personnaliser les textes selon vos besoins
4. Ajouter des images réelles
5. Configurer Google Analytics si nécessaire
6. Tester le formulaire en production
7. Optimiser les performances (images, fonts)

---

**Développé avec Next.js 14 et TypeScript**






