import { createStore, applyMiddleware } from 'redux';
import createSagaMidlleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducers from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMidlleware();

const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
