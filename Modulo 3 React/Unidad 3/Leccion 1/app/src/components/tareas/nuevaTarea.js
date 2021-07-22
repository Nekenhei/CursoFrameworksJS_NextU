import React, { Component } from 'react'
import "../../../node_modules/font-awesome/css/font-awesome.css"


export default class NuevaTarea extends Component {

    vacio = (elemento) => {
        return (elemento === '');
    }

    agregarTarea = (evento) => {
        const iTarea = document.getElementById("tarea").value
        const iFechaInicial = document.getElementById("fechaIni").value
        const iFechaFinal = document.getElementById("fechaFin")
        if (this.vacio(iTarea) ||
            this.vacio(iFechaInicial) ||
            this.vacio(iFechaFinal)) {
            alert("Debe llenar todos los campos")
            return
        }
        const tarea = {
            nombre: iTarea,
            fechaIni: iFechaInicial,
            fechaFin: iFechaFinal
        }
        document.getElementById('tarea').value = ''
        this.props.agregarTarea(tarea)
    }



    render() {
        return (
            <div className="row">
                <div className="col-3"><input type="text" name="tarea" id="tarea" className="form-control pb-1" placeholder="Tarea" /></div>
                <div className="col-4">
                    <div className="input-group">
                        <span className="input-group-text" id="fechaIniSpan"><i className="fa fa-calendar fa-fw"></i> </span>
                        <input type="text" name="" id="fechaIni" className="form-control pb-1" placeholder="Fecha Inicial" /></div>
                </div>
                <div className="col-4">
                    <div className="input-group">
                        <span className="input-group-text" id="fechaFinSpan"><i className="fa fa-calendar fa-fw"></i> </span>
                        <input type="text" name="" id="fechaFin" className="form-control pb-1" placeholder="Fecha Final" />
                    </div>
                </div>
                <div className="col-1">
                    <button onClick={this.agregarTarea} className="btn btn-info"><i className="fa fa-plus-square"></i></button>
                </div>

            </div>
        )
    }
}
