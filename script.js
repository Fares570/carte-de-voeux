// Sélectionne la carte
const card = document.querySelector("#card");

// Fonction pour lancer l'animation et rediriger
function animateAndRedirect() {
    // Ajoute la classe pour lancer l'animation
    card.classList.add("fade-out");

    // Attends la fin de l'animation avant de rediriger
    setTimeout(() => {
        window.location.href = "welcome.html"; // Redirige vers la deuxième page
    }, 1000); // La durée correspond à l'animation CSS (1 seconde)
}

// Ajoute un événement de clic sur la carte
card.addEventListener("click", animateAndRedirect);