//Sentencia SWITCH
function clasificarValor(valor) {
  var respuesta;
  switch (valor) {
    case 1:
      respuesta = "alpha";
      break;
    case 2:
      respuesta = "beta";
      break;
    case 3:
      respuesta = "gamma";
      break;
    case 4:
      respuesta = "delta";
      break;
  }
  return respuesta;
}

var resultado = clasificarValor(4);
console.log(resultado);

//Sentencia Switch con cadena de caracteres
var producto = "helado";

switch (producto) {
  case "pizza":
    console.log("La pizza basica cuesta $7.99");
    break;
  case "hamburguesa":
    console.log("Las hamburguesas cuestan $6.74");
    break;
  case "helado":
    console.log("El helado cuesta $47");
    break;
}

console.log("Luego de switch");

//Switch opcion predeterminada
function seleccionarIdioma(valor) {
  var idioma;
  switch (valor) {
    case 1:
      idioma = "Espanol";
      break;
    case 2:
      idioma = "Frances";
      break;
    case 3:
      idioma = "Italiano";
      break;
    default:
      idioma = "Ingles";
      break;
  }
  return idioma;
}

console.log(seleccionarIdioma(3));

//Switch multiples casos

function clasificarVolumen(valor) {
  var volumen;
  switch (valor) {
    case 1:
      volumen = "bajo";
      break;

    case 2:
    case 3:
      volumen = "intermedio";
      break;

    case 4:
    case 5:
    case 6:
      volumen = "alto";
      break;
  }
  return volumen;
}

console.log(clasificarVolumen(2));

//Utilizando la funcion seleccionarIdioma()

function selectIdiom(valor) {
  var idioma;

  switch (valor) {
    case 1:
      idioma = "Espanol";
      break;
    case 2:
      idioma = "Frances";
      break;
    case 3:
      idioma = "Italliano";
      break;
    default:
      idioma = "Ingles";
      break;
  }
  return idioma;
}

console.log(selectIdiom(2));
