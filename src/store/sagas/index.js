import { put, call, takeLatest } from 'redux-saga/effects';
import * as API from '../../api';
import { searchFailed, searchSucceded, API_CALL_REQUESTED } from '../actions';

function* searchRecipe(action) {
  try {
    const res = yield call(API.makeSearchRequest, action.payload);
    const data = yield res.json();
    if (res.status === 200) {
      return yield put(searchSucceded(data.results, action.type));
    }
    return yield put(searchFailed(data.message));
  } catch (error) {
    return error;
  }
}

export default function* saga() {
  yield takeLatest(API_CALL_REQUESTED, searchRecipe);
}
