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
        <section className='game' key={game.id} style={{backgroundImage: `url(${game.image_url})`}}>
            <Link to={`/games/${game.id}`}  onClick={() => dispatch(selectGame(game))}>
            <section className='game-hover'>
                <h1>{game.name}</h1>
                <div className="card_spacing">
                    <div>
                        <p>{`👥 ${game.min_players}-${game.max_players}`}</p>
                        <p>{`🕐 ${game.min_playtime}-${game.max_playtime}`}</p>
                    </div>
                    <div>
                        <p>{`P: ${game.primary_publisher.name}`}</p>
                        <p>{`D: ${game.primary_designer.name}`}</p>
                    </div>
                </div>
                <p className='price'><em>${game.price}</em></p>
            </section>
            </Link>
            <button onClick={() => dispatch(addWish(game.id))}>Add to wishlist</button>
        </section>
    )
    })

    return (
        <main className="dashboard">
            {gameImages}
        </main>
    )
}

export default Dashboard;
