import React from 'react';
import TodoItem from './TodoItem';

import { DivContainer, TodolistContainer, SearchContainer } from '../../styles';

const Todolist = ({ todos }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    console.log('Search Data ...');
  };

  return (
    <DivContainer>
      <SearchContainer>
        <form onSubmit={onSubmit}>
          <input type="text" />{' '}
          <span>
            <button type="submit">Seacrh</button>
          </span>
        </form>
      </SearchContainer>

      <TodolistContainer>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </TodolistContainer>
    </DivContainer>
  );
};

export default Todolist;
