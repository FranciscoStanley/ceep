import React, { Component } from "react";
import "./CardNotas.css";
import { ReactComponent as DeleteSVG } from "../../assets/img/deleteSVG.svg";

class CardNotas extends Component {

  apagar(){
    const indice = this.props.indice;
    this.props.apagarNota(indice);
  }

  render() {
    return (
      <section className="card-notas">
        <header className="card-notas_cabecalho">
          <h3 className="card-notas_titulo">{this.props.titulo}</h3>
          <DeleteSVG onClick={this.apagar.bind(this)}/>
          <h4>{this.props.categoria}</h4>
        </header>
        <p className="card-notas_texto">{this.props.texto}</p>
      </section>
    );
  }
}

export default CardNotas;
