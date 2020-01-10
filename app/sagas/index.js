import {all, fork} from 'redux-saga/effects';
import homeSaga from './homeSaga';
import categorySaga from './categorySaga';
import dishSaga from './dishSaga';
import cartSaga from './cartSaga';

export default function* root() {
  yield all([
    fork(homeSaga),
    fork(categorySaga),
    fork(dishSaga),
    fork(cartSaga),
  ]);
}
