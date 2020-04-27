import React from "react";
import { Titulo } from "./Titulo";
import Buscador from "./Buscador";

export default ({ metodo }) => (
    <header>
      <Titulo>Cosmic Movies</Titulo>
      <div className="buscador-wrapper">
        <Buscador onResultados={metodo} />
      </div>
    </header>
  )
