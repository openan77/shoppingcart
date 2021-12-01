export const addItemToCart = ( origItems , newItem ) => {
    console.log(origItems , newItem)
    const existingItem = origItems.find
    (
        item => item.id === newItem.id
    )

    if(existingItem){
        return origItems.map(
            origItem => origItem.id === newItem.id ? {...origItem , quantity : origItem.quantity+1 } : origItem
        )
    }

    return [
        ...origItems, 
        {...newItem , quantity : 1 }
    ]
}

export const removeItemToCart = ( origItems , removeItem ) => {
    const existingItem = origItems.find(
        item => item.id === removeItem.id
    )

    if(existingItem.quantity===1){
        return origItems.filter(
            origItem => origItem.id !== removeItem.id
        )
    }
    return origItems.map(
        origItem => origItem.id === removeItem.id ? {...origItem,quantity:origItem.quantity-1} : origItem
    )
}

export const clearItemFromCart = ( origItems , clearItem ) => {
    return origItems.filter(
        item => item.id !== clearItem.id
    )
};


