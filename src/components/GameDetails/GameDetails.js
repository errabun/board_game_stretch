import React, { useEffect, useState } from 'react';
import './GameDetails.css'; 
import { useSelector, useDispatch } from 'react-redux';
import { addWish, addVideos } from '../../actions';
import { getVideo } from '../../apiCalls.js';

function GameDetails() {
  const dispatch = useDispatch(); 
  const game = useSelector(state => state.gameDetails);
  const videoUrl = useSelector(state => state.gameVideos[0].url)
  console.log(videoUrl)
  const videoKey = videoUrl.split("?v=")[1];
  console.log(videoKey)
  // const embedlink = "http://www.youtube.com/embed/" + videoID;

  useEffect(() => {
    getVideo(game.id)
      .then(data => { 
        dispatch(addVideos(data.videos))
      })
      .catch((error) => console.log(error));
  },[])

  return(
    <div className='game-details'>
        <img src={game.thumb_url}/>
        <h1>{game.name}</h1>
        <p>{game.price}</p>
        <button onClick={() => dispatch(addWish(game))}>Add to wish list</button>
      {/* <p>{game.designers}{game.developers}</p> */}
      <p>{game.description_preview}</p>
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${videoKey}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
        seamless
        />
    </div>
  )
}

export default GameDetails;

// Game's designers/develoipers >> "Objects are not valid as a React child" >> to render a collection of children use array instead? 


















