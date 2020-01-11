export const OPEN_CART = 'OPEN_CART';
export const CLOSE_CART = 'CLOSE_CART';
export const ADD_CART_ITEM = 'ADD_CART_ITEM';

export const openCart = () => ({type: OPEN_CART, payload: undefined});
export const closeCart = () => ({type: CLOSE_CART, payload: undefined});
export const addCartItem = item => ({type: ADD_CART_ITEM, payload: item});
