import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import formularioClass from './formulario';


//Taller 1
var iconsFA = ["fa fa-envelope input-group-text","fa fa-key input-group-text"]
var placeholders = ["Correo Electronico","Contraseña"]
var ids = ["correo","contrasena"]
var types =["email","password"]
var input= ""
var listaInputs = []
var iconactory = React.createFactory("span")
var inputsFactory = React.createFactory("input")
var divFactory = React.createFactory("div")


for (let index = 0; index < ids.length; index++) {
  input = divFactory({className: "input-group inputsPrimero"},
    iconactory({htmlFor: ids[index], className: iconsFA[index]},""),
    inputsFactory({className: "form-control",type: types[index], placeholder: placeholders[index], id: ids[index]}))
  listaInputs[index] = input
}

var boton = divFactory({className: "input-group inputsPrimero"},React.createElement("button",{type: "button",className: "btn btn-primary", align: "center"},"Enviar"))

//const formulario = React.createElement("form",{class: "react-from formulario"},nombre,correo,asunto,mensaje)
const formulario = React.createElement("div",{className: "formulario mx-1"},React.createElement("form","",[listaInputs,boton]))
const titulo = React.createElement("h1",{},"Formulario")

ReactDOM.render([titulo,formulario],document.getElementById("form"))

//Taller 2

var iconsFA2 = ["fa fa-user input-group-text","fa fa-user input-group-text","fa fa-envelope input-group-text","fa fa-key input-group-text","fa fa-home input-group-text",]
var placeholders2 = ["Primer nombre","Apellido","Correo Electronico","Contraseña","Dirección"]
var ids2 = ["nombre","apellido","correo","contrasena","dirección"]
var types2 =["text","text","email","password","text"]
var listaInputs2 = []

for (let index2 = 0; index2 < ids2.length; index2++) {
  if (index2 === (ids2.length - 1)) {
    input = React.createElement(formularioClass,{id: ids2[index2],placeholder: placeholders2[index2],icono: iconsFA2[index2],tipoInput: types2[index2],anchoColumna: "col-md-12"},"")
  }else{
    input = React.createElement(formularioClass,{id: ids2[index2],placeholder: placeholders2[index2],icono: iconsFA2[index2],tipoInput: types2[index2]},"")
  }
  listaInputs2[index2] = input
}

var ciudad = <div className="col-md-6">
                          <label htmlFor="ciudad" className="form-label">Ciudad</label>
                          <input type="text" className="form-control" placeholder="Ciudad" id="ciudad"></input>
                        </div>;

var codigo = <div className="col-md-6">
                          <label htmlFor="codigo" className="form-label">Codigo Postal</label>
                          <input type="text" className="form-control" placeholder="Codigo Postal" id="codigo"></input>
                        </div>;
var terminos = <div className="col-md-6">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                  <label class="form-check-label" for="flexCheckDefault">
                    Estoy de acuerdo con el registro de mis datos personales
                  </label>
                </div>
              </div>

const formulario2 = React.createElement("div",{class: "formulario2 mx-1 my-1"},React.createElement("form","",React.createElement("div",{class: "row"},[listaInputs2,ciudad,codigo,terminos,boton])))
const titulo2 = React.createElement("h1",{},"Registro Personal")

ReactDOM.render([titulo2,formulario2],document.getElementById("form2"))



reportWebVitals();
