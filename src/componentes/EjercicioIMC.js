import { useState, useEffect } from "react";
import IMCForm from "./IMCForm";
export default function EjercicioIMC () {
    const [state, setState] = useState([])
    const [data, setData] = useState({})

    useEffect(() => {
        const diaDePesaje = state.map(el => el.diaDePesaje)
        const imc = state.map(el => el.imc)
        let nuevaData = {diaDePesaje, imc}
        setState(nuevaData)
    }, [state])

    const handleChange = (objetoConValores) =>{
        let altura = objetoConValores.altura / 100;
        objetoConValores.imc = (objetoConValores.peso / (altura * altura)).toFixed(2);
        let nuevoValor = [...state, objetoConValores]
        let len = nuevoValor.length
        if (len > 1) nuevoValor = nuevoValor.slice(1, len)
        setState(nuevoValor)
    }
    return(
        <div>
            <h1> ✔️ Índice de Masa Corporal ✔️ </h1>
            <IMCForm change={handleChange} />
            <h2> Datos del último día</h2>
        </div>
    )
}