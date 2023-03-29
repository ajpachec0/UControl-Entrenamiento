/* function mostrarMensaje() {
    console.log("Hello World!");
  }

  mostrarMensaje(); */

function sumar(a, b) {
  // lo que se encuentra dentro de la funcion sumar(a,b) en este a y b, son parametros para la funcion.
  var suma = a + b;
  console.log("El resultado de " + a + " + " + b + " es: " + suma);
}

var x = 5;
var y = 3;

sumar(x, y); //lo que recibe la funcion son llamados, argumentos, que se asignan a los parametos que recibe la funcion.

function concatenarTresCadenas(cad1, cad2, cad3) {
  console.log(cad1 + " " + cad2 + " " + cad3);
}

concatenarTresCadenas("Estoy", "Aprendiendo", "a programar"); //argumentos

//varibale global porque esta en general
var miVariableGlobal = 5;

console.log(miVariableGlobal);

function miFuncion() {
  console.log(miVariableGlobal);
}

miFuncion();

//variable local que solo se encuentra en una funcion

/*  function miFuncionL() {
    var miVariebleLocal = 4;
    console.log(miVariebleLocal);
  }

  miFuncionL();

  console.log(miVariebleLocal); */

/*  <!--                   --> */

/*   Las variables LOCALES tienen prioridad sobre las GLOBALES si tienen el mismo nombre de variable.
 */

//RETONAR UN VALOR DE UNA FUNCION

function sumarReturn(a, b) {
  return a + b;
}

console.log(sumarReturn(4, 5));

function adicion(a, b) {
  console.log(a + b);
}

console.log(adicion(5, 3));

//ASIGNAR UN VALOR RETORNADO

function adicionVR(a, b) {
  return a + b;
}

var resultado = adicionVR(5, 3);
console.log(resultado);

//Concatenando

function crearCadena(lenguajeProgramacion) {
  return "Mi meta es aprender " + lenguajeProgramacion;
}

var miMeta = crearCadena("JavaScript");
console.log(miMeta);
