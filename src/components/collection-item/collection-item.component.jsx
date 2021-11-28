import React from "react";
import { connect } from "react-redux";

import CustomButton from "../custom-button/custom-button.component";

import { addItem } from "../../redux/cart/cart.action";

import './collection-item.style.scss';

const CollectionItem = ({ item , addItem } ) => {
    
    return(
    <div className='collection-item'>
        <div
        className='image'
        style={{
          backgroundImage: `url(${item.imageUrl})`
        }}
        />
        <div className='collection-footer'>
            <span className='name'>{item.name}</span>
            <span className='price' onClick={ () => addItem(item) } >{item.price}</span>
        </div>
        <CustomButton>add to cart</CustomButton>
    </div>
)}


const mapDispatchToProps = dispatch => ({
    addItem : item => dispatch(addItem(item))
  });
  
export default connect(null,mapDispatchToProps)(CollectionItem);