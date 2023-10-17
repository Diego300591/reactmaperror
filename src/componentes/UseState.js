import { useState } from "react";

export default function UseState (props) {
    const [estado, setEstado] = useState(100)

    const aumentar = () => setEstado(estado + 1)
    const disminuir = () => setEstado(estado - 1)
    const porDiez = () => setEstado(estado * 10)
    const cuadrado = () => setEstado(estado * estado)
    const raiz = () =>setEstado(Math.sqrt(estado))

    return(
        <div>
            <h1>Conociendo el hook useState</h1>
            <button onClick={aumentar}>Sumar</button>
            <button onClick={disminuir}>Restar</button>
            <button onClick={porDiez}>x10</button>
            <button onClick={cuadrado}>Al Cuadrado</button>
            <button onClick={raiz}>Raiz Cuadrada</button>

            <h2>{estado}</h2>
            <h2>{props.nombre}</h2>
            <h2>{props.apellido}</h2>



        </div>
    )
}

UseState.defaultProps =  {apellido:"Componentes funcionales con React"}