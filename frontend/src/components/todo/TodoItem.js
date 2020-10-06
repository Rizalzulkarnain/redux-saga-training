import React from 'react';

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

  const handleClickDelete = (id) => {
    dispatch(deleteTodo(id));
    console.log(deleteTodo(id));
  };

  const handleClickUpdate = () => {
    console.log('Update');
  };

  return (
    <TodoItemWrapper>
      <Circle>
        <h2>{todo.id}</h2>
      </Circle>
      <Title>{todo.title}</Title>
      <Description>{todo.description}</Description>
      <DivLeft>
        <ButtonCard onClick={() => handleClickUpdate()}>Update</ButtonCard>
      </DivLeft>
      <DivRight>
        <ButtonCard onClick={() => handleClickDelete(todo.id)}>
          Delete
        </ButtonCard>
      </DivRight>
    </TodoItemWrapper>
  );
};

export default TodoItem;
