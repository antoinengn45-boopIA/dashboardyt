function simulateGoogleLogin() {
    alert("Redirection vers la passerelle de connexion Google...");
    document.getElementById('google-login').style.display = 'none';
    document.getElementById('login-box').style.display = 'block';
}

function checkLogin() {
    const p = document.getElementById('pass').value;
    const loginBox = document.getElementById('login-box');
    const dash = document.getElementById('dashboard');
    const profile = document.getElementById('profile-section');
    const title = document.getElementById('welcome-title');

    if (p === 'ayman' || p === 'aygame') {
        loginBox.style.display = 'none';
        profile.style.display = 'none';
        dash.style.display = 'block';
        title.innerText = p === 'ayman' ? "Panneau Admin (Ayman)" : "Panneau Utilisateur (Aygame)";
    } else {
        alert("Mot de passe incorrect !");
    }
}

function generateurSEO() {
    const titre = document.getElementById('titreVideo').value;
    const count = titre.length;
    let feedback = count > 60 ? "Attention, titre trop long." : (count < 20 ? "Titre un peu court." : "Titre parfait !");
    document.getElementById('seo-feedback').innerText = `${count}/100 caractères - ${feedback}`;
}
