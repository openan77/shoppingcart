const initial_state = {
      hidden:true,
      cartItems:[]
}

const cartReducer = (state = initial_state , action) => 
{     
      switch(action.type){
            case 'TOOGLE_CART_HIDDEN':
                  return{
                        ...state,
                        hidden : !state.hidden
                  };
            case 'ADD_ITEM':
                  const existingIndex = state.cartItems.findIndex(
                        item => item.id===action.payload.id
                  )

                  if(existingIndex >= 0){
                        state.cartItems[existingIndex].quantity+=1
                  }
                  else{
                        return{
                              ...state,
                              cartItems : [...state.cartItems,  {...action.payload, quantity: 1 } ]
                        }
                  }                 

            default:
            return state

      }
}

export default cartReducer;