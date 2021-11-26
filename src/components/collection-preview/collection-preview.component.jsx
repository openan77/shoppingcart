import React from "react";

import CollectionItem from "../collection-item/collection-item.component";

import './collection-preview.style.scss';

const CollectionPreview = ( { title , items } ) => {
    console.log(title)
    return (
    <div className='collection-preview'>
        <h1 className = 'title'>{title}</h1>
        <div className = 'preview'>
            {
                items.filter( (item,idx) => idx < 4 )
                .map(
                    item => <CollectionItem item = {item} />
                )
            }
        </div>
    </div>
)}

export default CollectionPreview;