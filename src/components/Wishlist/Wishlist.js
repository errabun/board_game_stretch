import './Wishlist.css'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addWish, removeWish } from '../../actions/index';
import WishCard from '../WishCard/WishCard';

function Wishlist() {

  const wishList = useSelector(state => state.wishList);
  const wishCards = wishList.map(wish => {
    return (
      <WishCard 
        title={wish.name}
        price={wish.price}
        img={wish.images.thumb}
      />)
  })

    return (
      <div>
        {wishCards}
      </div>
    )
}

export default Wishlist
