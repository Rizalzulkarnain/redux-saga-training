import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import createSagaMidlleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducers from './reducers';
import rootSaga from './sagas';

export const history = createBrowserHistory();
const sagaMiddleware = createSagaMidlleware();

const store = createStore(
  rootReducers(history),
  composeWithDevTools(
    applyMiddleware(sagaMiddleware, routerMiddleware(history))
  )
);

sagaMiddleware.run(rootSaga);

export default store;
