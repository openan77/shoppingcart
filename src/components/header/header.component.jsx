import React from "react";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";
import { connect } from "react-redux";


import './header.style.scss'

const Header = ( { hidden } ) =>(
      <div className='header'>
         <div className='options'>
               <CartIcon />
         </div>
         {hidden ? null : <CartDropDown />}
      </div>
)

const mapStateToProps = state => (
      {
            hidden : state.cart.hidden
      }
)

export default connect(mapStateToProps)(Header);