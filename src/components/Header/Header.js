import './Header.css'
import { Link, useLocation } from 'react-router-dom';
import stretch from '../../assets/stretch.png'

const Header = () => {
  const location = useLocation();

  return (
    <nav className="nav-bar">
      <section className='game-header'>
        {location.pathname === '/wishlist' &&
          <Link to='/'><i className="fas fa-home"></i></Link>}
        {location.pathname.includes('/games') &&
          <Link to='/'><i className="fas fa-home"></i></Link>}
        <section className='title-container'>
          <p className='game-title'>Board Game </p>
          <p className='stretch-title'>Stretch</p>
        </section>
        <img src={stretch} className='stretch-image'/>
      </section>
      {location.pathname !== '/wishlist' &&
        <Link className="wishlist_title" to='/wishlist'><i className="far fa-heart"></i>Wishlist
        </Link>}
    </nav>
  )
}

export default Header;
