import { combineReducers } from 'redux';

//reducers
import todosReducer from './todoReducer';

const rootReducers = combineReducers({
  todos: todosReducer,
});

export default rootReducers;
