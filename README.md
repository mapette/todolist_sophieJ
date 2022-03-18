# TODO LIST

Gestion de listes de tâches et de rendez-vous
    Création
    Mise à jour
    Suppression


## installation

Projet local développé en HTML/css/javascrip/jsx
librairies utilisées : Express - MySQL


## utilisation

lancement : node serveur-todolist.js


## prérequis 

Base de données MySql

Personalisation du code :
Fichier `\src\db_manager.js`
  => lignes 8 et 9 : indiquer le user et le mot de passe MySql

Requête de création de la table dans une database `tasks_db`:
CREATE TABLE `todolist-Table` (
  `id` INT NOT NULL,
  `nom` VARCHAR(50) NULL DEFAULT NULL,
  `description` TEXT NULL DEFAULT NULL,
  `deadline` DATETIME NULL DEFAULT NULL,
  `fini` TINYINT NULL DEFAULT 0,
  PRIMARY KEY (`id`));


## tests unitaires

test sur la page fetch :
    todolist_sophieJ\public\src
