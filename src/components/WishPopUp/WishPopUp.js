import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import './WishPopUp.css';

function WishPopUp() {
  const dispatch = useDispatch();
  const game = useSelector(state => state.gameDetails);
  const showPopUp = useSelector(state => state.showPopUp);
  

    return (
        <main>
            <p>{game.name} was {showPopUp.added} to your Wish List</p>
        </main>
    )
}

export default WishPopUp;
