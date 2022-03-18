const mysql = require('mysql');

function connectToMySQL() {
  //établissment de la connection avec la base de donnée
  //envoie du mot de passe / identifiant nécessaire
  let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Pepette2021+',
    database: 'tasks_db'
  });
  connection.connect();
  return connection
}

function dbGetTasks(fonction_traitement_resultat_bdd) {
  let connection = connectToMySQL()
  let query = "SELECT * FROM tasks_db.todolist ORDER BY fini, deadline"
  connection.query(query, fonction_traitement_resultat_bdd);
  connection.end();
}

function dbNewTask(val, fonction_traitement_resultat_bdd) {
  let connection = connectToMySQL()
  let valuesToInsert = [val['nom'], val['desc'], val['deadline']]
  let query = "INSERT INTO todolist (nom, description, deadline) VALUES (?, ?, ?)"
  connection.query(query, valuesToInsert, fonction_traitement_resultat_bdd);
  connection.end();
}

function dbCheckTasks(val, fonction_traitement_resultat_bdd) {
  let connection = connectToMySQL()
  let query = ""
  // déchecker toutes les tâches 
  query = `UPDATE todolist SET fini = false`
  connection.query(query, () => { });
  //maj des tâches de val
  let tab = val['check']
  if (tab != undefined) {           // si aucun élément
    if (typeof tab == 'string') {   // si 1 seul élément
      query = `UPDATE todolist SET fini = true WHERE id = ?`
      // connection.query(query, tab, () => { });
      connection.query(query, tab);
    }
    else {                            // si plusieurs éléments
      for (let t of tab) {
        let valueToUpdate = parseInt(t)
        query = `UPDATE todolist SET fini = true WHERE id = ?`
        // connection.query(query, valueToUpdate, () => { });
        connection.query(query, valueToUpdate);
      }
    }
  }
  connection.end(fonction_traitement_resultat_bdd)
}

function dbUpdateTasks(val, fonction_traitement_resultat_bdd) {
  let connection = connectToMySQL()
  // découper l'objet val en autant de tableau à 4 éléments (id, nom, desc, deadline)
  //           que de nb de tâches
  for (let i = 0; i < val['id'].length; i++) {
    // description
    if (val['desc'][i] != '') {
      let valueToUpdate = [val['desc'][i], parseInt(val['id'][i])]
      // MAJ desc si pas vide
      query = `UPDATE todolist SET description = ? WHERE id = ?`
      connection.query(query, valueToUpdate);
    }
    // deadline
    let valueToUpdate = [val['deadline'][i], parseInt(val['id'][i])]
    query = `UPDATE todolist SET deadline = ? WHERE id = ?`
    connection.query(query, valueToUpdate);
  }
  // supprimer les tâches de val[delete]
  if (val['delete'] != undefined) {   // si 0 élément
    let tab = val['delete']
    if (typeof (tab) == 'string') {   // si 1 seul élément
      query = `DELETE FROM todolist WHERE id = ?`
      connection.query(query, tab);
    }
    else {                            // si plusieurs éléments
      for (let t of tab) {
        let valueToUpdate = parseInt(t)
        query = `DELETE FROM todolist WHERE id = ?`
        connection.query(query, valueToUpdate);
      }
    }
  }
  connection.end(fonction_traitement_resultat_bdd);
}

module.exports = {
  dbGetTasks,
  dbNewTask,
  dbCheckTasks,
  dbUpdateTasks
}