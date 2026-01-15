import React from 'react'


const Card = (props) => {
   

  return (
    <div className='card'>
      <p className='basic-title'>BASIC</p>

        <div className='inner-card'>
            <div className='top'>
                <h1>{props.index.name}</h1>
                <div className='right-top'>
                <p><span>HP</span>{props.index.stats[0].base_stat}</p>
               
                </div>
            </div>
            <div className='middle'>
              <img src={props.index.sprites.front_default} alt="pokemon" />
            </div>
            <div className="bottom">
              <div className="container1">
                <h3>Thunder Shock</h3>
                <p>Flip a coin</p>

              </div>
              <div className="container2">
                <h3>Tail Whip</h3>
                <p>if hoopa is on your bench</p>
              </div>
              <div className='container3'>
              <div className="first-row">
                <div><p className='stats-name'>attack</p><p>{props.index.stats[1].base_stat}</p></div>
                <div><p className='stats-name'>defence</p><p>{props.index.stats[2].base_stat}</p></div>
                <div><p className='stats-name'>special attack</p><p>{props.index.stats[3].base_stat}</p></div>
              

              </div>
              <div className='second-row'>
                <span> ©2015 Pokemon</span>
                <p>XY89</p>
              </div>
              </div>
            </div>
        </div>

    </div>
  )
}

export default Card