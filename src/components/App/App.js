import { Component } from 'react'
import Header from '../Header'
import './App.css';

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
