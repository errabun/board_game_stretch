import './Header.css'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const location = useLocation()
  console.log(location)
  return (
    <nav className="nav-bar">
      <div className='game-header'>
        {location.pathname === '/wishlist' &&
          <Link to='/'><i className="fas fa-home"></i></Link>}
        {location.pathname.includes('/games') &&
          <Link to='/'><i className="fas fa-home"></i></Link>}
        <a className='game-title'>Board <span className='die'>🎲 </span> Game <span className='die'>🎲 </span> Blitz </a>
      </div>
      <Link className="wishlist_title" to='/wishlist'><i className="far fa-heart"></i>Wishlist</Link>
    </nav>
  )
}

export default Header;
