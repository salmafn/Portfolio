# Portfolio — Salma Fennane

Personal portfolio website built with **Astro** and deployed on **Vercel**.

> **Live:** [portfolio-salma-fennane.vercel.app](https://portfolio-salma-fennane.vercel.app)

---

## Sections

| Section | Description |
| --- | --- |
| **Hero** | Introduction avec photo, liens sociaux et statistiques |
| **À Propos** | Présentation en cartes numérotées |
| **Compétences** | Grilles de compétences techniques et soft skills |
| **Formation** | Timeline du parcours académique |
| **Expérience** | Expériences professionnelles et projets |
| **Projets** | Grille de projets réalisés |
| **Contact** | Formulaire de contact et informations |

## Stack Technique

- **Framework :** [Astro](https://astro.build) (Static Site Generation)
- **Adapter :** [@astrojs/vercel](https://docs.astro.build/en/guides/integrations-guide/vercel/)
- **Hébergement :** [Vercel](https://vercel.com)
- **Fonts :** Inter + JetBrains Mono (Google Fonts)
- **Icons :** Lucide (SVG inline)
- **Contact :** [FormSubmit.co](https://formsubmit.co)

## Commandes

| Commande | Action |
| --- | --- |
| `npm install` | Installer les dépendances |
| `npm run dev` | Lancer le serveur de développement (`localhost:4321`) |
| `npm run build` | Build de production |
| `npm run preview` | Prévisualiser le build localement |
| `npm run deploy` | Déployer sur Vercel |

## Modifier le contenu

Tout le contenu (texte, compétences, projets, etc.) est centralisé dans un seul fichier :

```
src/data/portfolio.ts
```

Modifiez les données dans ce fichier, puis relancez `npm run build` pour régénérer le site.

## Structure du projet

```
portfolio/
├── public/
│   ├── avatar.svg
│   └── cv-salma-fennane.pdf
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── Skills.astro
│   │   ├── Education.astro
│   │   ├── Experience.astro
│   │   ├── Projects.astro
│   │   ├── Contact.astro
│   │   ├── Footer.astro
│   │   └── BackToTop.astro
│   ├── data/
│   │   └── portfolio.ts
│   ├── layouts/
│   │   └── BaseLayout.astro
│   └── pages/
│       └── index.astro
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

---

**© 2025 Salma Fennane** — Built with Astro, deployed on Vercel.
