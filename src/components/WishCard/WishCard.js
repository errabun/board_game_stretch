import React from 'react'
import './WishCard.css';

function WishCard({title, price, img}) {
    return (
        <div>
            <p>{title}</p>
            <p>{price}</p>
            <img src={img} />
        </div>
    )
}

export default WishCard;