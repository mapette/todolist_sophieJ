function convertDate(inputFormat) {
  if (inputFormat === null) return '';
  function pad(s) { return (s < 10) ? '0' + s : s; }
  let d = new Date(inputFormat)
  return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join('/')
}

function FormatFini(finiR) {
  if (finiR == true) {
    return `ok`
  }
  return `en cours`
}

module.exports = {
  FormatFini
}


// fonctions qui fonctionnent en SSR mais pas ici
//    pourquoi ? bonne question
function FormateDate(dateR) {
  if (dateR === null) {
    return ''}
    else{
      let date = new Date(dateR)
      return convDateToString(date)    
    }
}

function convDateToString(date) {
  let mois
  if (date.getMonth() + 1 < 10) {
    mois = `0{date.getMonth() + 1}`
  }
  else {
    mois = `{date.getMonth() + 1}`
  }
  let jour
  if (date.getDate() < 10) {
    jour = `0{date.getDate()}`
  }
  else {
    jour = `{date.getDate()}`
  }
  return `{date.getFullYear()}-{mois}-{jour}`
}

