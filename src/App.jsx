import React from 'react'

import { useState } from "react";
import Card from "./components/Card.jsx";
import winsound from './assets/pokemon-win.mp3'
const App = () => {
  const audio = new Audio(winsound);
  const [pokemonData, setPokemonData] = useState({
    name: "Uknown",
    sprites: { front_default: "https://archives.bulbagarden.net/media/upload/thumb/3/3f/0143Snorlax.png/800px-0143Snorlax.png" },
    types: [{ type: { name: "none" } }],
    stats: [{},{ base_stat: 0 }, { base_stat: 0 }, { base_stat: 0 }],
  });
  const [pokemonData2, setPokemonData2] = useState({
    name: "Uknown",
    sprites: { front_default: "https://archives.bulbagarden.net/media/upload/thumb/3/3f/0143Snorlax.png/800px-0143Snorlax.png" },
    types: [{ type: { name: "none" } }],
    stats: [{},{ base_stat: 0 }, { base_stat: 0 }, { base_stat: 0 }],
  });
 
async function fecthData(num){
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${num}`)
  const data = await response.json();
  return data;
}
async function fetchAndLog(num){
  const pokemonData = await fecthData(num);
  setPokemonData(pokemonData);
}
async function fetchAndLog2(num){
  const pokemonData = await fecthData(num);
  setPokemonData2(pokemonData);
}

  function randomNumber() {
    const num = Math.floor(Math.random() * 1025);
    fetchAndLog(num);
  }
  function randomNumber2() {
    const num = Math.floor(Math.random() * 1025);
    fetchAndLog2(num);
  }
function battle(){
  
  audio.play();
  let leftside=pokemonData;
  let rightside=pokemonData2;
  let leftPower=leftside.stats[0].base_stat + leftside.stats[1].base_stat + leftside.stats[2].base_stat;
  let rightPower=rightside.stats[0].base_stat + rightside.stats[1].base_stat + rightside.stats[2].base_stat;
  setTimeout(()=>{
  if(leftPower>rightPower){
    document.querySelector('.winDisplay').style.display="block"
    document.querySelector('.winDisplay').innerText=`winner is ${leftside.name}`
    
    
    setTimeout(() => {
      document.querySelector('.winDisplay').style.display="none"
      audio.pause();
      audio.currentTime = 0;
      
    }, 3000);
    
    

  }else if(rightPower>leftPower){
    document.querySelector('.winDisplay').style.display="block"
    document.querySelector('.winDisplay').innerText=`winner is ${rightside.name}`
    
    setTimeout(() => {
      document.querySelector('.winDisplay').style.display="none"
      audio.pause();
      audio.currentTime = 0;
    }, 3000);
  }else{
    document.querySelector('.winDisplay').style.display="block"
    document.querySelector('.winDisplay').innerText="It's a Tie!"
    setTimeout(() => {
      document.querySelector('.winDisplay').style.display="none"
    }, 3000);
  }
},1000);
}

  return (
    <div className="main">
      <h1>Pokemon Cards Game</h1>
      <div className='battle-ground'>
        <div className='winDisplay'>winner</div>
      <div className='card-section'>
         <Card index={pokemonData} />
         <div className='vs-div'>VS</div>
      <Card index={pokemonData2} />
      </div>
     
      </div>
      <div className='btngroup'>
      <button onClick={randomNumber}>Select your Pokemon</button>
      <button id='fightbtn' onClick={battle}>Battle</button>
      <button onClick={randomNumber2}>Select your Pokemon</button>
      </div>
    </div>
  );
};

export default App;
