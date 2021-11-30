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


