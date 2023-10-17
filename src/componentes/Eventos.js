import { Component } from "react";
import EventoPersonalizado from "./EventoPersonalizado";

export default class Eventos extends Component {
    handleClick = (e, nombre, apellido) => {
        //console.log(e);
        //console.log(e.nativeEvent);
        console.log(nombre);
        console.log(apellido);


    }

    render(){
        return(
            <div>
                <button onClick={e  => this.handleClick(e,"Hola soy un parametro pasado en un evento","Pasando parámetros a los eventos")}>Llamando al evento sintético</button>
                <EventoPersonalizado dieguitoClick={e => this.handleClick(e, "Hola soy un evento personalizado","Madre mía")}/>
            </div>
        )
    }
}