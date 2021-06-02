import React from 'react';
import './GameDetails.css'; 
import { useSelector } from 'react-redux';

function GameDetails() {
  // const games = useSelector(state => state.wishList);
  // const sampleGame = games[0]
  return(
    <div className='game-details'>
      
        <img src="https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254183526-51f6ysXCMmL.jpg"/>
        <div>
          <h1>Codename</h1>
          <p>Price $13.49</p>
          <button>Add to wish list</button>
        </div>
      <p>designers and devs info</p>
      <p>information</p>
 

    </div>
  )
}

export default GameDetails;