import React , { Fragment,useState}  from 'react';
import {calcularTotal} from '../Helpers';
const Formulario = (props) => {


  const  {Cantidad,guardarCantidad,Plazo,guardarPlazo, total,guardarTotal, guardarCargando}= props;

   
// DEFINIR USESATE LOCAL 
const [ error,guardarError]= useState(false);
 
  const calcularPrestamo = e =>{
     e.preventDefault()
  
     //validar
  
     if(Cantidad === 0 || Plazo === ''){
         guardarError(true);

         return;
     }

     // elinminar el error previo  
     guardarError(false); // se ejecuta cuando en los inputs se corrigen los errores permitiendo que desaparesca del dom la alaerta error
    
    
     // habilitar spinner 
        guardarCargando(true);
     setTimeout(()=>{ //DESPUUES DE DE 3 SEGUNDOS SE VA MOSTRAR LAS EJECUSIONES DE ESTE CODIGO
      
            // realizar la cotizacion 
     const total = calcularTotal(Cantidad,Plazo);
     
     // una ves calcualdo guardartotal
   
     guardarTotal(total);

     //DESHABILITAR spinner
       guardarCargando(false);
     },3000)
   
 
  }

    return ( 
        <Fragment>
        <form onSubmit={calcularPrestamo}>
        <div className="row">
            <div>
                <label>Cantidad Prestamo</label>
                <input 
                    className="u-full-width" 
                    type="number" 
                    placeholder="Ejemplo: 3000" 
                    onChange={e=>guardarCantidad (parseInt(e.target.value))}
                />
            </div>
            <div>
                <label>Plazo para Pagar</label>
                <select 
                    className="u-full-width"
                    onChange={e=>guardarPlazo (parseInt(e.target.value))}

                >
                    <option value="">Seleccionar</option>
                    <option value="3">3 meses</option>
                    <option value="6">6 meses</option>
                    <option value="12">12 meses</option>
                    <option value="24">24 meses</option>
                </select>
            </div>
            <div>
                <input 
                    type="submit" 
                    value="Calcular" 
                    className="button-primary u-full-width" 
                />
            </div>
        </div>
</form>

{error ?<p className="error">todos los campos son obligatorios</p> :null}


</Fragment>
     );
}
 
export default Formulario;