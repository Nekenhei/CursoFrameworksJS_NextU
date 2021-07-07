import React, { Component } from 'react'

export default class Navtab extends Component {
    
    

    render() {

        var tabsUpdate = this.props.tabsUpdate 

        return (
            <button className={"nav-link "+this.props.active} id={"nav-"+this.props.tabIndex+"-tab"} 
            data-bs-toggle="tab" data-bs-target={"#nav-"+this.props.tabIndex} type="button" role="tab" aria-controls={"nav-"+this.props.tabIndex} 
            onClick={() => tabsUpdate(this)}>{this.props.children}</button>
        )
    }
}
