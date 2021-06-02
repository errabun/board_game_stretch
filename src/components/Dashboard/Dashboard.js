import './Dashboard.css';
import React, { useEffect } from 'react'
import { getGames } from '../../apiCalls.js';
import { useSelector, useDispatch } from 'react-redux';
import { addGames, addWish, selectGame } from '../../actions';
import {Route, Link, Switch, Redirect } from 'react-router-dom';

function Dashboard() {
    const dispatch = useDispatch();
    const games = useSelector(state => state.boardGames)

    const gameImages = games.map(game => {
    return (
        <Link to={`/games:${game.id}`} className='game' key={game.id} style={{backgroundImage: `url(${game.image_url})`}} onClick={() => dispatch(selectGame(game))}>
        <header className='game-header'>
            <h1>{game.name}</h1>
            <p className='description'>{game.description_preview}</p>
        </header>
        <footer className='game-footer'>
            <p className='price'><em>${game.price}</em></p>
            <button onClick={() => dispatch(addWish(game.id))}>Add to wishlist</button>
        </footer>
        </Link>
    )
    })

    return (
        <main>
            {gameImages}
        </main>
    )
}

export default Dashboard;
