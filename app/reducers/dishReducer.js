import * as actions from '../actions/dishActions';

const INITIAL_STATE = {
  dishes: {
    isLoading: false,
    list: [],
  },
};

function dishReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actions.DISHES_FETCH:
      return {
        ...state,
        dishes: {
          ...state.dishes,
          isLoading: true,
        },
      };
    case actions.DISHES_SUCCESS:
      return {
        ...state,
        dishes: {
          ...state.dishes,
          list: action.payload,
          isLoading: false,
        },
      };
    case actions.DISHES_ERROR:
      return {
        ...state,
        dishes: {
          ...state.dishes,
          isLoading: false,
          list: [],
        },
      };
    default:
      return state;
  }
}

export default dishReducer;
