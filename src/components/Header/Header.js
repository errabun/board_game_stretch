import './Header.css'
import { Route, NavLink, Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className="nav-bar">
      <Link to='/'>🎲  Board Game Blitz</Link>
      <NavLink to='/wishlist'>Wishlist</NavLink>
    </nav>
  )
}

export default Header
