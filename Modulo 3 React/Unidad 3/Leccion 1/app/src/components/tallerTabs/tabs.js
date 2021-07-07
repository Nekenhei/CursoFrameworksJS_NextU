import React, { Component } from 'react'
import Navtab from './navtab'
import TabContent from './tabContent'


export default class Tabs extends Component {

    constructor(props){
        super(props)
        this.state = {
            selected: this.props.tabIndexActive
        }
    }

    tabsUpdate = (tabSelected) => {
        this.setState({
            selected: tabSelected.props.tabIndex
        })
    }

    shouldComponentUpdate(nextProps, nextState){
        return (this.state.selected !== nextState.selected)
      }

    render() {
        return (
            <div className="row">
                <div className="col">
                    <nav>
                        <div className="nav nav-tabs" id="nav-tab" role="tablist">
                            {this.props.tabsList.map((tab, index) =>
                            <Navtab key={index} tabIndex={index} active={this.state.selected===index ? 'active':''} tabsUpdate={this.tabsUpdate}>{tab.name}</Navtab>)}
                        </div>
                    </nav>
                    <div className="tab-content" id="nav-tabContent">
                        {this.props.tabsList.map((tab, index) =>
                        <TabContent active={this.state.selected===index ? 'show active':''} key={index} tabIndex={index}>{tab.contenido}</TabContent>)}
                    </div>    
                </div>
            </div>
        )
    }
}
