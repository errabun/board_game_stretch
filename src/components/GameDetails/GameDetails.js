import React, { Component, useEffect, useState } from 'react';
import './GameDetails.css';
import { useSelector, useDispatch } from 'react-redux';
import { addWish} from '../../actions';
import { getVideo } from '../../apiCalls.js';

function GameDetails({id}) {
  const dispatch = useDispatch();
  const [game, setGame] = useState({});
  const [videoKey, setVideo] = useState('');
  const state = useSelector(state => state.boardGames);

  useEffect(() => {
      setGame(state.find(game => game.id === id));
  }, [state]);

  useEffect(() => {
    getVideo(id)
      .then(data => {
        setVideo(data.videos[0].url.split("?v=")[1])
      })
      .catch((error) => console.log(error));
  },[]);

  const dispatch = useDispatch()

  return(
    <div>{game !== undefined &&
      <div className='game-details'>
        <header>
          <img src={game.thumb_url}/>
          <section className='header-right'>
            <h1>{game.name}</h1>
            <span className='cost'>${game.price}</span>
            <button onClick={() => dispatch(addWish(game))}>Add to wish list</button>
          </section>
        </header>
        {/* <p>{game.primary_publisher.name)}</p> */}
        <p className='game-description'>{game.description_preview}</p>
        {videoKey && (
          <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoKey}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
          seamless
          />
          )}
      </div>
    }</div>
  )
}

<<<<<<< HEAD
export default GameDetails;

// Game's designers/develoipers >> "Objects are not valid as a React child" >> to render a collection of children use array instead?
=======

export default GameDetails;








>>>>>>> 6213c45364a943f5e5d203e6e15d6546752f6cb2
