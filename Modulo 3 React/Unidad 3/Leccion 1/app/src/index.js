import React from 'react';
import ReactDOM from 'react-dom';
import '../src/assets/styles/index.css';
import reportWebVitals from './reportWebVitals';
import '../node_modules/font-awesome/css/font-awesome.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Header from './templates/header';
import Tabs from './components/tallerTabs/tabs';
import Login from './components/login/login';
import Home from './views/home';
import TareasVw from './views/tareasVw';

const routes = {
    home: <Home></Home>,
    login: <Login></Login>,
    tareas: <TareasVw></TareasVw>
}

const tabsList = [
    {name:"Home",
    contenido: routes.home},
    {name:"Login",
    contenido: routes.login},
    {name:"Tareas",
    contenido: routes.tareas},
    {name:"Sobre nosotros",
    contenido: "Contenido de la pestaña 4"},
    {name:"Contacto",
    contenido: "Contenido de la pestaña 5"}
]

ReactDOM.render(<Header></Header>, document.getElementById("header"))

ReactDOM.render(<Tabs tabIndexActive={2} tabsList={tabsList}></Tabs>, document.getElementById("body"))


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
