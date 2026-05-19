# FAY — Landing Page

Landing page statique de l’application mobile **FAY (Found Around You)**, dédiée à la découverte et à l’organisation d’événements locaux.

## Aperçu

Le projet met en avant une expérience visuelle fluide avec :

- sections plein écran avec transitions de révélation progressives
- animations au scroll avec GSAP + ScrollTrigger (chargés via CDN)
- effet parallax sur la section immersion
- bascule thème clair/sombre avec sauvegarde dans `localStorage`

## Structure du projet

- `index.html` : structure de la landing page
- `styles.css` : styles, thèmes et responsive
- `js/main.js` : point d’entrée JavaScript
- `js/theme.js` : gestion du thème clair/sombre
- `js/images.js` : fallback des images en erreur
- `js/animations.js` : animations GSAP + ScrollTrigger
- `js/constants.js` : constantes partagées

## Lancer le projet

Aucune installation n’est nécessaire.

1. Ouvrir `index.html` dans un navigateur
2. Ou lancer un serveur statique local (optionnel) pour un meilleur confort de développement

## Technologies

- HTML5
- CSS3
- JavaScript (vanilla)
- [GSAP](https://gsap.com/) + ScrollTrigger (CDN)
