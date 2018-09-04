function funcao(){

var montante;
var capital = (1275,00);
var taxa = (0.01);
var meses= document.getElementById("meses").value
var total;

total = 1275 * (1+( 0.01 * meses));
document.getElementById("resultado").innerHTML = "Montante: "+ total;}