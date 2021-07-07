import React, { Component } from 'react'
import "../../../node_modules/font-awesome/css/font-awesome.css"


export default class NuevaTarea extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-3"><input type="text" name="tarea" id="tarea" className="form-control pb-1" placeholder="Tarea"/></div>
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
                    <button href="" className="btn btn-info"><i className="fa fa-plus-square"></i></button>
                </div>

            </div>
        )
    }
}
