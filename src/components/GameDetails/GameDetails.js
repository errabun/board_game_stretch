import React, { useEffect, useState } from 'react';
import './GameDetails.css'; 
import { useSelector, useDispatch } from 'react-redux';
import { addWish, addVideos } from '../../actions';
import { getVideo } from '../../apiCalls.js';

function GameDetails() {
  const dispatch = useDispatch(); 
  const game = useSelector(state => state.gameDetails);
  const videos = useSelector(state => state.gameVideo)
  console.log(videos)

  useEffect(() => {
    getVideo(game.id)
      .then(data => { 
        console.log(data.videos)
        dispatch(addVideos(data.videos))
      })
      .catch((error) => console.log(error));
  })

  return(
    <div className='game-details'>
        <img src={game.thumb_url}/>
        <h1>{game.name}</h1>
        <p>{game.price}</p>
        <button onClick={() => dispatch(addWish(game))}>Add to wish list</button>
      {/* <p>{game.designers}{game.developers}</p> */}
      <p>{game.description_preview}</p>
    </div>
  )
}

export default GameDetails;

// Game's designers/develoipers >> "Objects are not valid as a React child" >> to render a collection of children use array instead? 


















