import React from 'react'
import ItemList from "./ItemList"

const ItemListContainer = ({greeting}) => {
  return (
    <div className="m-5">
      <h1>{greeting}</h1>
      <ItemList/>
    </div>
  )
}

export default ItemListContainer

/*
 <div className="collapse">
    <input type="checkbox" className="peer" /> 
    <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
      Click me to show/hide content
    </div>
    <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"> 
      <p>hello</p>
    </div>
  </div>
*/ 