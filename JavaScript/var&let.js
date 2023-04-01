let campista = "James";
campista = "David";

console.log(campista);

// Funciones flecha

//  Que es una funcion flecha?
//  Es una funcion anonima que se puede guardar en una variable

//  Sintaxis
//  (parametros) => {codigo a ejecutar}

//  Ejemplo
//  (a, b) => {return a + b}

//  Ejemplo 2
//  (a, b) => a + b

//  Ejemplo 3
//  a => a * 2

//  Ejemplo 4
//  () => console.log("Hola mundo")

//  Ejemplo 5
//  (nombre) => console.log(`Hola ${nombre}`)

//  Ejemplo 6
//  (a, b) => {
//      let c = a + b;
//      return c;
//  }

//Valores por defecto para parametros

//  Sintaxis
//  (parametro = valor) => {codigo a ejecutar}

//  Ejemplo
//  (a, b = 2) => a + b

//  Ejemplo 2
//  (a, b = 2, c = 4) => a + b + c

// que hace el metodo reduce?
//  El metodo reduce() ejecuta una funcion reductora sobre cada elemento de un array, devolviendo como resultado un unico valor.

//  Sintaxis
//  array.reduce((total, valorActual, indice, array) => {
//      return expresion
//  })

//  Ejemplo
//  const numeros = [1, 2, 3, 4, 5];
//  const total = numeros.reduce((total, numero) => {
//      return total + numero;
//  }, 0);

//  console.log(total);

//  En este ejemplo, se creo un array de numeros, luego se creo una variable llamada total, la cual va a ser igual al array numeros, pero con el metodo reduce, el cual va a ejecutar una funcion reductora sobre cada elemento del array numeros, devolviendo como resultado un unico valor, en este caso, la suma de todos los numeros del array numeros.
