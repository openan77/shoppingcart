import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selector";
import { toggleCartHidden } from "../../redux/cart/cart.action";

import './cart-dropdown.style.scss'

const CartDropDown = ( {cartItems , history , dispatch } ) => (
      <div className='cart-dropdown'>
            <div className='cart-items'>
                  {cartItems.map(
                        cartItem => <CartItem key={cartItem.id} cartItem={cartItem} />
                  )}
            </div>
            <CustomButton onClick={ () => {history.push('/checkout');
            dispatch(toggleCartHidden());
            }} >CHECK OUT</CustomButton>
      </div>
)

const mapStateToProps = state => (
      {
            cartItems : selectCartItems(state)
      }
)

export default withRouter(connect(mapStateToProps)(CartDropDown));