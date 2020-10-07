import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getTodos } from '../redux/actions/todoActions';

import Spinner from '../components/spinner/Spinner';
import Todolist from '../components/todo/Todolist';
import { H1 } from '../styles';

const Todo = () => {
  const dispatch = useDispatch();

  const { items, isLoading, error } = useSelector(({ todos }) => todos);

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  return (
    <>
      {isLoading && (
        <div>
          <Spinner />
        </div>
      )}
      {error && (
        <div>
          <H1>{error}</H1>
        </div>
      )}

      {items && (
        <div>
          <Todolist todos={items} />
        </div>
      )}
    </>
  );
};

export default Todo;
