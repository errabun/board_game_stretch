import React, { useEffect } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Wishlist from '../Wishlist/Wishlist'
import { Switch, Route } from 'react-router-dom'
import './App.css';
import { getGames } from '../../apiCalls.js';
import { useSelector, useDispatch } from 'react-redux';
import { addGames, addWish } from '../../actions';

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
        <header className='game-header'>
          <h1>{game.name}</h1>
          <p className='description'>{game.description_preview}</p>
        </header>
        <footer className='game-footer'>
          <p className='price'><em>${game.price}</em></p>
          <button onClick={() => dispatch(addWish(game.id))}>Add to wishlist</button>
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
