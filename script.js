function envoyerInfos() {
    const profil = {
        prenom: document.getElementById('prenom').value,
        nom: document.getElementById('nom').value,
        age: document.getElementById('age').value,
        tel: document.getElementById('tel').value,
        adresse: document.getElementById('adresse').value
    };

    // On stocke les données dans le navigateur
    localStorage.setItem('userProfile', JSON.stringify(profil));
    
    alert("Informations envoyées au Dashboard Admin !");
}
