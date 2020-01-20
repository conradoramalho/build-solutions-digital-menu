import * as actions from '../actions/categoryActions';

const INITIAL_STATE = {
  mainCategory: {
    isLoading: false,
    list: [],
  },
  currentCategory: {
    id: undefined,
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
    case actions.SET_CURRENT_CATEGORY:
      return {
        ...state,
        currentCategory: {
          id: action.payload,
        },
      };
    default:
      return state;
  }
}

export default categoryReducer;
