import "./App.css";
import { Testimonio } from "./components/Testimonio";

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Esto es lo que dicen nuestro alumnos</h1>
        <Testimonio
          nombre="Lionel Messi"
          pais="Argentina"
          imagen="messi"
          cargo="Futbolista"
          empresa="Paris Saint Germain"
          testimonio=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
        />
        <Testimonio
          nombre="Stephen Curry"
          pais=" Estados Unidos"
          imagen="curry"
          cargo=" Basquetbolista"
          empresa="   Golden State Warriors"
          testimonio=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
        />
        <Testimonio
          nombre="Checo Pérez"
          pais=" México"
          imagen="checo"
          cargo=" Piloto de Fórmula 1"
          empresa="Racing Point"
          testimonio="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
        />
      </div>
    </div>
  );
}

export default App;
