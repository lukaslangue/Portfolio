// Sélection du bouton burger et du menu de navigation
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

// Ajout d'un événement au burger pour toggler la classe 'nav-active'
burger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');

    // Animation du menu burger (ajout de la classe toggle)
    burger.classList.toggle('toggle');
});
