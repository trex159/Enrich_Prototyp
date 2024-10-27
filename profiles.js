document.addEventListener("DOMContentLoaded", function() {
    const backButton = document.createElement("button");
    backButton.textContent = "Zurück";
    backButton.classList.add("back-button");

    // Beim Klick auf "Zurück" zurück zur Startseite und isSoundOn-Wert speichern
    backButton.addEventListener("click", function() {
        localStorage.setItem("isSoundOn", localStorage.getItem("isSoundOn"));
        window.location.href = "../index.html";
    });

    document.body.insertBefore(backButton, document.body.firstChild);
});
