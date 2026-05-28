import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getDatabase, ref, push, onChildAdded, remove } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyApHM6M8CMhKaad5E4lQfWzjxJziMzWkBs",
    authDomain: "web-app-5c43b.firebaseapp.com",
    projectId: "web-app-5c43b",
    storageBucket: "web-app-5c43b.appspot.com",
    messagingSenderId: "821414265483",
    appId: "1:821414265483:web:bc04011134684930194a8e",
    databaseURL: "https://web-app-5c43b-default-rtdb.firebaseio.com"
};

const db = getDatabase(initializeApp(firebaseConfig));

// --- Persistance de connexion ---
window.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('sandtech_user')) {
        document.getElementById('auth-box').style.display = 'none';
        document.getElementById('chat-area').style.display = 'block';
    }
});

// --- Inscription ---
function register() {
    const user = {
        pseudo: document.getElementById('pseudo').value,
        nom: document.getElementById('nom').value,
        email: document.getElementById('email').value
    };
    if (user.pseudo && user.nom && user.email) {
        localStorage.setItem('sandtech_user', JSON.stringify(user));
        location.reload(); // Actualise pour appliquer le mode connecté
    }
}

// --- Suppression historique (pour Admin) ---
window.clearChat = () => {
    if (confirm("Voulez-vous vraiment supprimer TOUS les messages ?")) {
        remove(ref(db, 'messages'));
        document.getElementById('messages').innerHTML = "";
    }
};

// ... (Garde tes fonctions sendMessage et onChildAdded ici) ...
document.getElementById('btn-register').addEventListener('click', register);
// ...        push(ref(db, 'messages'), { 
            pseudo: user.pseudo, 
            text: msgInput.value, 
            time: Date.now() 
        });
        msgInput.value = '';
    }
}

document.getElementById('btn-register').addEventListener('click', register);
document.getElementById('btn-send').addEventListener('click', sendMessage);

onChildAdded(ref(db, 'messages'), (data) => {
    const m = data.val();
    const messagesDiv = document.getElementById('messages');
    const div = document.createElement('p');
    div.innerHTML = `<b>${m.pseudo}</b>: ${m.text}`;
    messagesDiv.appendChild(div);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
});    const msgInput = document.getElementById('msg-input');
    
    if (msgInput.value.trim() !== "") {
        push(ref(db, 'messages'), { 
            pseudo: user.pseudo, 
            text: msgInput.value, 
            time: Date.now() 
        });
        msgInput.value = '';
    }
}

// Connexion des événements via addEventListener (au lieu de onclick)
document.getElementById('btn-register').addEventListener('click', register);
document.getElementById('btn-send').addEventListener('click', sendMessage);

// Écoute des nouveaux messages
onChildAdded(ref(db, 'messages'), (data) => {
    const m = data.val();
    const messagesDiv = document.getElementById('messages');
    const div = document.createElement('p');
    div.innerHTML = `<b>${m.pseudo}</b>: ${m.text}`;
    messagesDiv.appendChild(div);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
});
