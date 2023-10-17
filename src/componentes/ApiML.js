import { useEfectPersonal } from "./UseEffectPersonal";
import { Producto } from "./Producto"
function ApiML (){
    let url = "https://api.mercadolibre.com/sites/MLC/search?q=samsung";
    let {data} = useEfectPersonal(url)
    return(
        <div>
            <h1>Conociendo los hooks personalizados</h1>
            <h1>Consumiendo ApI de Mercado Libre</h1>
            {data.length === 0
            ? (<h3>Cargando...</h3>)
            : (data.map((el)=>
            (<Producto key={el.id} image={el.image} name={el.name} price={el.price} currency_id={el.currency_id}/>)))}
        </div>
    )
}
export {ApiML}