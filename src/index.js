import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Frutas from './componentes/Frutas';
import Propiedades from './componentes/Propiedades';
import Contador from './componentes/Contador';
import Renderizado from './componentes/Renderizado';
import EventoYBindeo from './componentes/EventosYBindeo';
import PropertyInicializer from './componentes/PropertyInicializer';
import Eventos from './componentes/Eventos';
import CicloDeVida from './componentes/CicloDeVida';
import ConsumoDeApi from './componentes/ConsumoDeApi';
import UseState from './componentes/UseState';
import UseEffects from './componentes/UseEffect';
import { ApiML } from './componentes/ApiML';
import UseRef from './componentes/UseRef';
import Formulario from './componentes/Formulario';
import Estilos from './componentes/Estilos';
import EjercicioIMC from './componentes/EjercicioIMC';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='App App-header'>
    <App />
    <Frutas fruta="Hoy quiero comer Coco" />
    <Propiedades cadena="Esto es una cadena desde las props" 
    numeros = {123456}
    bool = {true}
    arreglo={["Steve Jobs","Bill Gates","Elon Musk"].join(", ")}
    numerosEjemplo={[5,10,15]}
    obj={{nombre:"Daniel",apellido:"Salinas"}}
    function={num=>num*num}
    elementoReact={<b>"Celine Dion"</b>}
    component={<Frutas fruta="Guanabana"/>}/>
    <Contador/>
    <Renderizado/>
    <EventoYBindeo/>
    <PropertyInicializer/>
    <hr/>
    <Eventos/>
    <CicloDeVida/>
    <ConsumoDeApi/>
    <UseState nombre="Estamos viendo nuestro primer Hook, que es el UseState"/>
    <UseEffects/>
    <ApiML/>
    <UseRef/>
    <Formulario/>
    <Estilos/>
    <EjercicioIMC/>
    </div>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
