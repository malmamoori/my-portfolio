const projectsButton = document.getElementById("projects-button");

projectsButton.addEventListener("click", function () {
    document.getElementById("projects").scrollIntoView({
        behavior: "smooth"
    });
});
// ====================
// Dark Mode
// ====================

const darkModeButton = document.getElementById("dark-mode-button");

darkModeButton.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {

        darkModeButton.textContent = "☀️ Light Mode";

        localStorage.setItem("darkMode", "enabled");

    } else {

        darkModeButton.textContent = "🌙 Dark Mode";

        localStorage.setItem("darkMode", "disabled");

    }

});

if (localStorage.getItem("darkMode") === "enabled") {

    document.body.classList.add("dark-mode");

    darkModeButton.textContent = "☀️ Light Mode";

}
const projectCards = document.querySelectorAll(".project-card");

function showProjectCards() {

    projectCards.forEach(function (card) {

        const cardPosition = card.getBoundingClientRect().top;

        if (cardPosition < window.innerHeight - 100) {
            card.classList.add("show");
        }

    });

}

window.addEventListener("scroll", showProjectCards);

showProjectCards();

const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");
const submitButton = contactForm.querySelector('button[type="submit"]');

contactForm.addEventListener("submit", async function (event) {

    event.preventDefault();
    submitButton.textContent = "Sending...";
    submitButton.disabled = true;
    formStatus.textContent = "";

    const formData = new FormData(contactForm);

    const response = await fetch(contactForm.action, {
        method: "POST",
        body: formData,
        headers: {
            "Accept": "application/json"
        }
    });

    if (response.ok) {
    formStatus.textContent = "✓ Message sent successfully!";
    formStatus.className = "success";

    contactForm.reset();
} else {
    formStatus.textContent = "✕ Something went wrong. Please try again.";
    formStatus.className = "error";
}

    submitButton.textContent = "Send Message";
    submitButton.disabled = false;

});

const homeLogo = document.querySelector(".home-logo img");

homeLogo.addEventListener("mousemove", function (event) {

    const rect = homeLogo.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const rotateY = (x / rect.width - 0.5) * 20;
const rotateX = (0.5 - y / rect.height) * 20;

    homeLogo.style.transform =
        `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
});

homeLogo.addEventListener("mouseleave", function () {
    homeLogo.style.transform =
        "perspective(700px) rotateX(0deg) rotateY(0deg) scale(1)";
});