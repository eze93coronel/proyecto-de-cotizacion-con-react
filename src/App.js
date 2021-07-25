
import React,{Fragment,useState}  from "react";
 
import Header  from "./componentes/Header";
import Formulario from "./componentes/Formulario";
import Mensaje from "./componentes/Mensaje";
import Resultado from "./componentes/Resultado";
import Spinner from "./componentes/Spinner";
import { render } from "@testing-library/react";





function App() {
 

    // definir el state 
    const [Cantidad, guardarCantidad]= useState(0)
    const [Plazo, guardarPlazo]= useState('')
    const [total,guardarTotal] = useState(0)
    const [Cargando,guardarCargando]= useState(false)
    let componente;

    if(Cargando){
      componente = <Spinner/>
    } else if(total === 0){
      componente = <Mensaje/>
    }else{
      componente = <Resultado
               total={total}
               Plazo={Plazo} 
              Cantidad={Cantidad}        
      />
    }
    
  return (
    <Fragment>
    < Header
     titulo="Cotizador de prestamos"
     
    />

    <div className="container">
    <Formulario
    
    Cantidad ={Cantidad}
    guardarCantidad={guardarCantidad}
    Plazo={Plazo}
    guardarPlazo={guardarPlazo}
    total={total}
    guardarTotal={guardarTotal}
    guardarCargando={guardarCargando}
    />
    <div className='mensajes'>
      {componente}
    </div>
    </div>
    </Fragment>
  );
}
  


export default App;
