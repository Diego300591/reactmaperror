import { Component } from "react";

export default class Contador extends Component {
    constructor(){
        super()
        this.state = {
            contador: 0
        }
        /*setInterval(()=>{
            this.setState({
                contador:this.state.contador+1
            })
        },1000);*/
    }

    handleClick = () => {
        this.setState({
            contador:this.state.contador+1
        })
    }

    restaleClick = () => {
        this.setState({
            contador:this.state.contador-1
        })
    }

    pordiezClick = () => {
        this.setState({
            contador:this.state.contador*10
        })
    }

    cuadradoClick = () => {
        this.setState({
            contador:this.state.contador*this.state.contador
        })
    }

    render(){
        const titulo="Contador";
        return(
            <div>
                <p>{titulo}</p>
                <p><button onClick={this.handleClick}>Sumar</button></p>
                <p><button onClick={this.restaleClick}>Restar</button></p>
                <p><button onClick={this.pordiezClick}>x10</button></p>
                <p><button onClick={this.cuadradoClick}>Al Cuadrado</button></p>



                <p>{this.state.contador}</p>
            </div>   
        )
    }
}