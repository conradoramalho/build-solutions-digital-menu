import {all, fork} from 'redux-saga/effects';
import homeSaga from './homeSaga';
import categorySaga from './categorySaga';

export default function* root() {
  yield all([fork(homeSaga), fork(categorySaga)]);
}
