import { all, fork } from 'redux-saga/effects';

//sagas
import todosSaga from './todosSaga';

export default function* rootSaga() {
  yield all([fork(todosSaga)]);
}
