# FAY — Landing Page

Landing page statique de l’application mobile **FAY (Found Around You)**, dédiée à la découverte et à l’organisation d’événements locaux.

## Aperçu

Le projet met en avant une expérience visuelle fluide avec :

- sections plein écran avec transitions de révélation progressives
- animations au scroll avec GSAP + ScrollTrigger (chargés via CDN)
- effet parallax sur la section immersion
- bascule thème clair/sombre avec sauvegarde dans `localStorage`

## Structure du projet

- `index.html` : shell principal + injection des sections HTML
- `partials/` : sections HTML (`section-intro.html`, `section-features.html`, etc.)
- `styles.css` : point d’entrée CSS (imports)
- `css/` : styles séparés par responsabilité (tokens, base, navigation, sections, responsive)
- `js/main.js` : point d’entrée JavaScript
- `js/partials.js` : chargement des sections HTML
- `js/theme.js` : gestion du thème clair/sombre
- `js/images.js` : fallback des images en erreur
- `js/animations.js` : animations GSAP + ScrollTrigger
- `js/constants.js` : constantes partagées

## Lancer le projet

Aucune installation n’est nécessaire.

1. Lancer un serveur statique local dans la racine du projet
2. Ouvrir `index.html` via ce serveur

## Technologies

- HTML5
- CSS3
- JavaScript (vanilla)
- [GSAP](https://gsap.com/) + ScrollTrigger (CDN)
