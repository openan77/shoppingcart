import React from "react";
import { connect } from "react-redux";

import { toggleCartHidden } from "../../redux/cart/cart.action";

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.style.scss';

const CartIcon = ( { ToggleCartHidden } ) => {
      return(
      <div className='cart-icon' onClick={ToggleCartHidden}>
            <ShoppingIcon className='shopping-icon'  />
            <span className='item-count'>0</span>
      </div>
)}

const mapDispatchToProps = dispatch => (
      {
            ToggleCartHidden : () => dispatch(toggleCartHidden())
      }
);


export default connect(null,mapDispatchToProps)(CartIcon);