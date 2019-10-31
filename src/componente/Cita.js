import React from 'react';


const Cita = ({quote, autor}) => {
    return ( 
        <div className="contenedor">
            <div className="frase">
                <h1>{quote}</h1>
                <p>{autor}</p>
            </div>
        </div>
     );
}
 
export default Cita;