import React, { Component } from 'react'
import ListaTareas from '../components/tareas/listaTareas'
import NuevaTarea from '../components/tareas/nuevaTarea'

export default class TareasVw extends Component {

    constructor(props) {
        super(props)
        this.state = { tareas: this.tareas }
    }

    tareas = [{
        nombre: "Tarea 1",
        fechaIni: "19/08/2018",
        fechaFin: "20/08/2018"

    }, {
        nombre: "Tarea 2",
        fechaIni: "16/08/2018",
        fechaFin: "20/08/2018"

    }, {
        nombre: "Tarea 3",
        fechaIni: "01/08/2018",
        fechaFin: "08/08/2018"

    }, {
        nombre: "Tarea 4",
        fechaIni: "19/07/2018",
        fechaFin: "29/07/2018"

    }, {
        nombre: "Tarea 5",
        fechaIni: "15/10/2018",
        fechaFin: "16/10/2018"

    }, {
        nombre: "Tarea 6",
        fechaIni: "18/11/2018",
        fechaFin: "20/08/2019"

    },]

    agregarTarea = (tarea) => {
        this.setState((prevState) => {
            const tempTareas = prevState.tareas
            tempTareas.push(tarea)
            return { tareas: tempTareas }
        })
    }



    render() {
        const renderTareas = this.state.tareas.map((tarea, index) => { return (<ListaTareas key={index} trIndex={index}>{tarea}</ListaTareas>) })

        return (
            <div className="container">
                <div className="text-center">
                    <h1>Lista de Tareas</h1>
                    <hr />
                    <table className="table table-info table-striped table-sm table-hover pb-3">
                        <thead>
                            <tr>
                                <th scope="col">Tarea</th>
                                <th scope="col">Fecha Inicio</th>
                                <th scope="col">Fecha Fin</th>
                            </tr>
                        </thead>
                        <tbody>
                            {renderTareas}
                        </tbody>
                    </table>
                    <form action="">
                        <NuevaTarea agregarTarea={this.agregarTarea}></NuevaTarea>
                    </form>
                </div>
            </div>
        )
    }
}
