import React, { useEffect } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Wishlist from '../Wishlist/Wishlist'
import GameDetails from '../GameDetails/GameDetails';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import { getGames } from '../../reducers/apiCalls.js';
import { useSelector, useDispatch } from 'react-redux';
import { addGames, addWish, selectGame } from '../../actions';



function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    getGames()
      .then(data => {
        dispatch(addGames(data.games))
        for(let i = 0; i < 6; i++){
          dispatch(addWish(data.games[i]))
        }
      })
      .catch((error) => console.log(error));
  }, []) 


  const games = useSelector(state => state.boardGames)

  const gameImages = games.map(game => {
    return (
      <div className='game' key={game.id} style={{backgroundImage: `url(${game.image_url})`}} onClick={() => dispatch(selectGame(game))}>
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
      {/* <Wishlist /> */}
      <GameDetails />
      <Footer />
    </main>
  )

}

export default App;
