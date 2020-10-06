import * as Type from '../constants/todoTypes';

//Fetch Todos
export const getTodos = () => ({
  type: Type.FETCH_TODOS,
});

export const getTodosSuccess = (payload) => ({
  type: Type.FETCH_TODOS_SUCCESS,
  payload,
});

export const getTodosFailure = (payload) => ({
  type: Type.FETCH_TODOS_FAILURE,
  payload,
});

//Fetch Single Todo
export const getSingleTodo = (payload) => ({
  type: Type.FETCH_TODO,
  payload,
});

export const getSingleTodoSuccess = (payload) => ({
  type: Type.FETCH_TODO_SUCCESS,
  payload,
});

export const getSingleTodoFailure = (payload) => ({
  type: Type.FETCH_TODO_FAILURE,
  payload,
});

//Create Todo
export const createTodo = (payload) => ({
  type: Type.CREATE_TODO,
  payload,
});

export const createTodoSuccess = (payload) => ({
  type: Type.CREATE_TODO_SUCCESS,
  payload,
});

export const createTodoFailure = (payload) => ({
  type: Type.CREATE_TODO_FAILURE,
  payload,
});

//Delete Todo
export const deleteTodo = (payload) => ({
  type: Type.DELETE_TODO,
  payload,
});

export const deleteTodoSuccess = (payload) => ({
  type: Type.DELETE_TODO_SUCCESS,
  payload,
});

export const deleteTodoFailure = (payload) => ({
  type: Type.DELETE_TODO_FAILURE,
  payload,
});

//Update Todo
export const updateTodo = (payload) => {
  return {
    type: Type.UPDATE_TODO,
    payload,
  };
};

export const updateTodoSuccess = (payload) => ({
  type: Type.UPDATE_TODO_SUCCESS,
  payload,
});

export const updateTodoFailure = (payload) => ({
  type: Type.UPDATE_TODO_FAILURE,
  payload,
});
