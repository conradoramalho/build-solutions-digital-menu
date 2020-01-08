import {takeLatest, put, all, call} from 'redux-saga/effects';
import * as ACTIONS from '../actions/categoryActions';
import API from '../api';

function* getMainCategories() {
  try {
    const {data} = yield call(API.getMainCategories);
    yield put({type: ACTIONS.MAIN_CATEGORIES_SUCCESS, payload: data});
  } catch (error) {
    yield put({type: ACTIONS.MAIN_CATEGORIES_ERROR, payload: error});
  }
}

export default function* root() {
  yield all([takeLatest(ACTIONS.MAIN_CATEGORIES_FETCH, getMainCategories)]);
}
