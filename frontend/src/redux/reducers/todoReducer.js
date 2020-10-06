import * as Type from '../constants/todoTypes';

const initialState = {
  items: [],
  item: {},
  isLoading: true,
  error: null,
};

export default function todosReducer(state = initialState, { type, payload }) {
  switch (type) {
    case Type.FETCH_TODOS:
    case Type.FETCH_TODO:
    case Type.CREATE_TODO:
    case Type.UPDATE_TODO:
    case Type.DELETE_TODO:
      return {
        ...state,
        isLoading: true,
        error: null,
      };

    case Type.FETCH_TODOS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        items: payload.items,
      };

    case Type.FETCH_TODO_SUCCESS:
      return {
        ...state,
        isLoading: false,
        item: payload.item,
      };

    case Type.CREATE_TODO_SUCCESS:
    case Type.DELETE_TODO_SUCCESS:
    case Type.UPDATE_TODO_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
      };

    case Type.FETCH_TODOS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: payload.error,
        items: [],
      };

    case Type.FETCH_TODO_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: payload.error,
        item: {},
      };

    case Type.CREATE_TODO_FAILURE:
    case Type.UPDATE_TODO_FAILURE:
    case Type.DELETE_TODO_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: payload.error,
      };

    default:
      return state;
  }
}
