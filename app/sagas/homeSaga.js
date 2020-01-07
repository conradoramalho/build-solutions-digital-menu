import {takeLatest, put, delay, all} from 'redux-saga/effects';
import * as ACTIONS from '../actions/homeActions';

function* getHighlights() {
  try {
    yield delay(2000);
    yield put({type: ACTIONS.HIGHLIGHTS_SUCCESS, payload: 1865});
  } catch (error) {
    yield put({type: ACTIONS.HIGHLIGHTS_FAILURE, payload: error});
  }
}

export default function* root() {
  yield all([takeLatest(ACTIONS.HIGHLIGHTS_FETCH, getHighlights)]);
}
