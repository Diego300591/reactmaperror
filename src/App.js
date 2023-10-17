import logo from './logo.svg';
import './App.css';
const nombre="diego";
const cursos=["HTML","CSS","BOOTSTRAP","FIGMA","SASS","JS","GIT"];
const ciudades_des=["Nueva Brasil","San Matias","Las Misiones","San Bernardo","Millares","San Cristobal","San Lorenzo","Cañete","Puerto Sandwich","La Rinconada","Cerro Zegarra"];
const bool=false;
function App() {
  return (
  <div className='App App-header'>
    <p className='main'>Hola mundo React</p>
    <p id='algodon'>Otra etiqueta</p>
    <p aria-controls=''>Otra etiqueta</p>
    <p data-algundato>Otra etiqueta</p>
    <label htmlFor="label">Nombre</label>
    <input type={"text"}></input><br></br>
    <input type={"Password"}></input><br></br>
    <input type={"date"}></input><br></br>
    <p>{nombre}</p>
    <ul>
      {cursos.map((el,index) => <li key={index}>{el}</li>)}
    </ul>
  
    {bool ? "Esta en true" : "Esta en false"}
    <ul>
      {ciudades_des.map((elem,index) => <li key={index}>{elem}</li>)}
    </ul>
    
  </div>);
}

export default App;

