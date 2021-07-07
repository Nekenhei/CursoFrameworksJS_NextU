import React, { Component } from 'react'

export default class TabContent extends Component {
    render() {
        return (
            <div className={"tab-pane fade "+this.props.active} id={"nav-"+this.props.tabIndex} role="tabpanel" 
            aria-labelledby={"nav-"+this.props.tabIndex+"-tab"}>{this.props.children}</div>
        )
    }
}
