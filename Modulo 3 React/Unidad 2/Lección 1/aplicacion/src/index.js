import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    //<App isHidden/>, habilitar el isHidden es pasar un isHidden =true y la pagina no renderiza
    <App mostrarEstado={true}
    mensaje='Este es el estado del componente, entregado desde el padre.'/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
