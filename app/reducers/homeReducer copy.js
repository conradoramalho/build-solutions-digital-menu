import * as actions from '../actions/homeActions';

const INITIAL_STATE = {
  counter: 1,
  highlights: [],
  isLoading: false,
  error: undefined,
};

function homeReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actions.HIGHLIGHTS_FETCH:
      return {...state, isLoading: true};
    case actions.HIGHLIGHTS_SUCCESS:
      return {
        ...state,
        highlights: action.payload,
        isLoading: false,
        error: undefined,
      };
    case actions.HIGHLIGHTS_ERROR:
      return {
        ...state,
        error: action.payload,
        highlights: [],
        isLoading: false,
      };
    default:
      return state;
  }
}

export default homeReducer;
