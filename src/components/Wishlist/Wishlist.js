import './Wishlist.css'
// import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import WishCard from '../WishCard/WishCard';
import oops from '../../assets/oops.png';
import stretch from '../../assets/stretch.png'

function Wishlist() {
const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});
  const wishList = useSelector(state => state.wishList);
  const wishCards = wishList.map(wish => {
    return (
      <WishCard
        key={wish.id}
        id={wish.id}
        title={wish.name}
        price={wish.price}
        img={wish.images.small}
        rank={wish.rank}
      />)
  })

  const total = wishList.reduce((acc, wish) => {
    const price = parseFloat(wish.price)
    return acc + price
  }, 0)

  const checkTotal = () => {
    if (total === 0) {
      return <p className='wish-error'>You have not stretched your budget, please navigate home to add games<img src={oops} alt='oops' className='oops'/></p>
    } else {
      return <p className='wish-total'>Total Price of Wish List: {formatter.format(total)}</p>
    }
  }

  return (
    <div className='wish-cards-container'>
      {wishCards}
      {checkTotal()}
      {/* <p className='wish-total'>Total Price of Wish List: {formatter.format(total)}</p> */}
    </div>
  )
}

export default Wishlist;
