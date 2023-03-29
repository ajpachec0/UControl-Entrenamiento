var coleccionDeDiscos = {
  7853: {
    tituloAlbum: "Bee Gees Greatest",
    artista: "Bee Gees",
    canciones: ["Stayin' Alive"],
  },
  5439: {
    tituloAlbum: "ABBA Gold",
  },
};

function actualizarDiscos(discos, id, propiedad, valor) {
  if (valor === "") {
    delete discos[id][propiedad];
  } else if (propiedad === "canciones") {
    discos[id][propiedad] = discos[id][propiedad] || [];
    discos[id][propiedad].push(valor);
  } else {
    discos[id][propiedad] = valor;
  }
}

console.log(coleccionDeDiscos[7853].artista);

actualizarDiscos(coleccionDeDiscos, 7853, "artista", "");

console.log(coleccionDeDiscos[7853].artista);
actualizarDiscos(coleccionDeDiscos, 7853, "artista", "Tercero Artista");

console.log(coleccionDeDiscos[7853].artista);
/* console.log(coleccionDeDiscos[7853]);
 */
