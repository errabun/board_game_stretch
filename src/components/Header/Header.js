import './Header.css'
import { Route, NavLink, Link } from 'react-router-dom'
// import { useSelector, useDispatch } from 'react-redux';

const Header = () => {
  // const dispatch = useDispatch();
  // const games = useSelector(state => state.boardGames)
 
  return (
    <nav className="nav-bar">
      <div className='game-header'>
        <NavLink to='/'><i className="fas fa-home"></i></NavLink>
        <a className='game-title'>Board <span className='die'>🎲 </span> Game <span className='die'>🎲 </span> Blitz </a>
      </div>
      <Link className="wishlist_title" to='/wishlist'><i className="far fa-heart"></i>Wishlist</Link>
    </nav>
  )
}

export default Header
