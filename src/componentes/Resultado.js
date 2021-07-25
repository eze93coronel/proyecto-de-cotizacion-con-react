import React from 'react';

const Resultado = ({total,Plazo,Cantidad})=> (
        <div className='u-full-widht resultado'>
        <h2>Resumen</h2>
        <p>la cantidad solicitada es : ${Cantidad}</p>
        <p> A Pagar en  : ${Plazo} Meses</p>
        <p> Su pago mensual es : ${ (total / Plazo).toFixed(2)}</p>
        <p> Su total a pagar es: ${(total).toFixed(2)}</p>



        </div>
    );

export default Resultado;