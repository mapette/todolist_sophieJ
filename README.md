# TODO LIST

Gestion de listes de tâches et de rendez-vous
* Création
* Mise à jour
* Suppression


## Installation

Projet en local développé en 

* HTML
* css 
* javascrip
* jsx

Librairies utilisées :

* Express 
* mysql

## Utilisation

Lancement depuis l'invite cmd : node serveur-todolist.js

## Base de données MySql

### Personaliser le code

fichier `\src\db_manager.js`  
lignes 8 et 9 : indiquer le user et le mot de passe MySql

### Requête de création de la table dans une database `tasks_db`
CREATE TABLE `todolist-Table` (
  `id` INT NOT NULL,
  `nom` VARCHAR(50) NULL DEFAULT NULL,
  `description` TEXT NULL DEFAULT NULL,
  `deadline` DATETIME NULL DEFAULT NULL,
  `fini` TINYINT NULL DEFAULT 0,
  PRIMARY KEY (`id`));

## Tests unitaires

Tests sur la page fetch :
    todolist_sophieJ\public\src
