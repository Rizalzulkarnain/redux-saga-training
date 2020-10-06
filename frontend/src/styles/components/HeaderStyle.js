import styled from 'styled-components';

export const Nav = styled.div`
  top: 0;
  position: fixed;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  height: auto;
  background-color: #2196f3;

  h1 {
    font-size: 18px;
  }
`;

export const NavChild = styled.div`
  margin-top: 14px;
`;
