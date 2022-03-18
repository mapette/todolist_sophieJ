const ReactDOM = require('react')
const express = require('express')
const app = express()
const port = 3000

const db = require('./src/db_manager')
const temp = require('./src/template_manager')

app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})

// boutons de la page d'accueil
//      => redirection vers les pages check ou update
app.post('/butCheckTaskListFromAccueil', (req, res) => {
  db.dbGetTasks(() => {
    res.redirect("/taskList")
  })
})
app.post('/butUpdateTaskListFromAccueil', (req, res) => {
  db.dbGetTasks(() => {
    res.redirect("/taskListUpdate")
  })
})

// affichage de la liste à checker
//  d'après le bouton d'accueil ou après bouton check
app.get('/taskList', (req, res) => {
  db.dbGetTasks((error, results, fields) => {
    let html = temp.ShowTasks(results)
    res.send(html)
  })
})

// affichage de la liste à modifier
//  d'après le bouton d'accueil ou après bouton update
app.get('/taskListUpdate', (req, res) => {
  db.dbGetTasks(
    function (error, results, fields) {
      let html = temp.UpdateTasks(results)
      res.send(html)
    })
})

// traitement des formulaires
app.post('/check', (req, res) => {
  db.dbCheckTasks(req.body, () => {
    res.redirect("/taskList")
  })
})

app.post('/newTask', (req, res) => {
  db.dbNewTask(req.body, () => {
    res.redirect("/taskListUpdate")
  })
})

app.post('/update', (req, res) => {
  db.dbUpdateTasks(req.body, () => {
    res.redirect("/taskListUpdate")
  })
})

// test fetch-json
app.get('/get-tasks', (req, res) => {
  db.dbGetTasks((error, results, fields) => {
    res.json(results)
  })
})

//test react
app.get('/get-tasks-react', (req, res) => {
  db.dbGetTasks((error, results, fields) => {
    res.json(results)
  })
}) //=> requête qui donne à manger à la page "test-react-props-map.html"


