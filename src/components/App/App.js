import React, { useEffect } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Wishlist from '../Wishlist/Wishlist'
import { Switch, Route } from 'react-router-dom'
import './App.css';
import { getGames } from '../../apiCalls.js';
import { useSelector, useDispatch } from 'react-redux';
import { addGames, addWish } from '../../actions/index';


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

    return (
      <main>
        <Header />
        <Wishlist />
        <Footer />
      </main>
    )

}

export default App;
