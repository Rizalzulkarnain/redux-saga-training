import styled from 'styled-components';
import mixins from '../mixins';

export const TodoItemWrapper = styled.div`
  background: #fff;
  margin: 20px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.2);
  transition: 0.5s;
`;

export const Circle = styled.div`
  width: 100%;
  height: 100%;
  background: black;
  clip-path: circle(70px at center 0);
  text-align: center;

  h2 {
    color: #fff;
    font-size: 4.5 em;
    padding: 20px 0;
  }
`;

export const Title = styled.div`
  color: black;
  font-size: 14px;
  text-align: center;
  font-weight: 500;
  text-transform: uppercase;
  margin-bottom: 10px;
`;

export const Description = styled.div`
  text-align: center;
  font-size: 12px;
`;

export const DivLeft = styled.div`
  float: left;
  margin-left: 20px;
  padding-bottom: 5px;
`;

export const DivRight = styled.div`
  float: right;
  margin-right: 20px;
  padding-bottom: 5px;
`;

export const ButtonCard = styled.button`
  margin: 2px 0;
  padding: 3px 15px;
  cursor: pointer;
  transition: background-color 0.28s ease, color 0.28s ease,
    box-shadow 0.28s ease;
  overflow: hidden;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);

  &:hover {
    ${mixins.outline}
    ${mixins.link}
  }
`;
