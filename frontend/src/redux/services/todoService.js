import API from '../API/API';

const TODO_URL = process.env.REACT_APP_LINK_URL;

export const getTodosServices = () => API(TODO_URL);

export const getTodoServices = (id) => API(`${TODO_URL}/${id}`);

export const addTodoServices = (body) => API(TODO_URL, 'POST', body);

export const deleteTodoServices = (id) => API(`${TODO_URL}/${id}`, 'DELETE');

export const updateTodoServices = (id, body) =>
  API(`${TODO_URL}/${id}`, 'PUT', body);
