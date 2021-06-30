import React from 'react'
import '../../../node_modules/font-awesome/css/font-awesome.css'

class Item extends React.Component{
    render() {

    

        return (
           
            <li type="none" id={this.props.itemId}>
                <span className="fa-li">
                    <i className="fa fa-check"></i>
                </span>
                Titulo del libro: {this.props.children}
            </li>
            
        )
    }
}

export default Item