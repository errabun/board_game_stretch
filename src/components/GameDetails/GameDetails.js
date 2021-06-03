import React, { useState, useEffect } from 'react';
import './GameDetails.css'; 
import { useSelector } from 'react-redux';
import rootReducer from '../../reducers'
import { createStore } from 'redux';

function GameDetails({id}) {
  const [game, setGame] = useState({});
  const state = useSelector(state => state.boardGames);
  useEffect(() => {
      setGame(state.find(game => game.id === id));
  }, [state])

  return(
    <div> {game !== undefined &&     
        <div className='game-details'>
          <img src={game.thumb_url}/>
          <h1>{game.name}</h1>
          <p>{game.price}</p>
          <button>Add to wish list</button>
        {/* <p>{game.designers}{game.developers}</p> */}
        <p>{game.description_preview}</p>
      </div>}
    </div>
  )
}

export default GameDetails;

// Game's designers/develoipers >> "Objects are not valid as a React child" >> to render a collection of children use array instead? 


















