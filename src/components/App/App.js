import React, { useEffect } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Wishlist from '../Wishlist/Wishlist'
import { Switch, Route } from 'react-router-dom'
import './App.css';
import { getGames } from '../../apiCalls.js';
import { useSelector, useDispatch } from 'react-redux';
import { addGames } from '../../actions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    getGames()
      .then(data => dispatch(addGames(data.games)))
  }, [])

  const games = useSelector(state => state.boardGames)

  const gameImages = games.map(game => {
    return (
      <div className='game' key={game.id} style={{backgroundImage: `url(${game.image_url})`}}>
        <header className='game-header'>{game.name}</header>
        <footer className='game-footer'>
          <p>${game.msrp}</p>
        </footer>
      </div>
    )
  })

  return (
    <main>
      <Header />
      <section>
        {gameImages}
      </section>
      <Wishlist />
      <Footer />
    </main>
  )

}

export default App;
