function FormateDate(dateR) {
  let date = new Date(dateR)
  return convDateToString(dateR)
}
function initDate(nbDay) {
  let date = new Date()
  date = addDaysToDate(date, nbDay)
  return convDateToString(date)
}

function convDateToString(date){
  let mois
  if (date.getMonth() + 1 < 10) {
      mois = `0${date.getMonth() + 1}`
  }
  else {
      mois = `${date.getMonth() + 1}`
  }
  let jour
  if (date.getDate() < 10) {
      jour = `0${date.getDate()}`
  }
  else {
      jour = `${date.getDate()}`
  }
  return `${date.getFullYear()}-${mois}-${jour}`
}
function addDaysToDate(date, days) {
  var res = new Date(date);
  res.setDate(res.getDate() + days);
  return res;
}

function Countdown(dateR) {
  let nbDays = Math.round((new Date(dateR).getTime() - new Date().getTime()) / (1000 * 3600 * 24)) + 1
  let retour = {
    msg: '',
    couleur: ''
  }
  if (nbDays < -1) {
    retour["msg"] = `${-nbDays} jour(s) de retard`
    retour["couleur"] = `noir`
  }
  else if (nbDays == -1) {
    retour["msg"] = `1 jour de retard`
    retour["couleur"] = `rouge`
  }
  else if (nbDays == 0) {
    retour["msg"] = `dernier jour`
    retour["couleur"] = `orange`
  }
  else if (nbDays == 1) {
    retour["msg"] = `encore 1 jour`
    retour["couleur"] = `jaune`
  }
  else {
    retour["msg"] = `encore ${nbDays} jour(s)`
    if (nbDays < 5) {
      retour["couleur"] = `vert`
    }
    else {
      retour["couleur"] = ``
    }
  }
  return retour
}

function centrageTitreEtBt(kind) {
  if (kind == "check") {
    return `text-center col-12 col-lg-9`
  }
  else {
    return `text-center col-12`
  }
}


function FormatFini(finiR) {
  if (finiR == true) {
    return `checked`
  }
  return ``
}

module.exports = {
  FormateDate,
  Countdown,
  FormatFini,
  initDate,
  centrageTitreEtBt
}
