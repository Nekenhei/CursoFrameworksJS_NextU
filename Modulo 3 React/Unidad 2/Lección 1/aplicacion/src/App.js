import logo from './logo.svg';
import './App.css';
import { Component } from 'react';


//hay que convertir en clase la funcion, se añade el extends y luego, 
//se agrega el return dentro de un render(){}
class App extends Component {
 
constructor(props){
  super(props)
  this.state={
    mostrarEstado: props.mostrarEstado,
    mensaje: props.mensaje,
    mostrarPagina: props.mostrarPagina  
  };
}

ocultar = () =>
{
  this.setState({
    mostrarPagina: true
  })
}

mostrar = () =>
{
  this.setState({
    mostrarPagina: false
  })
}

  render(){

    if (this.state.mostrarPagina) {
      return (
        <div>
          <button type="button" onClick={this.mostrar}>Mostrar Pagina</button>
        </div>
      )
    }
     
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            <p style={{display:this.state.mostrarEstado ? "block" : "none"}}>
              {this.state.mensaje}
            </p>
          </header>
        </div>
        <div>
          <button type="button" onClick={this.ocultar}>Ocultar Pagina</button>
        </div>
      </div>
    );
  }
}

export default App;
