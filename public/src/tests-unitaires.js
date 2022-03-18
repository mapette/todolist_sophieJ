
const lib = require('./lib_todolist-react')


function test_FormatFini_true_ok(){
  let fini = true
  let resp = `ok`
  if (lib.FormatFini(fini) == resp){
    console.log("tout va bien")
  }
  else{
    console.log("problème")
  }
}
function test_FormatFini_false_enCours(){
  let fini = false
  let resp = `en cours`
  if (lib.FormatFini(fini) == resp){
    console.log("tout va bien")
  }
  else{
    console.log("problème")
  }
}
function test_FormatFini_else_enCours(){
  let fini = "coucou"
  let resp = `en cours`
  if (lib.FormatFini(fini) == resp){
    console.log("tout va bien")
  }
  else{
    console.log("problème")
  }
}

test_FormatFini_true_ok()
test_FormatFini_false_enCours()
test_FormatFini_else_enCours()




