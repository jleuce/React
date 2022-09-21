import React from 'react'

const ItemListContainer = ({greeting}) => {
  return (
    <div className="collapse">
    <input type="checkbox" className="peer" /> 
    <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
      Click me to show/hide content
    </div>
    <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"> 
      <p>{greeting}</p>
    </div>
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