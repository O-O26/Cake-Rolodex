import React from 'react'
import "./Card.css"

const Card = ({ cake }) => {
  const { title, id, image, previewDescription } = cake 
  return (
    <div className='card-container' key={id}>
      <h2>{id}</h2>
      <h2>{title}</h2>
      <img className="image" alt={`cake ${title}`} src={image}/>
      <p>{previewDescription}</p>
    </div>
  )
}

export default Card