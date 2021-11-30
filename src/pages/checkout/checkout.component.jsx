import React from "react";
import { connect } from "react-redux";

import './checkout.style.scss'

const CheckoutPage = ( { cartItems } ) => (
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
            {cartItems.map(
                item => item.name
            )}
        </div>
    </div>
)

const mapStateToProps = state => (
    {
        cartItems : state.cart.cartItems
    }
)

export default connect(mapStateToProps)(CheckoutPage);