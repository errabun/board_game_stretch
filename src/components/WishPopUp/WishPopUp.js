import { useSelector } from 'react-redux';
import React from 'react';
import './WishPopUp.css';

function WishPopUp() {
  const game = useSelector(state => state.gameDetails);
  const showPopUp = useSelector(state => state.showPopUp);


    return (
        <section className="popup">
            {showPopUp.added && `${game.name} added to your Wish List` }
            {!showPopUp.added && `Game Removed from Wish List`}
        </section>
    )
}

export default WishPopUp;
