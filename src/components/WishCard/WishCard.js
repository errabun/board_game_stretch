import React from 'react'
import './WishCard.css';
import { useSelector, useDispatch } from 'react-redux';
import { removeWish } from '../../actions/index';

function WishCard({title, price, img, id, rank}) {
    const dispatch = useDispatch();
    return (
        <div className="wish_card">
            <div className="spacing">
            <img className="wish_img" src={img} />
                <div>
                <p className="title wish_text">{title}</p>
                <p className="wish_text">Rank: {rank}</p>
                </div>
            </div>
            <p className="wish-price">${price}</p>
            <button className="remove_button" onClick={() => dispatch(removeWish(id))}>Remove from WishList</button>
        </div>
    )
}

export default WishCard;
