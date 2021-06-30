import React, { Component } from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../../node_modules/font-awesome/css/font-awesome.css'
import './formulario.css';


class Formulario extends Component{

    constructor(props){
        super(props)
        this.state = {
            hecho:false,
            nombre: "",
            errorMsj:""
        }
    }

    registro = () =>{
        this.setState({
            hecho:true,
            nombre: this.nombre.value
        })
    }

    nuevoRegistro = () =>{
        this.setState({
            hecho:false,
            nombre:""
        })
    }

    render() {

        if (this.state.hecho) {
            return(
                <div className="login ms-auto container">
                    <h3>Registro Satisfactorio</h3>
                    <p>Gracias por registrarte</p>
                    <p><b>{this.state.nombre}</b></p>
                    <div className="btn-group pb-3">
                        <a className="btn btn-secondary" onClick={this.nuevoRegistro}>
                            <i className="fa fa-user fa-fw"></i>Nuevo Registro
                        </a>
                    </div>
                </div>
            )
        }

        return(
            <div className="border rounded login ms-auto container">
                <h2>Registro</h2>
                <form action="">
                <div className="input-group pb-3">
                        <span className="input-group-text">
                            <i className="fa fa-address-card fa-fw"></i>
                        </span>
                        <input type="text" name="nombre" id="nombre" className="form-control" placeholder="Nombre Completo" ref={input => this.nombre = input} />
                    </div>
                    <div className="input-group pb-3">
                        <span className="input-group-text">
                            <i className="fa fa-envelope-o fa-fw"></i>
                        </span>
                        <input type="text" name="correo" id="correo" className="form-control" placeholder="Correo Electronico" ref={input => this.correo = input} />
                    </div>
                    <div className="input-group pb-3">
                        <span className="input-group-text">
                            <i className="fa fa-user fa-fw"></i>
                        </span>
                        <input type="text" name="usuario" id="usuario" className="form-control" placeholder="Nombre de usuario" ref={input => this.usuario = input} />
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="input-group pb-3">
                                <span className="input-group-text">
                                    <i className="fa fa-key fa-fw"></i>
                                </span>
                                <input type="password" name="contrasena" id="contrasena" className="form-control" placeholder="Contraseña" ref={input => this.clave = input} />
                            </div>
                        </div>
                        <div className="col">
                            <div className="input-group pb-3">
                                <span className="input-group-text">
                                    <i className="fa fa-key fa-fw"></i>
                                </span>
                                <input type="password" name="confirmacion" id="confirmacion" className="form-control" placeholder="Confirme la contraseña" ref={input => this.confirmacion = input} />
                            </div>
                        </div>
                    </div>
                    <div className="btn-group pb-3 d-grid gap-2">
                        <a className="btn btn-secondary" onClick={this.registro}>
                            <i className="fa fa-check fa-fw"></i>Registrar
                        </a>
                    </div>
                </form>
            </div>
        )
    }
}

export default Formulario