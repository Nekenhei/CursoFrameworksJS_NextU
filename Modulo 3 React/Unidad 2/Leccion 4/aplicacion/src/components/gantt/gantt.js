import React, { Component } from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'

class Gantt extends Component{
    render(){
        return(
            <div className="row">
                <div className="row">
                    <div className="col">
                        <h1>Proyecto: Aplicación web de Gestión de Proyectos</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col mt-3">
                        <table className="table table-sm  table-striped">
                            <thead className="bg-primary table-dark" style={{"text-align": "center"}}>
                                <th scope="col">Actividad</th>
                                <th scope="col">Progreso</th>
                            </thead>
                            <tbody>
                                {this.props.children}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default Gantt