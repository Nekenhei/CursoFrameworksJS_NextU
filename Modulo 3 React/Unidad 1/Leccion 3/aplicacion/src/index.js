import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import '../node_modules/font-awesome/css/font-awesome.min.css';


//Taller 1

var header = <header>
  <h1>Leccion 3 React</h1>
  <div id="navbar"></div>
</header>;

var listaDeMateriasElementos=[]
var listaDeMaterias = ["Fisica", "Quimica", "Biologia", "Ingles", "Sociales", "Historia", "Deporte", "Etica","Computacion","Contabilidad","Artes","Musica"]
var materiasFactory = React.createFactory("li")
var materia =""

/*
var materia1 = materiasFactory({},React.createElement("a",{href: ""},"Fisica"))
var materia2 = materiasFactory({},React.createElement("a",{href: "",id: "active"},"Quimica"))
var materia3 = materiasFactory({},React.createElement("a",{href: ""},"Biología"))
var materia4 = materiasFactory({},React.createElement("a",{href: ""},"Inglés"))
var materia5 = materiasFactory({},React.createElement("a",{href: ""},"Sociales"))
var materia6 = materiasFactory({},React.createElement("a",{href: ""},"Historia"))
var materia7 = materiasFactory({},React.createElement("a",{href: ""},"Deporte"))
var materia8 = materiasFactory({},React.createElement("a",{href: ""},"Etica"))
var materias = [materia1,materia2,materia3,materia4,materia5,materia6,materia7,materia8]
var listaDeMateriasHTML = React.createElement("ul",{id: "materias"},materias)
*/

//Se edita el taller inicial para usar for y recursividad de variables

for (let index = 0; index < listaDeMaterias.length; index++) {
  if(index===1){
    materia = materiasFactory({},React.createElement("a",{href: "", id: "active"},listaDeMaterias[index]))
  }else{
    materia = materiasFactory({},React.createElement("a",{href: ""},listaDeMaterias[index]))
  }
  listaDeMateriasElementos[index] = materia
}

var listaDeMateriasHTML = React.createElement("ul",{id: "materias"},listaDeMateriasElementos)

var contenido=React.createElement("section",{id: "contenido"},
<p>Ejemplo de pestañas creadas con elementos estáticos de React y CSS.</p>,
<p>La química es la ciencia que estudia tanto la composición, como la estructura y las propiedades de 
    la materia como los cambios que esta experimenta durante las reacciones químicas 
    y su relación con la energía.​</p>,
React.createElement('p','',
React.createElement('a',{href:''},
<img src="https://conceptodefinicion.de/wp-content/uploads/2014/07/Qu%C3%ADmica.jpg" alt="Química"/>)));


ReactDOM.render([header,listaDeMateriasHTML, contenido],document.getElementById("ejercicio1"))


//Taller 2


var iconsFA = ["fa fa-user icon","fa fa-envelope icon","fa fa-key icon"]
var placeholders = ["Nombre De Usuario","Correo Electronico","Contraseña"]
var ids = ["nombre","correo","contrasena"]
var types =["text","email","password"]
var input= ""
var listaInputs = []
var iconactory = React.createFactory("i")
var inputsFactory = React.createFactory("input")
var divFactory = React.createFactory("div")


for (let index = 0; index < ids.length; index++) {
  input = divFactory({class: "form-group"},
    iconactory({for: ids[index], class: iconsFA[index]},""),
    inputsFactory({class: "form-input",type: types[index], placeholder: placeholders[index], id: ids[index]}))
  listaInputs[index] = input
}

var boton = divFactory({class: "form-group"},React.createElement("button",{type: "button",class: "form-input btn"},"Enviar"))




//const formulario = React.createElement("form",{class: "react-from formulario"},nombre,correo,asunto,mensaje)
const formulario = React.createElement("div",{class: "formulario"},<h3 align="left">Formulario de Registro</h3>,React.createElement("form","",[listaInputs,boton]))
const titulo = React.createElement("h2",{},"Formulario")



ReactDOM.render([titulo,formulario],document.getElementById("ejercicio2"))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
