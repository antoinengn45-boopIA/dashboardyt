import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getDatabase, ref, push, onChildAdded } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-database.js";

const firebaseConfig = {
    // INSÈRE ICI TA CONFIGURATION DEPUIS "image_e71367.png"
};

const db = getDatabase(initializeApp(firebaseConfig));

window.register = () => {
    const user = {
        pseudo: document.getElementById('pseudo').value,
        nom: document.getElementById('nom').value,
        email: document.getElementById('email').value
    };
    localStorage.setItem('sandtech_user', JSON.stringify(user));
    document.getElementById('auth-box').style.display = 'none';
    document.getElementById('chat-area').style.display = 'block';
};

window.sendMessage = () => {
    const user = JSON.parse(localStorage.getItem('sandtech_user'));
    const msg = document.getElementById('msg-input').value;
    push(ref(db, 'messages'), { pseudo: user.pseudo, text: msg, time: Date.now() });
    document.getElementById('msg-input').value = '';
};

onChildAdded(ref(db, 'messages'), (data) => {
    const m = data.val();
    const div = document.createElement('p');
    div.innerHTML = `<b>${m.pseudo}</b>: ${m.text}`;
    document.getElementById('messages').appendChild(div);
});
