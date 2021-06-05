import './Header.css'
import { Route, NavLink, Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className="nav-bar">
      <Link className="header_title" to='/'><i class="fas fa-home"></i></Link>
      <header className='home-header'>🎲  Board Game Blitz </header>
      <Link className="wishlist_title" to='/wishlist'>Wishlist</Link>
    </nav>
  )
}

export default Header
