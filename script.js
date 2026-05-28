function checkLogin() {
    const p = document.getElementById('pass').value;
    const dash = document.getElementById('dashboard');
    const loginBox = document.getElementById('login-box');
    const profile = document.getElementById('profile-section');

    if (p === 'ayman' || p === 'aygame') {
        loginBox.style.display = 'none';
        profile.style.display = 'none';
        dash.style.display = 'block';
    } else {
        alert("Mot de passe incorrect !");
    }
}

function generateurSEO() {
    const titre = document.getElementById('titreVideo').value;
    const count = titre.length;
    let feedback = count > 60 ? "Titre trop long." : (count < 20 ? "Titre trop court." : "Titre parfait !");
    document.getElementById('seo-feedback').innerText = `${count}/100 caractères - ${feedback}`;
}
