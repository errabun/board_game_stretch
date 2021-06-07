import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import './WishPopUp.css';

function WishPopUp() {
  const dispatch = useDispatch();
  const games = useSelector(state => state.boardGames)
  

    return (
        <main>
            <p>Hello</p>
        </main>
    )
}

export default WishPopUp;
