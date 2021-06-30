import React, { Component} from "react"
import '../../../node_modules/font-awesome/css/font-awesome.css'

export default class Lista extends Component{

    render () {
        return(
            <ul className="fa-ul">
                {this.props.children}
            </ul>
        )
    }


}