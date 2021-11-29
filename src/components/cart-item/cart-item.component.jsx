import React from "react";

import './cart-item.style.scss'

const CartItem = ( { cartItem } ) => {
    //console.log(cartItem)
    return(
    <div className='cart-item'>
        <img src={cartItem.imageUrl} alt="item" />
        <div className='item-details'>
            <span className='name'>{cartItem.name}</span>
            <span className='price'>
                {cartItem.quantity} x ${cartItem.price}
            </span>
        </div>
    </div>
)}

export default CartItem;