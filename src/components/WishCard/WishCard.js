import React from 'react'
import './WishCard.css';
import { useSelector, useDispatch } from 'react-redux';
import { removeWish } from '../../actions/index';

function WishCard({title, price, img, id}) {
    const dispatch = useDispatch();
    return (
        <div>
            <p>{title}</p>
            <p>{price}</p>
            <img src={img} />
            <button onClick={() => dispatch(removeWish(id))}>-</button>
        </div>
    )
}

export default WishCard;