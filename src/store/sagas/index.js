import { all, put, call, apply, takeLatest } from 'redux-saga/effects';
import * as API from '../../api';
import { searchFailed, searchSucceded, API_CALL_REQUESTED } from '../actions';

function* searchRecipe(action) {
  try {
    const [res1, res2] = yield all([
      call(API.makeSearchRequest, action.payload, 1),
      call(API.makeSearchRequest, action.payload, 2),
    ]);

    if (res1.status === 200 && res2.status === 200) {
      const [data1, data2] = yield all([
        apply(res1, res1.json),
        apply(res2, res2.json),
      ]);
      return yield put(searchSucceded([...data1.results, ...data2.results]));
    }
    throw new Error('Incorrect server response');
  } catch (error) {
    return yield put(searchFailed(error.message));
  }
}

export default function* saga() {
  yield takeLatest(API_CALL_REQUESTED, searchRecipe);
}
