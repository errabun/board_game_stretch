import React, { useEffect } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Wishlist from '../Wishlist/Wishlist'
import { Switch, Route } from 'react-router-dom'
import './App.css';
import { getGames } from '../../apiCalls.js';
import { useSelector, useDispatch } from 'react-redux';
import { addGames } from '../../actions/index';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    getGames()
      .then(data => dispatch(addGames(data.games)))
  }, []) 

    return (
      <main>
        <Header />
        <Wishlist />
        <Footer />
      </main>
    )

}

export default App;
