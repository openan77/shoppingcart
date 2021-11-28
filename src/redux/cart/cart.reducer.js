const initial_state = {
      hidden:true,
      cartItems:[]
}

const cartReducer = (state = initial_state , action) => 
{     console.log(action)
      switch(action.type){
            case 'TOOGLE_CART_HIDDEN':
                  return{
                        ...state,
                        hidden : !state.hidden
                  };
            case 'ADD_ITEM':
                  return{
                        ...state,
                        cartItems : [...state.cartItems, action.payload]
                  }

            default:
            return state

      }
}

export default cartReducer;