//Accediendo a propiedades de Objetos

/*   var miPerro = {
    nombre: "Gino",
    edad: 5,
    peso: 6,
    raza: "beagle",
  };

  console.log(miPerro.nombre);

  function verificarPropiedad(obj, propiedad) {
    if (obj.hasOwnProperty(propiedad)) {
      return "Propiedad: " + obj[propiedad];
    } else {
      return "El objeto no tiene esta propiedad";
    }
  }

  console.log(verificarPropiedad(miPerro, "ojo"));

  //Objetos complejos

  var ordenesDePizzas = [
    {
      tipo: "margarita",
      tamano: "indivual",
      precio: 5.67,
      toppings: ["extra queso", "championones", "pinas"],
      paraLlevar: true,
    },
    {
      tipo: "cuatro quesos",
      tamano: "familiar",
      precio: 18.34,
      toppings: ["extra queso", "pimenton"],
      paraLlevar: false,
    },
    {
      tipo: "napolitana",
      tamano: "indivual",
      precio: 6.78,
      toppings: [],
      paraLlevar: true,
    },
  ];

  console.log(ordenesDePizzas[2]); */

//Objetos aninados

var miReceta = {
  description: "mi postre favorito",
  costo: 15.6,
  ingredientes: {
    masa: {
      harina: "100 gramos",
      sal: "1 cucharadita",
      agua: "1 taza",
    },
    cobertura: {
      azucar: "120 gramos",
      chocolate: "4 cucharadas",
      mantequilla: "200 gramos",
    },
  },
};

//console.log(miReceta.ingredientes.masa.harina);

//

var misPlantas = [
  {
    tipo: "flores",
    lista: ["rosas", "tulipanes", "dientes de leon"],
  },
  {
    tipo: "arboles",
    lista: ["abeto", "pino", "abedul"],
  },
];

var primeraFlor = misPlantas[0].lista[0];
console.log(primeraFlor);
