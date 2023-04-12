import React from "react";
import "../stylesheets/Testimonio.css";

export function Testimonio(props) {
  return (
    <div className="contendor-testimonio">
      <img
        className="imagen-testimonio"
        src={require(`../images/testimonio-${props.imagen}.png`)}
        alt="Foto de messsi"
        width={450}
      />

      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">
          {" "}
          <strong>{props.nombre}</strong> en {props.pais}{" "}
        </p>
        <p className="cargo-testimonio">
          {" "}
          {props.cargo} en <strong>{props.empresa} </strong>
        </p>
        <p className="texto-testimonio">{props.testimonio}</p>
      </div>
    </div>
  );
}
