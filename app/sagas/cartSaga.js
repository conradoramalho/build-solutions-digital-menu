import {takeLatest, put, all, call} from 'redux-saga/effects';
import * as ACTIONS from '../actions/homeActions';
import API from '../api';

function* getHighlights() {
  // try {
  //   const {data} = yield call(API.getHighlights);
  //   yield put({type: ACTIONS.HIGHLIGHTS_SUCCESS, payload: data});
  // } catch (error) {
  //   yield put({type: ACTIONS.HIGHLIGHTS_FAILURE, payload: error});
  // }
}

export default function* root() {
  yield all([takeLatest(ACTIONS.HIGHLIGHTS_FETCH, getHighlights)]);
}
