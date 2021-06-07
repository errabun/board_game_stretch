import './Wishlist.css'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addWish, removeWish } from '../../actions/index';
import WishCard from '../WishCard/WishCard';

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

    return (
      <div className='wish-cards-container'>
        {wishCards}
        <div className='total-container'>
          <p className='wish-total'>Total price of WishList: {formatter.format(total)}</p>
        </div>
      </div>

    )
}

export default Wishlist
