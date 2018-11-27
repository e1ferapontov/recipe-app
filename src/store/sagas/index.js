import { put, call, takeLatest } from 'redux-saga/effects';
import * as API from '../../api';
import { searchFailed, searchSucceded, API_CALL_REQUESTED } from '../actions';

function* searchRecipe(action) {
  console.log("###FROM SAGA REQUEST:", action.payload);
  try {
    const res = yield call(API.makeSearchRequest, action.payload);
    const data = yield res.json();
    if (res.status === 200) {
      console.log("###FROM SAGA RESPONSE:", data);
      return yield put(searchSucceded(data, action.type));
    }
    return yield put(searchFailed(data.message));
  } catch (error) {
    return error;
  }
}

export default function* saga() {
  yield takeLatest(API_CALL_REQUESTED, searchRecipe);
}
