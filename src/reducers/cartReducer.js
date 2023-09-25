export const cartInitialState = JSON.parse(window.localStorage.getItem('cart')) || [];

export const CART_ACTION_TYPES = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  CLEAR_CART: 'CLEAR_CART'
};

export const updateLocalStorage = state => {
  window.localStorage.setItem('cart', JSON.stringify(state));
};


export function cartReducer(state, action) {

  switch (action.type) {
    case CART_ACTION_TYPES.ADD_TO_CART: {
      const productInCartIndex = state.findIndex(item => item.id === action.payload.id);

      if (productInCartIndex >= 0) {

        const newState = structuredClone(state);
        newState[productInCartIndex].quantity += 1;

        updateLocalStorage(newState);
        return newState;

      } else {


        const newState = [
          ...state,
          {
            ...action.payload,
            quantity: 1
          }
        ];

        updateLocalStorage(newState);
        return newState;
      }
    };
    case CART_ACTION_TYPES.REMOVE_FROM_CART: {
      const newState = state.filter(item => item.id !== action.payload.id);
      updateLocalStorage(newState);

      return newState;
    };
    case CART_ACTION_TYPES.CLEAR_CART: {
      updateLocalStorage([]);
      return []
    };
  }

  return state;
};