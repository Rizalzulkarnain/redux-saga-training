import React from 'react';
import { Link } from 'react-router-dom';

import { Nav, NavChild } from '../../styles';

const Header = () => {
  return (
    <Nav>
      <Link to="/">
        <h1>Todo-App</h1>
      </Link>

      <NavChild>
        <Link to="/todos">Todos</Link>
      </NavChild>

      <NavChild>
        <Link to="/addtodo">Add Todos</Link>
      </NavChild>

      <NavChild>
        <Link to="/about">About</Link>
      </NavChild>
    </Nav>
  );
};

export default Header;
