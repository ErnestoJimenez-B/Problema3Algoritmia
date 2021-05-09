function Problema3(){
  var input = document.querySelector('#p3-Input').value;
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
