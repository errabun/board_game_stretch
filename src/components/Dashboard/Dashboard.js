import './Dashboard.css';
import { useSelector, useDispatch } from 'react-redux';
import { addWish, removeWish } from '../../actions';
import { Link } from 'react-router-dom';

function Dashboard() {
  const dispatch = useDispatch()
  const games = useSelector(state => state.boardGames)
const gameImages = []
  // const gameImages = games.map(game => {
  //   return (
  //     <section className='game' key={game.id} style={{backgroundImage: `url(${game.image_url})`}}>
  //       <Link to={`/games/${game.id}`} className='to-details-page'>
  //       <section className='game-hover'>
  //         <h1 className='card-name'>{game.name}</h1>
  //         <div className="card-spacing">
  //           <div>
  //             <p className='detail'>{`👥 ${game.min_players}-${game.max_players}`}</p>
  //               <p className='detail time'>{`🕐 ${game.min_playtime}-${game.max_playtime}`}</p>
  //           </div>
  //           <div>
  //             <p className='detail published'><i className="far fa-calendar-alt"></i>
  //               {`Published: ${game.year_published}`}</p>
  //             <p className='detail age'><i className="fas fa-child"></i>
  //               {`Min Age: ${game.min_age}`}</p>
  //           </div>
  //         </div>
  //           <div className='bottom-details'>
  //             <p className='bottom-label'>Publisher & Designer</p>
  //             <p className='detail publisher'>{`P: ${game.primary_publisher.name}`}</p>
  //             <p className='detail'>{`D: ${game.primary_designer.name}`}</p>
  //         </div>
  //         <p className='detail price'><em>${game.price}</em></p>
  //       </section>
  //       </Link>
  //       {!game.isWished ?
  //         <button className='card-button' onClick={() => dispatch(addWish(game))}>Add to wishlist</button>
  //         : game.isWished && <button className='card-button remove' onClick={() => dispatch(removeWish(game.id))}>Remove from wishlist</button>}
  //     </section>
  //   )
  // })

  const checkStatus = () => {
    if (gameImages.length === 0) {
      return <p>Loading board games..</p>;
    } else {
      return gameImages;
    }
  }

  return (
    <main className="dashboard">
      {checkStatus()}
    </main>
  )
}

export default Dashboard;
