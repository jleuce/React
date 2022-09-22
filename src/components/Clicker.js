import React from 'react'
import { useEffect,useState } from 'react';


const Clicker = () => {
const [counter , setCounter] = useState(0);

useEffect(() =>{
    console.log("se monto comp");
} , []);
// el [] vacio ejecuta al inicio
useEffect(() =>{
    console.log("se modifico counter");
} , [counter]);
// si le pongo una valiable adentro se ejecuta cuando se modifica


const clickHandler = () => {
    console.log('Hiciste click');
    setCounter( counter + 1 ) 
  }

  return (
    <div>
      <div className="m-5">{ counter }</div>
      <button onClick={ clickHandler } className="btn m-5">Click aquí</button>
    </div>
  )
}

export default Clicker