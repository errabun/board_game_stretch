import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import './WishPopUp.css';

function WishPopUp() {
  const dispatch = useDispatch();
  const game = useSelector(state => state.gameDetails);
  const showPopUp = useSelector(state => state.showPopUp);
  

    return (
        <main>
            {showPopUp.added ? <p>{game.name} asdasdasdaswas added to your Wish List</p> :
            !showPopUp.added && <p>Game Removed from Wish List</p>} 
        </main>
    )
}

export default WishPopUp;
