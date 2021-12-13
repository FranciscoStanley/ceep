import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas/ListaDeNotas";
import Formulario from "./components/Fomulario/Formulario";
import "./assets/App.css";
import "./assets/index.css";

class App extends Component {
  
  constructor() {
    super();
    this.notas = [];
    this.state = {}
  }

  criarNota(titulo, texto) {
    const novaNota = {titulo, texto};
    this.notas.push(novaNota);
    this.setState({
      notas:this.notas
    })
  }

  render() {
    return (
      <div className="conteudo">
        <Formulario criarNota={this.criarNota.bind(this)} />
        <ListaDeNotas notas= {this.notas}/>
      </div>
    );
  }
}

export default App;
