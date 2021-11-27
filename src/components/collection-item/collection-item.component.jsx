import React from "react";

import CustomButton from "../custom-button/custom-button.component";

import './collection-item.style.scss';

const CollectionItem = ({ item } ) => (
    <div className='collection-item'>
        <div
        className='image'
        style={{
          backgroundImage: `url(${item.imageUrl})`
        }}
        />
        <div className='collection-footer'>
            <span className='name'>{item.name}</span>
            <span className='price'>{item.price}</span>
        </div>
        <CustomButton>add to cart</CustomButton>
    </div>
)

export default CollectionItem;