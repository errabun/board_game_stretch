import React, { useEffect } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Wishlist from '../Wishlist/Wishlist';
import Dashboard from '../Dashboard/Dashboard';
import GameDetails from '../GameDetails/GameDetails';
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
      })
      .catch((error) => console.log(error));
  }, [])

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
          <Route exact
            path='/games/:id'
            render ={({match}) => {
              const {id} = match.params
              return <GameDetails id={id}/>
            }}
          />
          <Redirect to='/' />
        </Switch>
      </section>
      <Footer />
    </main>
  )

}

export default App;
