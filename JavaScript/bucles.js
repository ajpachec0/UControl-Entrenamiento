//Ciclo While
//No tiene un numero definido de iteraciones, se ejeucta mientras el condicional sea verdadero

/* var i = 0;

while (i <= 3) {
  console.log("Hola Mundo!");
  i++; //Se incremetan i cada vez que el codigo se ejecuta
} */

/* var miArreglo = [];
var i = 0;

/* console.log(miArreglo);
 */
/* while (i < 10) {
  miArreglo.push(i);
  i++;
}

console.log(miArreglo);

var numeros = [2, 3, 4, 5, 6, 7, 8, 34];

while (numeros.length > 4) {
  numeros.pop();
}

console.log(numeros); */

// ---------------------------------------------------- //

// CICLO FOR //

var miArreglo = [];

for (var i = 0; i < 15; i++) {
  miArreglo.push(i);
}

// console.log(miArreglo);

var imparArreglo = [];

for (var i = 1; i < 50; i += 2) {
  //i se incicializa en 1, por lo que por cada iteracion realizada a i se le sumara un valor de 2, y como esta incializada en 1, todos los numeros mostrados seran impares, hasta llegar a que la condicion dada sea verdadera.
  imparArreglo.push(i);
}

//console.log(imparArreglo);

var parArreglo = [];

for (var i = 0; i <= 20; i += 2) {
  //Lo mismo del ejercicio anterior, solo que ahora i esta inicializada en 0, por lo que al sumarle 2 en cada iteracion los numeros seran pares.
  parArreglo.push(i);
}

//console.log(parArreglo);

// CICLO FOR - CONTAR HACIA ATRAS //

for (var i = 15; i >= 10; i -= 2) {
  // console.log(i);
}

var myArray = [];

for (var i = 10; i > 0; i -= 2) {
  myArray.push(i);
}

//console.log(myArray);

var unArreglo = [4, 6, 8, 2];

var total = 0;

for (var i = 0; i < unArreglo.length; i++) {
  /*   console.log("Iteracion: " + i);
  console.log(unArreglo[i]);
 */ total += unArreglo[i];
}

//console.log(total);

var lenguajes = ["JavaScript", "Python", "Java", "C++"];

for (var i = 0; i < lenguajes.length; i++) {
  //console.log(lenguajes[i].toUpperCase());
}

function contarNumerosPares(arreglo) {
  var total = 0;
  for (var i = 0; i < arreglo.length; i++) {
    if (arreglo[i] % 2 == 0) {
      total++;
    }
  }
  return total;
}

//console.log(contarNumerosPares([5, 3, 1, 2, 4, 8, 10, 12, 15, 11, 17, 18, 19]));

// CICLOS FOR ANIDADOS

var arregloAnidado = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (var i = 0; i < arregloAnidado.length; i++) {
  console.log("> Nueva iteracion");
  var newArregloA = arregloAnidado[i];
  console.log("Arreglo: " + newArregloA);

  for (var j = 0; j < newArregloA.length; j++) {
    console.log(">>> Ciclo anidado");
    console.log("Elemento: " + newArregloA[j]);
    console.log(newArregloA[j]);
  }
}
// ------------------------------------------ //

// CICLO DO - WHILE

var x;

x = 5;

do {
  console.log(x);
  x++;
} while (x < 10);
