import React from 'react'
import pokemonCards from './Data.js';

const Card = (props) => {
   

  return (
    <div className='card'>
        <h2>{pokemonCards[props.index].pokemonName}</h2>
        <div className='Winsdisplay'><h3>Wins🎉</h3></div>
        <img src={pokemonCards[props.index].img} alt="pokemon-img" />
        <div className='content'>
        <p>Type: {pokemonCards[props.index].type}</p>
        <p>HP: {pokemonCards[props.index].health}</p>
        <p>Attack: {pokemonCards[props.index].attack}</p>
        <p>Defense: {pokemonCards[props.index].defence}</p>
        </div>

    </div>
  )
}

export default Card