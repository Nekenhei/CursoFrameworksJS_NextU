import '../../../../node_modules/bootstrap/dist/css/bootstrap.css'
import React, { Component } from 'react'

class ItemTabla extends Component{

    
    render () {
        return(
            <tr>
                <td>{this.props.actividad}</td>
                <td style={{"textAlign":"center"}}>{this.props.esperado}</td>
                <td style={{"textAlign":"center"}}>{this.props.progreso}</td>
                <td className="align-middle">
                    <div className="progress">
                        <div className={"progress-bar progress-bar-striped " + this.props.estilo} role="progressbar" style={{width: this.props.progreso+"%"}} aria-valuenow={this.props.progreso} aria-valuemin="0" aria-valuemax="100">{this.props.progreso}%</div>
                    </div>
                </td>
            </tr>
        )
    }
}

export default ItemTabla