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
  console.log(games)
  const gameImages = games.map(game => {
    return (
      <div className='games'>
        <img src={game.image_url} alt={game.name} key={game.id} />
        <button>Add to Wishlist</button>
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
