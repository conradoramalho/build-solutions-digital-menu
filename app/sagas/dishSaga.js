import {takeLatest, put, all, call} from 'redux-saga/effects';
import * as ACTIONS from '../actions/dishActions';
import API from '../api';

function* getDishesByCategory({payload}) {
  try {
    const {data} = yield call(API.getDishesByCategory, payload);

    yield put({type: ACTIONS.DISHES_SUCCESS, payload: data});
  } catch (error) {
    yield put({type: ACTIONS.DISHES_ERROR, payload: error});
  }
}

export default function* root() {
  yield all([takeLatest(ACTIONS.DISHES_FETCH, getDishesByCategory)]);
}
