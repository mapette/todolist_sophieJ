

function ligneVide() {
  return (
    <div class="ligne-vide">
      rien
    </div>)
}

// Titre
function Titre() {
  return (
    < div class="row text-center" >
      <div class="col-12 col-lg-8 text-center">
        <span>
          <h1><strong>TO DO LIST</strong></h1>
        </span>
      </div>
    </div >
  )
}
function ListColumns() {
  return (
    <div class="row">
      <div class="text-center col-2 ">
        <h6>check</h6>
      </div>
      <div class="col-3 col-lg-2">
        <h5>to do</h5>
      </div>
      <div class="col-3 col-lg-3">
        <h5>détail</h5>
      </div>
      <div class="col-4">
        <h5>deadline</h5>
      </div>
    </div>
  )
}

// utilitaires
function btAccueil() {
  return (< div class="container" >
    <div class="row">
      <div class="ligne-vide">
        rien
      </div>
    </div>
    <div class="row">
      <div class="form-group col-12 col-lg-8 text-center">
        <a href='Accueil.html' type="button" class="btn btn-warning">retour Accueil</a>
      </div>
    </div >
  </div >
  )
}

// corps
function Task(props) {
  return (
    <div className="row">
      <div class="col-2 text-center">
        {FormatFini(props.fini)}
      </div>
      <div className="col-3 col-lg-2">
        {props.nom}
      </div>
      <div className="col-3 col-lg-3">
        {props.description}
      </div>
      <div className="col-4 col-lg-4">
        {convertDate(props.deadline)}
      </div>
    </div>
  )
}

