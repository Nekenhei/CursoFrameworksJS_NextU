import React, { Component } from 'react'

export default class NearbyPlacesComponent extends Component {
    constructor(props){
        super(props)
        this.state =""
        this.destino = this.destino.bind(this)
    }

    destino = (lugar) => {
        this.props.parentCallback(lugar);
    }

    render() {
        return (
            <div className="container" id="nearBydiv">
                <div className="row">
                    {this.props.data.map((lugar,id) => {
                            return(<div className="col-4 p-2" id={id} key={id}>
                                <strong>Nombre: </strong>{lugar.nombre} <br />
                                <strong>Calificacion: </strong>{lugar.calificacion} <br />
                                <div className="col-auto px-1 text-center"><img src={lugar.fotos} className="imagen"/></div>
                                <div className="d-grid gap-2 px-1 my-1">
                                    <div className='btn btn-light text-center' onClick={() => this.destino(lugar)}>Seleccionar Destino</div>
                                </div>
                                </div>)
                        })}
                </div>
            </div>
        )
    }
}


