import { Component } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Wishlist from '../Wishlist/Wishlist'
import { Switch, Route } from 'react-router-dom'
import './App.css';
import { useSelector, useDispatch } from 'react-redux';

class App extends Component {
  constructor() {
    super()
    this.state = {
      games: []
    }
  }

  render() {
    return (
      <main>
        <Header />
        <Wishlist />
        <Footer />
      </main>
    )
  }
}

export default App;
