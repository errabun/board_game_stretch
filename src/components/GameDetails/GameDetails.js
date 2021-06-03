import React, { Component, useEffect, useState } from 'react';
import './GameDetails.css'; 
import { useSelector, useDispatch } from 'react-redux';
import { addWish, addVideos } from '../../actions';
import { getVideo } from '../../apiCalls.js';

// function GameDetails({id}) {
//   const [game, setGame] = useState({});
//   const state = useSelector(state => state.boardGames);
//   useEffect(() => {
//       setGame(state.find(game => game.id === id));

//   }, [state])



function GameDetails({id}) {
  // const dispatch = useDispatch(); 
  const [game, setGame] = useState({});
  const state = useSelector(state => state.boardGames);
  useEffect(() => {
      setGame(state.find(game => game.id === id));
  }, [state])
  
  const [video, setVideo] = useState('');
  let videoKey;

  // const game = useSelector(state => state.gameDetails);

  console.log(video)

  useEffect(() => {
    getVideo(game.id)
      .then(data => { 
        console.log(data.videos[0].url)
        videoKey = data.videos[0].url.split("?v=")[1];
        setVideo(videoKey)
      })
      .catch((error) => console.log(error));
  },[])


  return(
    <div> {game !== undefined &&     
        <div className='game-details'>
          <img src={game.thumb_url}/>
          <h1>{game.name}</h1>
          <p>{game.price}</p>
          <button onClick={() => dispatch(addWish(game))}>Add to wish list</button>
        {/* <p>{game.primary_publisher.name)}</p> */}
        <p>{game.description_preview}</p>

        <iframe
        // src={`https://www.youtube-nocookie.com/embed/${videoKey}`}
        src="https://www.youtube-nocookie.com/embed/Dfq4dRPHIAM"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
        seamless
        />
      </div>}
    </div>
  )
}


export default GameDetails;








