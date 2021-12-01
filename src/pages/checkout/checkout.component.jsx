import React from "react";
import { connect } from "react-redux";

import CheckoutItem from "../../components/ckeckout-item/checkout-item.component";

import { selectCartItemsTotal } from "../../redux/cart/cart.selector";

import './checkout.style.scss'

const CheckoutPage = ( { cartItems , total } ) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        {cartItems.map(item => <CheckoutItem item={item} />)}
        <div className='total'>${total}</div>
    </div>
)


const mapStateToProps = state => (
    {
        cartItems : state.cart.cartItems,
        total : selectCartItemsTotal(state)
    }
)

export default connect(mapStateToProps)(CheckoutPage);