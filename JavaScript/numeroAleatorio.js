function generarFraccionAleatoria() {
  return Math.random();
}
/* console.log(generarFraccionAleatoria());

console.log(Math.random()); */

//Numeros enteros aleatorios
var numeroAletorioEntre0y19 = Math.floor(Math.random() * 20);

//console.log(numeroAletorioEntre0y19);

/* function generarEnteroAletorio(limiteSuperior) {
  return Math.floor(Math.random() * limiteSuperior);
}

for (var i = 0; i < 15; i++) {
  console.log(generarEnteroAletorio(3));
} */

function ragonAleatorio(limiteInferior, limiteSuperior) {
  return (
    Math.floor(Math.random() * (limiteSuperior - limiteInferior + 1)) +
    limiteInferior
  );
}

/* for (var i = 0; i < 15; i++) {
  console.log(ragonAleatorio(5, 16));
} */

// FUNCION ParseInt

var a = "5";
var b = "12";

var c = parseInt(a) + parseInt(b);
var d = a + b;
/* console.log(c);
console.log(d); */
