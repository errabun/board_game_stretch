import React from 'react'
import './WishCard.css';
import { useSelector, useDispatch } from 'react-redux';
import { removeWish } from '../../actions/index';

function WishCard({title, price, img, id}) {
    const dispatch = useDispatch();
    return (
        <div className="wish_card">
            <p>{title}</p>
            <p>{price}</p>
            <img className="wish_img" src={img} />
            <button onClick={() => dispatch(removeWish(id))}>-</button>
        </div>
    )
}

export default WishCard;