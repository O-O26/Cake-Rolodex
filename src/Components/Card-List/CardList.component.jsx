import React from 'react'
import Card from "../Card/Card.component"
import "./CardList.css"

const CardList = ({ cakes }) => (
  <div className='card-list'>
    {cakes.map((cake) => {
      return (<Card cake={cake}/>)
    })}
  </div>
)

export default CardList