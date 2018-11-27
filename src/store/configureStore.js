import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
// reducer
import reducer from './reducers';
// saga
import saga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
);

export default store;

sagaMiddleware.run(saga);
