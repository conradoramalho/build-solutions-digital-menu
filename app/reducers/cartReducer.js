import * as actions from '../actions/cartActions';

const INITIAL_STATE = {
  isOpen: false,
  items: [],
};

function cartReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actions.OPEN_CART:
      return {...state, isOpen: true};
    case actions.ADD_CART_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    default:
      return state;
  }
}

export default cartReducer;
