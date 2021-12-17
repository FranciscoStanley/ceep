import React, { Component } from "react";
import "./ListaDeCategorias.css";

class ListaDeCategorias extends Component {
  
    _handlerEventInput(e) {
    console.log(e.key);
    if (e.key === "Enter") {
      console.log("adicionar categoria");
    }
  }

  render() {
    return (
      <div className="lista-categorias">
        <ul className="lista-categorias_lista">
          <li className="lista-categorias_item">Categorias</li>
          <li className="lista-categorias_item">Categorias</li>
          <li className="lista-categorias_item">Categorias</li>
          <li className="lista-categorias_item">Categorias</li>
        </ul>
        <input
          type="text"
          className="lista-categorias_input"
          placeholder="Adicionar Categoria"
          onKeyUp={this._handlerEventInput.bind(this)}
        />
      </div>
    );
  }
}

export default ListaDeCategorias;
