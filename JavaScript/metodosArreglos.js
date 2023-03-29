var estaciones = ["Invierno", "Otono", "Primeravera"];

//Metodo .push() agregar un elemento al final del arreglo
estaciones.push("Verano");
console.log(estaciones);

//Metodo .pop() remueve el ultimo elemento del arreglo
estaciones.pop();
console.log(estaciones);

//Metodo .shift() remueve el PRIMER elemento de un arreglo

var estacionesShift = ["Invierno", "Otono", "Primeravera", "Verano"];

estacionesShift.shift();
console.log(estacionesShift);

//Metodo .unshift() agrega un elemento al PRIMER indice del arreglo.

var estacionesUnshift = ["Invierno", "Otono", "Primeravera"];

estacionesUnshift.unshift("Verano");
console.log(estacionesUnshift);
