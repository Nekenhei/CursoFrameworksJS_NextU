import React, { Component } from 'react'

export default class ListaTareas extends Component {
    render() {
        return (
            <tr id={this.props.trIndex}>
                <th scope="row">{this.props.children.nombre}</th>
                <td>{this.props.children.fechaIni}</td>
                <td>{this.props.children.fechaFin}</td>
            </tr>
        )
    }
}
