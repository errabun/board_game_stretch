import './Wishlist.css'
import { Component } from 'react'

class Wishlist extends Component {
  constructor() {
    super()
    this.state= {
      wishGames: []
    }
  }

  render() {
    return (
      <p>This is where the wishlist games will go</p>
    )
  }
}

export default Wishlist
