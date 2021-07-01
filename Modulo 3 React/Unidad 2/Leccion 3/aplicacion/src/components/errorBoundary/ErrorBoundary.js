import React, { Component } from 'react'
import  '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../../node_modules/font-awesome/css/font-awesome.css';
import './ErrorBoundary.css'


class ErrorBoundary extends Component {

    constructor(props){
        super(props)
        this.state = {
            tieneError: false,
            error: null,
            errorInfo: null
        }
    }

    componentDidCatch(erorr, errorInfo){
        this.setState({
            tieneError: true,
            erorr: erorr,
            errorInfo: errorInfo
        })
    }

    render() {
        if (this.state.tieneError) {
            return (
                <div className="border border-primary m-3 p-3" align="center">
                    <p className="fa fa-exclamation-triangle size"></p>
                    <h2>Se presentó un error en la aplicación</h2>
                    <p>
                        <details style={{whiteSpace: "pre-wrap"}}>
                            {this.state.error && this.state.error.toString()}
                            <br />
                            {this.state.errorInfo.componentStack}
                        </details>
                    </p>                    
                </div>
            )
        }else{
            return this.props.children
        }
    }
}

export default ErrorBoundary
