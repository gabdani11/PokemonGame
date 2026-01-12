import React from 'react'
import pokemonCards from './components/Data.js';
import { useState } from "react";
import Card from "./components/Card.jsx";

const App = () => {
  const [index, setIndex] = useState(0);
  const [index0, setIndex0] = useState(0);

  function randomNumber0() {
    const num = Math.floor(Math.random() * 20);
    setIndex0(num);
  }
  function randomNumber() {
    const num = Math.floor(Math.random() * 20);
    setIndex(num);
  }
function battle(){
  let leftside=pokemonCards[index0];
  let rightside=pokemonCards[index];
  let leftPower=leftside.attack + leftside.defence + leftside.health;
  let rightPower=rightside.attack + rightside.defence + rightside.health;
  if(leftPower>rightPower){
    alert(`${leftside.pokemonName} Wins!🎉`)
  }else if(rightPower>leftPower){
    alert(`${rightside.pokemonName} Wins!🎉`)
  }else{
    alert("It's a Tie!")
  }
}
  return (
    <div className="main">
      <h1>Pokemon Cards Game</h1>
      <div className='battle-ground'>
      <Card index={index0} />
      <Card index={index} />
      </div>
      <div className='btngroup'>
      <button onClick={randomNumber0}>Select your Pokemon</button>
      <button id='fightbtn' onClick={battle}>Battle</button>
      <button onClick={randomNumber}>Select your Pokemon</button>
      </div>
    </div>
  );
};

export default App;
