import './Header.css'
import { Route, NavLink, Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className="nav-bar">
      <Link className="wishlist_title" to='/wishlist'><i className="far fa-heart"></i>Wishlist</Link>
      <div>
        <Link to='/'><i className="fas fa-home"></i></Link>
        <a className='game-title'>Board <span className='die'>🎲 </span> Game <span className='die'>🎲 </span> Blitz </a>
      </div>
    </nav>
  )
}

export default Header
