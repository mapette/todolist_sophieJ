const fs = require("fs")
const lib = require('./lib_todolist')

// contenus communs
function head() {
  return `
  <head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="/src/style_todolist.css">
    <meta charset="utf-8" />
 </head>
 `
}

function btnAccueil(kind) {
  return `
  <div class="container">
  <div class="row">
      <div class="ligne-vide">
          rien
      </div>
  </div>
  <div class="row">
      <div class="form-group ${lib.centrageTitreEtBt(kind)}">
          <a href="accueil.html">
          <input id="RACheck" type="button" class="btn btn-warning" value="retour à l'accueil">
          </a>
      </div>

  </div>
</div>
`
}

function titre(kind) {
  return `
    <div class="row text-center">
      <div class="${lib.centrageTitreEtBt(kind)}">
          <span class="">
              <h1><strong>TO DO LIST</strong></h1>
          </span>
      </div>    
    </div>
`
}
function listColumns(kind) {
  if (kind == "update") {
    return `
    ${titre(kind)}
    <div class="row">
      <div class="text-center col-1 ">
      <h6>check</h6>
    </div>
    <div class="col-3">
      <h5>to do</h5>
    </div>
    <div class="col-4">
      <h5>détail</h5>
    </div>
    <div class="col-3  ">
      <h5>deadline</h5>
    </div>
      <div class="col-1">
          <h5>delete</h5>
      </div>
    </div>
    `
  }
  else {    // "check"
    return `
    ${titre(kind)}
    <div class="row" >
      <div class="text-center col-1 ">
      <h6>check</h6>
    </div>
    <div class="col-3 col-lg-2">
      <h5>to do</h5>
    </div>
    <div class="col-4 col-lg-3">
      <h5>détail</h5>
    </div>
    <div class="col-3 col-lg-2">
      <h5>deadline</h5>
    </div>
    <div class="d-none d-lg-block col-2">
      <h5>countdown</h5>
    </div>
    </div>
 `
  }
}

//  liste à checker - update fini
function lineTasks(results) {
  let lignes = ""
  for (let i = 0; i < results.length; i++) {
    lignes = `${lignes}
    <div class="row petit">
      <div class="col-1 text-center">
        <input type="checkbox" class="checkList" 
          name="check" ${lib.FormatFini(results[i]["fini"])} value=${results[i]["id"]}>
      </div>
      <div class="col-3 col-lg-2">
        ${results[i]["nom"]}
      </div>
      <div class="col-4 col-lg-3">
        ${results[i]["description"]}
      </div>
      <div class="col-3 col-lg-2">
          <input type="date" id="date" 
            value = ${lib.FormateDate(results[i]["deadline"])}
            min = ${lib.FormateDate(results[i]["deadline"])}
            max = ${lib.FormateDate(results[i]["deadline"])}>
      </div>
      <div class="d-none d-lg-block col-2">
        <span class="font-weight-bold ${lib.Countdown(results[i]["deadline"])["couleur"]}">
          ${lib.Countdown(results[i]["deadline"])["msg"]}
        </span>
      </div>
      <input type="hidden" value=${results[i]["id"]}>
    </div>
      `
  }
  return lignes
}

function btnCkeck() {
  return `
<div class="ligne-vide">
  rien
</div>
<div class="form-group text-center col-12 col-lg-9">
  <button type="submit" class="btn btn-success">Envoyer !</button>
</div>
`
}

function ShowTasks(results) {
  let kind = `check`
  let corps = `
  <form id="form-check" method="POST" action="/check" enctype="application/x-www-form-urlencoded">
    <div class="container">
        ${listColumns(kind)}
        ${lineTasks(results)}
        ${btnCkeck()}
        ${btnAccueil(kind)}
    </div>
    `
  return `
  ${head()}
  <body>
    ${corps}
  </body>
  </html> `
}

//  liste à mettre à jour - update todo, détail, deadline et delete
function lineToUpdate(results) {
  let lignes = ""
  for (let i = 0; i < results.length; i++) {
    lignes = `${lignes}
    <div class="row petit">
      <div class="col-1 text-center ">
        <input type="checkbox" class="checkUpdate" id="fini" Disabled checkbox ${lib.FormatFini(results[i]["fini"])}>
      </div>
      <div class="col-3">
        <input class="form-control" name="nom" value="${results[i]["nom"]}">
      </div>
      <div class="col-4">
        <textarea class="form-control" rows="1" name="desc">${results[i]["description"]}</textarea>
      </div>
      <div class="col-3">
          <input class="form-control" type="date" id="date" name="deadline"
          value=${lib.FormateDate(results[i]["deadline"])}>
      </div>
      <div class="col-1 text-center">
        <input type="checkbox" class="center-delete checkUpdate" name="delete" value=${results[i]["id"]}>
      </div>
      <input type="hidden" name="id" value=${results[i]["id"]}>
      </div>
      `
  }
  return lignes
}

function btnUpdate() {
  return `
  <div class="ligne-vide">
    rien
  </div>
  <div class="form-group col-12 text-center">
    <button type="submit" class="btn btn-danger">Envoyer !</button>
  </div>
  `
}

function formNewTask(results) {
  return `
  <form method="POST" action="/newTask" enctype="application/x-www-form-urlencoded">
  <div class="container">
    <div class="row ligne-vide">
        rien
    </div>
    <div class="row">
        <div class="col-3 offset-1">
            <div class="form-group">
                <label for="task">tâche</label>
                <input class="form-control long-input" id="task" name="nom" minlength="1" placeholder="obligatoire"
                    required>
            </div>
        </div>
        <div class="col-4">
            <div class="form-group">
                <label for="desc">détail</label>
                <textarea class="form-control" rows="1" id="desc" name="desc" placeholder="facultatif"></textarea>
            </div>
        </div>
        <div class="col-3">
            <div class="form-group">
                <label for="date">dead line</label>
                <input type="date" class="form-control" id="Ndate" name="deadline" min=${lib.initDate(0)}
                    value=${lib.initDate(5)}>
            </div>
        </div>
    </div>
  </div>
  </div>
  <div class="ligne-vide">
      rien
  </div>
  <div class="row text-center">
      <div class="form-group col-12">
          <button id="subNewTask" type="submit" class="btn btn-info">nouvelle tâche</button>
      </div>
  </div>
  </div>
</form>   
`
}

function UpdateTasks(results) {
  let kind = `update`
  let corps = `
  <form method="POST" action="/update" enctype="application/x-www-form-urlencoded">
    <div class="container">
        ${listColumns(kind)} 
        ${lineToUpdate(results)}
        ${btnUpdate()}
      </div >
  </form>
  <div class="container">
    ${formNewTask()}
    ${btnAccueil(kind)}
   </div >
  `
  return `
    ${head()}
    <body>
    ${corps}
    </body>
  </html>`
}

module.exports = {
  UpdateTasks,
  ShowTasks
}

