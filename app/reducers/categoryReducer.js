import * as actions from '../actions/categoryActions';

const INITIAL_STATE = {
  mainCategory: {
    isLoading: false,
    list: [],
  },
};

function categoryReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actions.MAIN_CATEGORIES_FETCH:
      return {
        ...state,
        mainCategory: {
          ...state.mainCategory,
          isLoading: true,
        },
      };
    case actions.MAIN_CATEGORIES_SUCCESS:
      return {
        ...state,
        mainCategory: {
          ...state.mainCategory,
          list: action.payload,
          isLoading: false,
        },
      };
    case actions.MAIN_CATEGORIES_ERROR:
      return {
        ...state,
        mainCategory: {
          ...state.mainCategory,
          isLoading: false,
          list: [],
        },
      };
    default:
      return state;
  }
}

export default categoryReducer;
