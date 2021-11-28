export const toggleCartHidden = () => (
      {
          type: 'TOOGLE_CART_HIDDEN'
      }
);

export const addItem = item => (
      {
          type: 'ADD_ITEM',
          payload: item
      }
  );
  