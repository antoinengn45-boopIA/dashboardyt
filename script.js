// Données simulées
const videos = [
    { titre: "Vidéo Minecraft", statut: "Montage" },
    { titre: "Tuto CyberShield", statut: "Écriture" }
];

function checkLogin() {
    const p = document.getElementById('pass').value;
    const loginBox = document.getElementById('login-box');
    const dash = document.getElementById('dashboard');
    const title = document.getElementById('welcome-title');

    if (p === 'ayman') {
        loginBox.style.display = 'none';
        dash.style.display = 'block';
        title.innerText = "Panneau Administrateur (Ayman)";
        title.style.color = "#f43f5e";
    } else if (p === 'aygame') {
        loginBox.style.display = 'none';
        dash.style.display = 'block';
        title.innerText = "Panneau Utilisateur (Aygame)";
        title.style.color = "#38bdf8";
    } else {
        alert("Mot de passe incorrect !");
    }
}

function generateurSEO() {
    const titre = document.getElementById('titreVideo').value;
    const count = titre.length;
    let feedback = "";

    if (count > 60) {
        feedback = "Attention, le titre est un peu long.";
    } else if (count < 20) {
        feedback = "Titre un peu court.";
    } else {
        feedback = "Titre parfait !";
    }
    
    document.getElementById('seo-feedback').innerText = `${count}/100 caractères - ${feedback}`;
}
