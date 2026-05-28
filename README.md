# SandTech
SandTech est une application de messagerie en temps réel moderne et sécurisée, conçue pour permettre des échanges fluides entre utilisateurs, avec un panneau d'administration dédié pour la gestion des comptes.

🚀 Fonctionnalités
Messagerie Temps Réel : Utilisation de Firebase Realtime Database pour une communication instantanée.

Gestion Multi-utilisateurs : Système d'inscription simple pour rejoindre le salon.

Interface Dark Tech : Un design épuré, moderne et sombre, optimisé pour une expérience utilisateur confortable.

Panneau Admin : Un espace sécurisé par mot de passe pour consulter la liste des utilisateurs inscrits.

Navigation Fluide : Basculement facile entre le salon de chat et le tableau de bord administrateur.

🛠 Technologies Utilisées
Frontend : HTML5, CSS3 (Custom Design), JavaScript (ES6 Modules).

Backend / Base de données : Firebase Realtime Database.

Stockage Client : LocalStorage pour maintenir la session utilisateur.

📂 Structure du Projet
index.html : Interface principale de connexion et salon de messagerie.

admin.html : Panneau de contrôle réservé à l'administration.

script.js : Logique applicative (connexion Firebase, chat, événements).

style.css : Feuille de style globale du thème SandTech.

⚙️ Installation
Clone ce projet dans ton dossier local.

Assure-toi d'utiliser une clé de configuration Firebase valide dans script.js et admin.html.

Ouvre index.html dans ton navigateur pour commencer à discuter.

Accède à admin.html avec le mot de passe configuré (ayman) pour gérer les inscrits.

🔒 Sécurité
Le mode test de Firebase est actuellement activé pour permettre les opérations de lecture/écriture sans authentification complexe.

L'accès admin est protégé par une vérification côté client.
