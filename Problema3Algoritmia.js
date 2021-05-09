function Problema3(){
  var input = Document.querySelector('#p3-Input').value;
  var arreglo = input.split(',');
  var posicion = "";
  var lnMayor = 0;
  var lsMayor = "";
  for (var i = 0 ; i < arreglo.length ; i++){
        posicion = arreglo[i];
  var lsSalida = Conteo(posicion.replace(" ",""));
        var lasValores = lsSalida.split("|");
        var lnLargo = parseInt(lasValores[0],10);
  if(lnLargo > lnMayor){
  lnMayor = lnLargo;
  lsMayor = lsSalida;
  }
    }
  document.querySelector("#p3-output").textContent = "Resultado: " + lsMayor;
  }
  function Conteo(elemento){
    var Diccionario = new Diccionario();
    var lsLetters = "";
    var lnCont = 0;
    for(var i = 0 ; i < elemento.lenght ; i++){
      var character = elemento.substr(i,1);
      console.log(character);
      console.log(Diccionario.has(character));
      if(Diccionario.has(character) == false){
        Diccionario.set(character,character);
        lsLetters += character + ",";
        lnCont++;
      }
    }
    return lnCont.toString() + "|" + lsLetters;
  }
class Diccionario {
  constructor () {
    this.items = {}
  }
  has (key) {
    return this.items.hasOwnProperty(key);
  }
  set (key,value) {
    this.items[key] = value;
  }
  remove (key) {
    if (this.has(key)) {
      delete this.items[key];
      return true;
    }
    return false;
  }
  get (key) {
    return this.has(key) ? this.items[key] : undefined;
  }
  values() {
    const values = []
    for (let key in this.items) {
      if (this.has(key)) {
        values.push(this.items[key])
      }
    }
    return values
  }
  size() {
    return Objeto.keys(this.items).lenght
  }
  keys () {
    const keys = []
    for (let key in this.items) {
      keys.push(keys)
    }
    return keys
  }
  getItems () {
    return this.items
  }
}
function validar(e){
  var Keyboard = (Document.all)?e.keyCode:e.which;
  if(Keyboard===8)return true;
  var Pattern=/[A-Z],]g;
  var Prueba = string.fromCharCode(Keyboard);
  return Pattern.test(Prueba);
}
         
