import React, { useEffect } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Wishlist from '../Wishlist/Wishlist';
import Dashboard from '../Dashboard/Dashboard';
import './App.css';
import { getGames } from '../../apiCalls.js';
import { useSelector, useDispatch } from 'react-redux';
import { addGames, addWish } from '../../actions';
import {Route, Link, Switch, Redirect } from 'react-router-dom';



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
      <Link to={`/games:${game.id}`} className='game' key={game.id} style={{backgroundImage: `url(${game.image_url})`}}>
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
      <Header />
      <section>
        <Switch>
          <Route exact
            path='/'
            component={Dashboard}
          />
          <Route exact
            path='/wishlist'
            component={Wishlist}
          />
          <Redirect to='/' />
        </Switch>
      </section>
      <Footer />
    </main>
  )

}

export default App;
