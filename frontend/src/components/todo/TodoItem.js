import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../../redux/actions/todoActions';

import {
  TodoItemWrapper,
  Circle,
  Title,
  Description,
  DivLeft,
  DivRight,
  ButtonCard,
} from '../../styles';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClickDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleChangeRoute = (id) => {
    history.push(`/edit/${id}`);
  };

  return (
    <TodoItemWrapper>
      <Circle>
        <h2>{todo.id}</h2>
      </Circle>
      <Title>{todo.title}</Title>
      <Description>{todo.description}</Description>
      <DivLeft>
        <ButtonCard onClick={() => handleChangeRoute(todo.id)}>
          Update
        </ButtonCard>
      </DivLeft>
      <DivRight>
        <ButtonCard onClick={() => handleClickDelete(todo.id)}>
          Delete
        </ButtonCard>
      </DivRight>
    </TodoItemWrapper>
  );
};

export default React.memo(TodoItem);
