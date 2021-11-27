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
            default:
            return state

      }
}

export default cartReducer;