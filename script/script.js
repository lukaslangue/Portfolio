console.log("Script chargé !");
document.addEventListener("DOMContentLoaded", function () {
    const burger = document.querySelector(".burger");
    const navLinks = document.querySelector(".nav-links");

    if (burger && navLinks) {
        burger.addEventListener("click", function () {
            navLinks.classList.toggle("nav-active");
            burger.classList.toggle("toggle");
        });

        // Fermer le menu lorsqu'un lien est cliqué
        document.querySelectorAll(".nav-links a").forEach(link => {
            link.addEventListener("click", function () {
                navLinks.classList.remove("nav-active");
                burger.classList.remove("toggle");
            });
        });
    } else {
        console.error("Erreur : Élément non trouvé !");
    }
});
