import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Gantt from './components/gantt/gantt'
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.css'

var listaActividades = []

for (let index = 0; index <= 12; index++) {
    listaActividades[index].push({actividad: "actividad "+index+1,progreso: Math.floor(Math.random() * 101)})
    
}

ReactDOM.render(<Gantt />,document.getElementById("gantt"))




reportWebVitals();
