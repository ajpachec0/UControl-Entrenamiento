// OPERADOR TERNARIO

function retornarMinio(x, y) {
  return x < y ? x : y;
}

/* 
console.log(retornarMinio(5, 10));
console.log(retornarMinio(10, 4)); */

var a = 5;
var b = 9;

/* console.log(a > b ? a + 2 : b * 3);
 */

function compararNumeros(a, b) {
  return a == b
    ? "a y b son iguales"
    : a > b
    ? "a es mayor que b"
    : "b es mayor que a";
}

console.log(compararNumeros(87, 15));
