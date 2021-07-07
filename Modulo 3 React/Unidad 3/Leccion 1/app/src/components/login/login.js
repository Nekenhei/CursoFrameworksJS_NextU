import React, { Component } from 'react'
import '../../assets/styles/login.css'


export default class Login extends Component {

    constructor(props){
        super(props)
        this.state = {
            msjError: "",
            ingreso: false
        }
    } 

    onClick = () => {
        const email = document.getElementById("email").value
        const contrasena = document.getElementById("contrasena").value
        this.validarIngreso(email, contrasena)
    }

    validarIngreso(email, contrasena){
        const emailValido = this.validaEmail(email)
        if (contrasena && emailValido){
            this.setState({msjError:"",ingreso: true})
        }else if(!emailValido){
            this.setState({msjError: "Correo eletronico invalido"})
        }else{
            this.setState({msjError: "Debe ingresar la contraseña"})
        }
    }

    validaEmail(email){
        return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email));
    }

    componentDidUpdate(){
        if (this.state.msjError) {
            alert(this.state.msjError)
        }
    }

    render() {
            if(this.state.ingreso) {
                return(
                    <div className="container px-4 py-5 text-center" id="featured-3">
                        <h2 className="pb-2 border-bottom">¡Bienvenido!</h2>
                        <div className="row ms-auto row-cols-1 row-cols-lg-3">
                            <div className="feature col container">
                                <h2>User Admin</h2>
                                <p>Aquí encontrarás las tareas de administración de tu usuario.</p>
                            </div>
                        </div>
                    </div>
                )
            }else{
                return(
                    <div className="container ">                           
                        <div className="form-signin container my-1 ancho text-center">
                            <form>
                                <h1 className="h3 mb-3 fw-normal">Por favor inicie sesión</h1>

                                <div className="form-floating pb-1">
                                    <input type="email" className="form-control" id="email" placeholder="nombre@ejemplo.com"></input>
                                    <label htmlFor="email">Email address</label>
                                </div>
                                <div className="form-floating pb-1">
                                    <input type="password" className="form-control" id="contrasena" placeholder="Contraseña"></input>
                                    <label htmlFor="contrasena">Password</label>
                                </div>
                                <button className="w-100 btn btn-lg btn-primary" type="submit" onClick={this.onClick}>Iniciar Sesión</button>  
                            </form>
                        </div>
                    </div>
                    )
                
            }
    }
}
