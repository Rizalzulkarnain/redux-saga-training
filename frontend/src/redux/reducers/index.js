import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

//reducers
import todosReducer from './todoReducer';

export default (history) =>
  combineReducers({
    todos: todosReducer,
    router: connectRouter(history),
  });
