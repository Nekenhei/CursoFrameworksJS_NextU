import React, { Component } from 'react'

export default class Configuracion extends Component {
  constructor(props){
    super(props);
    this.state={ingreso:this.props.ingreso}
  }
  render() {
    if (this.props.ingreso)
      return(
        <div>
            Aquí se debe mostrar las opciones de configuración
        </div>
      )
    else
      return (
        <div className='m-3 p-3' align='center'>
            <p className='fa fa-warning size'/>
            <h2>No esta logeado en el sistema</h2>
            <p>Debe ingresar con usuario y contraseña para hacer 
                uso de esta funcionalidad</p>
        </div>
    )
  }
}
