import React, { Component } from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../../node_modules/font-awesome/css/font-awesome.css'
import './barra.css'

class Barra extends Component{

    constructor(props){
        super(props)
        this.state = {
            contador: 0,
            tiempo: this.props.tiempo,
            avance: 0,
            fa_spin: '',
            boton_state: ''
        }
    }

    start = () => {
        clearInterval(this.interval)
        this.interval = setInterval(() => this.tick(),100)
        this.setState({
            tiempo: this.tiempo.value,
            contador: 0,
            avance: 0,
            fa_spin: 'fa-spin',
            boton_state: 'Iniciado'
        })
    }

    restart = () => {
        this.interval = setInterval(() => this.tick(),100)
        this.setState({
            fa_spin: 'fa-spin',
            boton_state: 'Reiniciado'
        })
    }

    stop = () => {
        clearInterval(this.interval)
        this.setState({
            fa_spin: '',
            boton_state: "Detenido"
        })
    }

    tick (){
        if (this.state.avance >=100) 
        {
            clearInterval(this.interval)
            this.boton_stop.className = "btn-group col-2 pb-3 hidden"
            this.boton_restart.className = "btn-group col-2 pb-3 hidden"
            this.boton_start.className = "btn-group col-2 pb-3"
        }else{
            this.setState((prevState) => ({
                contador: prevState.contador + 1/10,
                avance: ((prevState.contador + 1/10)/prevState.tiempo)*100 > 100 ? 100:
                        ((prevState.contador +1/10)/prevState.tiempo)*100
            }))
        }
    }

    componentDidUpdate(){
        if (this.state.avance >= 100)
            this.spinner.className = "fa fa-spiner font-size"
            
            switch(this.state.boton_state){
                case "Iniciado":
                    this.boton_stop.className = "btn-group col-2 pb-3"
                    this.boton_restart.className = "btn-group col-2 pb-3 hidden"
                    this.boton_start.className = "btn-group col-2 pb-3 hidden"
                    break
                case "Detenido":
                    this.boton_stop.className = "btn-group col-2 pb-3 hidden"
                    this.boton_restart.className = "btn-group col-2 pb-3"
                    this.boton_start.className = "btn-group col-2 pb-3 hidden"
                    break
                case "Reiniciado":
                    this.boton_stop.className = "btn-group col-2 pb-3 "
                    this.boton_restart.className = "btn-group col-2 pb-3 hidden"
                    this.boton_start.className = "btn-group col-2 pb-3 hidden"
            }
        }
    
    shouldComponentUpdate(nextState){
        if (nextState.avance !== this.state.avance){
            return true
        }else{
            return false
        }
    }

    componentWillMount(){
        this.setState({
            contador: 0,
            tiempo: 0,
            avance: 0,
            fa_spin: '',
            boton_state: ''
        })
        clearInterval(this.interval)
    }

    render() {
        return(
            <div className="border border-primary m-3 p-3">
                <div className="row">
                    <div className="col-3 pb-3">
                        <div className="input-group size">
                            <span className="input-group-text">Segundos a esperar: <i className="fa fa-clock-o fa-fw"></i></span>
                            <input type="text" name="tiempo" id="tiempo" className="form-control" ref = {input => this.tiempo = input} />
                        </div>
                    </div>
                    <div className="btn-group col-2 pb-3" ref= {div => this.boton_start = div}>
                        <button className="btn btn-primary" onClick={this.start}><i className="fa fa-play-circle fa-fw"></i>Iniciar</button>
                    </div>
                    <div className="btn-group col-2 pb-3 hidden" ref= {div => this.boton_stop = div}>
                        <button className="btn btn-primary" onClick={this.stop}><i className="fa fa-play-circle fa-fw"></i>Detener</button>
                    </div>
                    <div className="btn-group col-2 pb-3 hidden" ref= {div => this.boton_restart = div}>
                        <button className="btn btn-primary" onClick={this.restart}><i className="fa fa-play-circle fa-fw"></i>Reiniciar</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <p className="font-weight-light">Segundos transcurridos: {this.state.contador.toFixed(0)}</p>
                    </div>
                    <div className="row">
                        <div className="col progress m-3">
                            <p className="pr-2">
                                <i className={"fa fa-spinner font-size "+this.state.fa_spin} ref = {i => this.spinner = i}></i>
                            </p>
                            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="25" 
                            aria-valuemin="0" aria-valuemax="100" style={{width: this.state.avance+"%"}}>
                                {this.state.avance.toFixed(0)}%
                            </div>
                        </div>
                    </div>
                </div>
                


            </div>
        )
    }

}

export default Barra