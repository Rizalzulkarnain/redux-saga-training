import React from 'react';
import { Link } from 'react-router-dom';
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

  return (
    <TodoItemWrapper>
      <Circle>
        <h2>{todo.id}</h2>
      </Circle>
      <Title>{todo.title}</Title>
      <Link to={`http://localhost:5000/api/v1/todos/${todo.id}`}>
        <Description>{todo.description}</Description>
      </Link>
      <DivLeft>
        <ButtonCard>Update</ButtonCard>
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
