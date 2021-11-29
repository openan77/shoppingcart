import React from "react";
import { connect } from "react-redux";

import { toggleCartHidden } from "../../redux/cart/cart.action";

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.style.scss';

const CartIcon = ( { ToggleCartHidden , total } ) => {
      return(
      <div className='cart-icon' onClick={ToggleCartHidden}>
            <ShoppingIcon className='shopping-icon'  />
            <span className='item-count'>{total}</span>
      </div>
)}

const mapDispatchToProps = dispatch => (
      {
            ToggleCartHidden : () => dispatch(toggleCartHidden())
      }
);

const mapStateToProps = state => (
      {total : state.cart.cartItems.reduce(
            (previousValue, currentItem) => previousValue + currentItem.quantity , 0
      )}
)


export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);