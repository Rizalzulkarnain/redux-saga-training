import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getTodos } from '../redux/actions/todoActions';

import Todolist from '../components/todo/Todolist';
import { H1 } from '../styles';

const Todo = ({ history: push }) => {
  const dispatch = useDispatch();

  const { items, isLoading, error } = useSelector(({ todos }) => todos);

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  return (
    <>
      {isLoading && (
        <div>
          <H1>Please Wait..., Retrieving data from Server</H1>
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
