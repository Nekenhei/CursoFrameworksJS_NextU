import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import React from 'react';


class formularioClass extends React.Component{
    render() {
        const {
            anchoColumna = "col-md-6"
        } = this.props;
        return (<div className={anchoColumna}>
            <label htmlFor={this.props.id} className="form-label">{this.props.placeholder}</label>
            <div className="input-group">
                <span className="input-group-text" className={this.props.icono} htmlFor={this.props.id}></span>
                <input type={this.props.tipoInput} className="form-control" placeholder={this.props.placeholder} id={this.props.id}></input>
            </div>
            </div>
        )
    }
}

export default formularioClass