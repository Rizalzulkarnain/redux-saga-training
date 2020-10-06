import React from 'react';
import TodoItem from './TodoItem';

import { DivContainer, TodolistContainer, SearchContainer } from '../../styles';

const Todolist = ({ todos }) => {
  return (
    <DivContainer>
      <SearchContainer>
        <form>
          <input type="text" />{' '}
          <span>
            <button>Seacrh</button>
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
