import '../../../../node_modules/bootstrap/dist/css/bootstrap.css'
import React, { Component } from 'react'

class itemTabla extends Component{
    render () {
        return(
            <tr>
                <td>{this.props.actividad}</td>
                <td>{this.props.progreso}</td>
            </tr>
        )
    }
}

export default itemTabla