// Lade den gespeicherten Status von isSoundOn (falls vorhanden) oder setze auf true
let isSoundOn = localStorage.getItem("isSoundOn") === "true";

// Toggle für Sound an/aus und Speicherung im localStorage
document.getElementById('sound-toggle').addEventListener('click', function() {
    isSoundOn = !isSoundOn;
    localStorage.setItem("isSoundOn", isSoundOn);
    renderProfiles();
});

// Profile laden mit Namen und Status
function renderProfiles() {
    const profileList = document.getElementById('profile-list');
    profileList.innerHTML = '';

    const profiles = [
        { id: 'Fred', name: 'Fred' },
        { id: 'Bob', name: 'Bob' },
        { id: 'Tom', name: 'Tom' }
    ];

    profiles.forEach(profile => {
        const profileDiv = document.createElement('div');
        profileDiv.className = 'profile';
        profileDiv.dataset.profileId = profile.id;

        // Profilbild festlegen (Echt oder Fake)
        const img = document.createElement('img');
        img.src = `Profiles/${profile.id}_${isSoundOn ? 'Echt' : 'Fake'}.jpg`;
        img.alt = `${profile.name}`;
        
        // Name unter dem Profilbild
        const name = document.createElement('p');
        name.textContent = profile.name;

        // Klick-Event für das Profil
        img.addEventListener('click', function() {
            window.location.href = `Profiles/${profile.id}_${isSoundOn ? 'Echt' : 'Fake'}.html`;
        });

        profileDiv.appendChild(img);
        profileDiv.appendChild(name); // Name unter Bild
        profileList.appendChild(profileDiv);
    });
}

// Profile beim Laden der Seite anzeigen
renderProfiles();
