# FAY — Found Around You

### Découvre les événements autour de toi depuis ton smartphone.

FAY est une application mobile pensée pour **trouver**, **organiser** et **rejoindre** des événements locaux, avec une expérience fluide et immersive.

---

## Pourquoi FAY ?

- 📍 **Carte géolocalisée** pour explorer ce qu’il se passe autour de toi  
- 🎯 **Filtres intelligents** pour trouver l’événement qui te correspond  
- 🎟️ **Billetterie + planning intégrés** pour tout gérer dans l’app  
- 🔔 **Notifications ciblées** pour ne rien manquer  

---

## Une expérience visuelle immersive

La landing page met en avant l’univers FAY avec :

- transitions progressives en sections plein écran
- animations au scroll avec GSAP + ScrollTrigger
- effet parallax sur la section immersion
- thème clair/sombre avec sauvegarde `localStorage`

---

## Sections de la landing

- **Intro** — présentation rapide de l’app  
- **Features** — bénéfices pour participants et organisateurs  
- **Immersion** — mise en scène visuelle et parallax  
- **CTA final** — invitation au téléchargement  

---

## Démarrage rapide

Aucune installation nécessaire.

1. Lance un serveur statique à la racine du projet
2. Ouvre `index.html` depuis ce serveur

---

## Stack

- HTML5
- CSS3
- JavaScript (vanilla)
- [GSAP](https://gsap.com/) + ScrollTrigger (CDN)

---

## Structure du projet

- `index.html` : shell principal + injection des sections HTML
- `partials/` : sections de la landing (`section-intro.html`, `section-features.html`, etc.)
- `styles.css` : point d’entrée CSS (imports)
- `css/` : styles par responsabilité (tokens, base, navigation, sections, responsive)
- `js/main.js` : point d’entrée JavaScript
- `js/partials.js` : chargement des sections HTML
- `js/theme.js` : gestion du thème clair/sombre
- `js/images.js` : fallback des images en erreur
- `js/animations.js` : animations GSAP + ScrollTrigger
- `js/constants.js` : constantes partagées
