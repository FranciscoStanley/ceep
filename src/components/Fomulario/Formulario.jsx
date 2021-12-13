import React, { Component } from "react";
import "./Formulario.css";

class Formulario extends Component {
  constructor(props) {
    super(props);
    this.titulo = "";
    this.texto = "";
  }

  _handleMudancaTitulo(event) {
    event.stopPropagation();
    this.titulo = event.target.value;
  }

  _handleMudancaTexto(event) {
    event.stopPropagation();
    this.texto = event.target.value;
  }

  _criarNota(event) {
    event.preventDefault();
    event.stopPropagation();
    this.props.criarNota(this.titulo, this.texto);
  }

  render() {
    return (
      <form
        className="formulario-cadastro"
        onSubmit={this._criarNota.bind(this)}
      >
        <input
          type="text"
          placeholder="Digite aqui"
          className="formulario-cadastro_input"
          onChange={this._handleMudancaTitulo.bind(this)}
        />
        <textarea
          rows={15}
          className="formulario-cadastro_input"
          placeholder="Descrição"
          onChange={this._handleMudancaTexto.bind(this)}
        />
        <button className="formulario-cadastro_input formulario-cadastro_submit">
          Criar nota
        </button>
      </form>
    );
  }
}

export default Formulario;
