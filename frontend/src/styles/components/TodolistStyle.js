import styled from 'styled-components';

export const TodolistContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 5px;
  padding-bottom: 30px;
`;
