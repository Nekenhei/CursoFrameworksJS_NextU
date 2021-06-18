import React, { createElement } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

const textoLorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer orci diam, iaculis ultricies molestie eu, commodo eget arcu. Donec ut eros auctor, pellentesque purus mollis, elementum sapien. Sed nulla diam, posuere eget scelerisque sit amet, viverra in nibh. Proin lorem augue, luctus vel fringilla luctus, porttitor id nisl. Donec ac purus porttitor, accumsan leo nec, malesuada est. Nulla luctus vel lacus non venenatis. Maecenas faucibus, nibh non iaculis condimentum, enim eros varius magna, pharetra egestas neque arcu ac felis. Quisque sit amet eros pellentesque, congue lacus sed, venenatis urna. Etiam a arcu at sapien sodales ultricies. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris orci est, tempus eu venenatis in, scelerisque nec augue. Duis iaculis nunc tempor commodo eleifend. Nullam quis accumsan arcu. Integer scelerisque lorem ante, fermentum faucibus lacus aliquet quis. Cras fermentum quam mi, sed tempus erat imperdiet sit amet. Duis convallis auctor eros id pretium."



//Taller 1
ReactDOM.render("Aplicación React test", document.getElementsByTagName("title")[0])

const encabezado = React.createElement("h1",{align: "center"},"Aplicación Hecha en React")
ReactDOM.render(encabezado, document.getElementById('encabezado'))

const parrafoLorem = React.createElement("p","",textoLorem)
const enlace = React.createElement("a",{href: "https://www.youtube.com/watch?v=n_Klu8YTub8&ab_channel=PatrikPietschmann", target: "_blank"},"Tema de Batman: The dark knight en piano")

const parrafoCompleto = React.createElement("div","",parrafoLorem,enlace)
ReactDOM.render(parrafoCompleto,document.getElementById("parrafo"))

//Taller 2

const nombre = React.createElement("div",{class: "form-group"},<label for="nombre">Nombres y Apellidos: </label>,
  React.createElement("input",{class: "form-input", placeholder: "Nombres y apellidos completos", type: "text", id: "nombre"}))

const correo = React.createElement("div",{class: "form-group"},<label for="correo">Correo Electronico: </label>,
  React.createElement("input",{class: "form-input", placeholder: "Su dirección de correo electronico", type: "email", id: "correo"}))

const asunto = React.createElement("div",{class: "form-group"},<label for="asunto">Asunto del mensaje: </label>,
  React.createElement("input",{class: "form-input", placeholder: "Asunto de su mensaje", type: "text", id: "asunto"}))

const mensaje = React.createElement("div",{class: "form-group"},<label for="mensaje">Cuerpo del mensaje: </label>,
  React.createElement("input",{class: "form-input", placeholder: "Cuentenos", type: "text", id: "mensaje"}))

const formulario = React.createElement("form",{class: "react-from formulario"},nombre,correo,asunto,mensaje)
ReactDOM.render(formulario,document.getElementById("formulario"))


//Taller 3

var imagen = React.createElement("img",{src: "pan.jpg", width: '500px', height: '500px', class: "center"})

var encabezadoReceta = React.createElement("h1",{align: "center"},"Receta de Pan, fácil de hacer")
//ReactDOM.render(<h1 align='center'> Receta de pan, fácil de hacer</h1>,document.getElementById('titulo'));

var text1 = React.createElement("p",{},"A continuación se indican los ingredientes necesarios para hacer la receta de pan:")

var ingrediente1 = React.createElement('li',{type: 'circle'},
        <b>15 gr</b>,' levadura fresca');
var ingrediente2 = React.createElement('li',{type: 'circle'},
        <b>1 cda</b>,' azúcar');
var ingrediente3 = React.createElement('li',{type: 'circle'},
        <b>1 cda</b>,' sal');
var ingrediente4 = React.createElement('li',{type: 'circle'},
        <b>3 cdas</b>,' de aceite de oliva');
var ingrediente5 = React.createElement('li',{type: 'circle'},
        <b>300 ml</b>,' agua templada', <i> (1 taza 1/2)</i>);
var ingrediente6 = React.createElement('li',{type: 'circle'},
        <b>500 gr</b>,' harina');

var listaIngredientes = [ingrediente1,ingrediente2,ingrediente3,ingrediente4,ingrediente5,ingrediente6]

var ingredientes = React.createElement("div",{},text1,
  React.createElement("ul",{},listaIngredientes))

var pasos = <div className='pasos'>
        <p>Ahora que ya tienes los ingredientes medidos 
        y preparados sigue los siguientes pasos para lograr hacer tu pan.</p>
        <div class='l_pasos'>
            <ol>
                <li>
                Primero hay que hidratar la levadura. Ponn la levadura 
                con un poco de agua, el aceite y el azúcar. Revuelve hasta 
                que este todo disuelto.
                </li>
                <li>
                Incorpora 5 cda. De harina y cuando esté todo integrado 
                deja reposar aprox 10 minutos. Tapado con repasador.
                </li>
                <li>
                Termina de incorporar La harina junto con la sal y el agua.
                </li>
                <li>
                Amasa durante unos 2 minutos aprox. Y deja reposar unos 30 minutos.
                </li>
                <li>
                Saca el aire amasando un poco más y forma un bollo que debes colocar
                en la asadera aceitada.
                </li>
                <li>
                Aplica unos cortes y espolvorea con harina.
                </li>
                <li>
                Tapa con un recipiente apto de horno y aceitado. 
                Esto es para conservar la humedad.
                </li>
                <li>
                Por último lleva al horno recién encendido a 200 grados celsius, 
                fuego arriba y abajo, durante 45 minutos aprox.
                </li>
            </ol>
        </div>
        <p>Ya haz hecho tu primer pan, ahora disfrútalo.</p>
    </div>;


var contenido =[imagen, encabezadoReceta, ingredientes, pasos]

ReactDOM.render(contenido,document.getElementById("receta"))




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
