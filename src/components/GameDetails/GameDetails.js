import React, { useState, useEffect } from 'react';
import './GameDetails.css';
import { useSelector, useDispatch } from 'react-redux';
import rootReducer from '../../reducers'
import { createStore } from 'redux';
import { addWish } from '../../actions';

function GameDetails({id}) {
  const [game, setGame] = useState({});
  const state = useSelector(state => state.boardGames);
  useEffect(() => {
      setGame(state.find(game => game.id === id));

  }, [state])

  const dispatch = useDispatch()

  return(
    <div> {game !== undefined &&
        <div className='game-details'>
          <img src={game.thumb_url}/>
          <h1>{game.name}</h1>
          <p>{game.price}</p>
          <button onClick={() => dispatch(addWish(game.id))}>Add to wish list</button>
        {/* <p>{game.primary_publisher.name)}</p> */}
        <p>{game.description_preview}</p>
      </div>}
    </div>
  )
}

export default GameDetails;

// Game's designers/develoipers >> "Objects are not valid as a React child" >> to render a collection of children use array instead?
