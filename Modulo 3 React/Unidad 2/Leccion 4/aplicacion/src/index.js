import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Gantt from './components/gantt/gantt'
import ItemTabla from './components/gantt/item/item';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.css'

var listaActividades = []


for (var index = 1; index <= 12; index++) {

    var progresoTemp = Math.floor(Math.random() * 101)
    var esperadoTemp = Math.floor(Math.random() * 101)
    var estiloTemp = ''
    if (progresoTemp-esperadoTemp < -10){
        estiloTemp = 'bg-danger';
      } else if (progresoTemp-esperadoTemp <= -5){
        estiloTemp='bg-warning';
      } else if (progresoTemp-esperadoTemp < 0){
        estiloTemp='bg-info';
      } else if (progresoTemp-esperadoTemp >= 5) {
        estiloTemp='bg-success';
      }



    listaActividades[index] = <ItemTabla actividad={"Actividad "+index} progreso ={progresoTemp} esperado ={esperadoTemp} estilo = {estiloTemp}/>
}

var tabla = <Gantt> {listaActividades} </Gantt>


ReactDOM.render(tabla,document.getElementById("gantt"))




reportWebVitals();
