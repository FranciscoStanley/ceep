import React, { Component } from "react";
import "./CardNotas.css";

class CardNotas extends Component {
  render() {
    return (
      <section className="card-notas">
        <header className="card-notas_cabecalho">
          <h3 className="card-notas_titulo">{this.props.titulo}</h3>
        </header>
        <p className="card-notas_texto">{this.props.texto}</p>
      </section>
    );
  }
}

export default CardNotas;
