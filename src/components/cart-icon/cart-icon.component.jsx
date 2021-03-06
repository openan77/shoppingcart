import React from "react";
import { connect } from "react-redux";

import { toggleCartHidden } from "../../redux/cart/cart.action";
import { selectCartItemsCount } from "../../redux/cart/cart.selector";

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.style.scss';

const CartIcon = ( { ToggleCartHidden , count } ) => {
      return(
      <div className='cart-icon' onClick={ToggleCartHidden}>
            <ShoppingIcon className='shopping-icon'  />
            <span className='item-count'>{count}</span>
      </div>
)}

const mapDispatchToProps = dispatch => (
      {
            ToggleCartHidden : () => dispatch(toggleCartHidden())
      }
);

const mapStateToProps = state => (
      {
            count : selectCartItemsCount(state)
      }
)


export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);