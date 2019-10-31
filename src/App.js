import React, {useState, useEffect, Fragment}from 'react';
import axios from 'axios';
import Cita from './componente/Cita'



//hook con api rest

function App() {

  const  [frase, obtenerFrase]= useState({});


  //conexion api
  const consultaApi = async()=>{
    const resultado = await axios('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    obtenerFrase(resultado.data[0]);
  }

  useEffect(()=>{
    consultaApi();
  },[])
 
 
  return ( 
    <Fragment>       
        <div className="contenedor"> 
          <Cita
              quote = {frase.quote}
              autor = {frase.author}
          />         
          <button onClick={consultaApi}>Busca una frase</button>
        </div>
    </Fragment>
  );
}

export default App;
