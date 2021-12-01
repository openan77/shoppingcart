import { addItemToCart , clearItemFromCart , removeItemToCart } from "./cart.utils";

const initial_state = {
      hidden:true,
      cartItems:[],
      total:0
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
                  return {
                        ...state,
                        cartItems : addItemToCart( state.cartItems , action.payload )
                  };
            case 'REMOVE_ITEM':
                  return{
                        ...state,
                        cartItems : removeItemToCart( state.cartItems , action.payload )
                  };
            case 'CLEAR_ITEM':
                  return{
                        ...state,
                        cartItems  : clearItemFromCart( state.cartItems , action.payload )
                  }
                  
            default:
                  return state;

      }
}

export default cartReducer;