import React, { Component } from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import './contador.css'

class Contador extends Component{

    constructor(props){
        super(props)
        this.state = {
            horas: 0,
            minutos: 0,
            segundos: 0,
            decimas: 0,
            contador: 0
        }
        
    }

    thick = () => {
        
        this.setState((prevState)=>{
            var tempHoras = prevState.horas
            var tempMinutos = prevState.minutos
            var tempSegundos = prevState.segundos
            var tempDecimas = prevState.decimas+1

            if (tempDecimas === 10) {
                tempDecimas = 0
                tempSegundos += + 1
            }
            if (tempSegundos === 60) {
                tempSegundos = 0
                tempMinutos += 1
            }
            if (tempMinutos === 60) {
                tempMinutos = 0
                tempHoras += 1
            }
            return{
                horas: tempHoras,
                minutos: tempMinutos,
                segundos: tempSegundos,
                decimas: tempDecimas
            }

        })
    }
    
    componentDidMount(){
        this.interval = setInterval(() => this.thick(), 100)
    }


    render(){
        return(
            <div className="container p-3 ms-auto contador border rounded mt-5">
                <h1>Cronometro</h1>
                <p>Tiempo desde la ultima actualización de la pagina:</p>
                <div className="border container crono ms-auto" id="crono">
                    <span>{this.state.horas}</span> : <span>{this.state.minutos}</span> : <span>{this.state.segundos}</span> : <span>{this.state.decimas}</span>
                </div>
                </div>
        )
    }



}

export default Contador