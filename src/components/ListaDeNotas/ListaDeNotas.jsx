import React, { Component } from "react";
import CardNotas from "../CardNotas/CardNotas";
import "./ListaDeNotas.css";

class ListaDeNotas extends Component {

  render() {
    return (
      <ul className="lista-de-notas">
        {this.props.notas.map((nota, index) => {
          return (
            <li className="lista-de-notas_item" key={index}>
               <CardNotas titulo={nota.titulo} texto={nota.texto}/>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;
