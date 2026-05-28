document.getElementById('user-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const user = {
        pseudo: document.getElementById('pseudo').value,
        nom: document.getElementById('nom').value,
        prenom: document.getElementById('prenom').value,
        age: document.getElementById('age').value,
        email: document.getElementById('email').value
    };
    localStorage.setItem('sandtech_user', JSON.stringify(user));
    document.getElementById('auth-box').style.display = 'none';
    document.getElementById('chat-box').style.display = 'block';
});

function sendMessage() {
    const msg = document.getElementById('msg-input').value;
    const user = JSON.parse(localStorage.getItem('sandtech_user'));
    const div = document.createElement('div');
    div.innerHTML = `<strong>${user.pseudo}</strong>: ${msg}`;
    document.getElementById('messages').appendChild(div);
    document.getElementById('msg-input').value = '';
}
