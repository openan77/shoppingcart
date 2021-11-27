export const toggleCartHidden = () => (
      {
          type: 'TOOGLE_CART_HIDDEN'
      }
);

export const addCart = ( cart ) => (
      {
            type : 'CART_ADD',
            payload : cart
      }
);