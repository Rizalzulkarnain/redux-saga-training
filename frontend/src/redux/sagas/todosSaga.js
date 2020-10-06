import { delay, all, takeLatest, put, fork } from 'redux-saga/effects';
import * as services from '../services/todoService';
import * as Type from '../constants/todoTypes';
import * as actions from '../actions/todoActions';

//Fetch Todos
function* getTodos() {
  try {
    delay(1000);
    const { data } = yield services.getTodosServices();
    if (data) {
      yield put(actions.getTodosSuccess({ items: data }));
    }
  } catch (error) {
    yield put(
      actions.getTodosFailure({
        error: error.message,
      })
    );
  }
}

function* watchGetTodosSagas() {
  yield takeLatest(Type.FETCH_TODOS, getTodos);
}

//Fetch Todo
function* getTodo({ payload: { id } }) {
  try {
    const { data } = yield services.getTodoServices(id);
    console.log(data);
    if (data) {
      yield put(actions.getSingleTodoSuccess({ item: data }));
    }
  } catch (error) {
    yield put(actions.getSingleTodoFailure({ error: error.message }));
  }
}

function* watchGetTodoSagas() {
  yield takeLatest(Type.FETCH_TODO, getTodo);
}

//Add Todo
function* createTodo({ payload }) {
  try {
    const { data } = yield services.addTodoServices(payload);
    console.log(data);

    if (data) {
      yield put(actions.createTodoSuccess());
    }
  } catch (error) {
    yield put(Type.CREATE_TODO_FAILURE({ error: error.message }));
  }
}

function* watchCreateTodoSagas() {
  yield takeLatest(Type.CREATE_TODO, createTodo);
}

//Delete Todo
function* deleteTodo({ payload }) {
  try {
    yield services.deleteTodoServices(payload);
    yield getTodos();
  } catch (error) {
    yield put(Type.DELETE_TODO_FAILURE({ error: error.message }));
  }
}

function* watchDeleteTodoSagas() {
  yield takeLatest(Type.DELETE_TODO, deleteTodo);
}

//Update Todo
function* updateTodo({ payload: { id, body } }) {
  try {
    yield services.updateTodosServices(id, body);
  } catch (error) {
    yield put(Type.UPDATE_TODO_FAILURE({ error: error.message }));
  }
}

function* watchUpdateTodoSagas() {
  yield takeLatest(Type.UPDATE_TODO, updateTodo);
}

function* todoSagas() {
  yield all([
    fork(watchGetTodosSagas),
    fork(watchGetTodoSagas),
    fork(watchCreateTodoSagas),
    fork(watchDeleteTodoSagas),
    fork(watchUpdateTodoSagas),
  ]);
}

export default todoSagas;
