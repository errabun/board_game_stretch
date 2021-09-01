import React, { useEffect, useState } from 'react';
import './GameDetails.css';
import { useSelector, useDispatch } from 'react-redux';
import { addWish, removeWish } from '../../actions';
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

  return(
    <div>{game !== undefined &&
      <div className='game-details'>
        <header>
          <img className='game-img' src={game.thumb_url} alt={game.name} />
          <section className='header-right'>
            <h1 className='game-details-title'>{game.name}</h1>
            <span className='cost'>${game.price}</span>
            {!game.isWished ?
              <button className='details-button' onClick={() => dispatch(addWish(game))}>Add to wishlist</button>
              : game.isWished && <button className='details-button' onClick={() => dispatch(removeWish(game.id))}>Remove from wishlist</button>
            }
            <form method='GET' action='http://www.amazon.com/s'>
              <button name='k' value={game.name} className='details-button'>Find on Amazon</button>
            </form>
          </section>
        </header>
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

export default GameDetails;
