import React from 'react'


const Card = (props) => {
   

  return (
    <div className='card'>
        <h2>{props.index.name}</h2>
        <img src={props.index.sprites.front_default} alt="pokemon-img" />
        <div className='content'>
        <p>Type: {props.index.types[0].type.name}</p>
        <p>HP: {props.index.stats[0].base_stat}</p>
        <p>Attack: {props.index.stats[1].base_stat}</p>
        <p>Defense: {props.index.stats[2].base_stat}</p>
        </div>

    </div>
  )
}

export default Card