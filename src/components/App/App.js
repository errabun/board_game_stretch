import React, { useEffect } from 'react';
import Header from '../Header/Header';
// import Footer from '../Footer/Footer';
import Wishlist from '../Wishlist/Wishlist';
import Dashboard from '../Dashboard/Dashboard';
import GameDetails from '../GameDetails/GameDetails';
import WishPopUp from '../WishPopUp/WishPopUp';
import './App.css';
import { getGames } from '../../apiCalls.js';
import { useDispatch, useSelector } from 'react-redux';
import { addGames, removePopUp } from '../../actions';
import {Route, Switch, Redirect } from 'react-router-dom';


function App() {
  const dispatch = useDispatch();
  const showPopUp = useSelector(state => state.showPopUp);

  useEffect(() => {
    getGames()
      .then(data => {
        dispatch(addGames(data.games))
      })
      .catch((error) => console.log(error));
  }, [])

  const displayDelay = () => {
    setTimeout(() => {
      dispatch(removePopUp());
    }, 3000);
  }

  useEffect(() => {
    if(showPopUp.show) {
      displayDelay();
    }
  }, [showPopUp])

  return (
    <main>
      <Header />
      <section>
        {showPopUp.show && <WishPopUp />}
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
      {/* <Footer /> */}
    </main>
  )

}

export default App;
