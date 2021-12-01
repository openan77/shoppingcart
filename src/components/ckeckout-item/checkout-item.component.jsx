import React from "react";
import { connect } from "react-redux";

import './checkout-item.style.scss';

import { addItem , removeItem , clearItem  } from '../../redux/cart/cart.action';

const CheckoutItem = ( { item , addItem , removeItem , clearItem } ) => (
    <div className='checkout-item'>
        <div className='image-container'>
            <img src={item.imageUrl} alt="item" />
        </div>
        <span className='name'>{item.name}</span>
        <div className='quantity'>
            <div className='arrow' onClick={ ()=> removeItem(item)} >&#10094;</div>
            <div className='value'>{item.quantity}</div>
            <div className='arrow' onClick={ ()=> addItem(item)} >&#10095;</div>
        </div>
        <span className='price'>{item.price}</span>
        <div className='remove-button' onClick={ ()=> clearItem(item) } >&#10005;</div>
    </div>
)

const mapDispatchToProps = dispatch => (
    {
        addItem : item => dispatch(addItem(item)),
        removeItem : item => dispatch(removeItem(item)),
        clearItem : item => dispatch(clearItem(item))
    }
);


export default connect(null,mapDispatchToProps)(CheckoutItem);
