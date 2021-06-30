import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Item from './Components/Lista/item'
import Lista from './Components/Lista/lista'
import Formulario from "./Components/Formulario/formulario"
import '../node_modules/bootstrap/dist/css/bootstrap.css'

//Taller 1 
var items = []

var itemsValues =  ['Hacking with React',
'React Native Express',
'Mastering Modular JavaScript',
'Practical Modern JavaScript',
'U&I with React',
'Developing with Angular',
'The Road to learn React',
'React.js for the Visual Learner',
'Recipes with Angular.js',
'Exploring ES6',
'What You Need to Know about JavaScript',
'Object-Oriented JavaScript – Second Edition',
'The JavaScript Way',
'Thinking in JavaScript',
'What You Need To Know About Node.js',
'Angular 2 Succinctly']

itemsValues.forEach((item, id) => {
    items[id] = <Item itemId={id}>{item}</Item>
})


var lista = <Lista> {items} </Lista>

ReactDOM.render(lista,document.getElementById("lista"))

//Taller 2 Formulario dinamico

ReactDOM.render(<Formulario></Formulario>,document.getElementById("formulario"))


reportWebVitals();
