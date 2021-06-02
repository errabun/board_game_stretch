import React from 'react';
import './GameDetails.css'; 
import { useSelector } from 'react-redux';

function GameDetails() {
  const game = useSelector(state => state.gameDetails);
  console.log(game)
  return(
    <div className='game-details'>
        <img src={game.thumb_url}/>
        <h1>{game.name}</h1>
        <p>{game.price}</p>
        {/* <button>Add to wish list</button> */}
      {/* <p>{game.designers}{game.developers}</p>
      <p>{game.description_preview}</p> */}
    </div>
  )
}

export default GameDetails;


















