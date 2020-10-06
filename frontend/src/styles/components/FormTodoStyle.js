import styled from 'styled-components';

export const DivContainer = styled.div`
  position: relative;
  max-width: 45rem;
  margin: 5rem auto;
  background: #fff;
  width: 100%;
  padding: 3rem 5rem 0;
  border-radius: 1px;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14),
      0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);
    -webkit-transform: scale(0.98);
    transform: scale(0.98);
    -webkit-transition: -webkit-transform 0.28s ease-in-out;
    transition: -webkit-transform 0.28s ease-in-out;
    transition: transform 0.28s ease-in-out;
    transition: transform 0.28s ease-in-out, -webkit-transform 0.28s ease-in-out;
    z-index: -1;
  }

  &:hover:before {
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  h1 {
    font-size: 2rem;
    text-align: center;
    margin: 0 0 2em;
  }
`;

export const FormGroup = styled.div`
  position: relative;
  margin-top: 2.25rem;
  margin-bottom: 2.25rem;
`;

export const ButtonContainer = styled.div`
  text-align: center;
`;

export const Button = styled.button`
  position: relative;
  background: currentColor;
  border: 1px solid currentColor;
  font-size: 1.1rem;
  color: #4f93ce;
  margin: 3rem 0;
  padding: 0.75rem 3rem;
  cursor: pointer;
  -webkit-transition: background-color 0.28s ease, color 0.28s ease,
    box-shadow 0.28s ease;
  transition: background-color 0.28s ease, color 0.28s ease,
    box-shadow 0.28s ease;
  overflow: hidden;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);

  &:before {
    content: '';
    position: absolute;
    background: #071017;
    border: 50vh solid #1d4567;
    width: 30vh;
    height: 30vh;
    border-radius: 50%;
    display: block;
    top: 50%;
    left: 50%;
    z-index: 0;
    opacity: 1;
    -webkit-transform: translate(-50%, -50%) scale(0);
    transform: translate(-50%, -50%) scale(0);
  }

  &:hover {
    color: #337ab7;
    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14),
      0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.2);
  }

  &:active::before {
    -webkit-transition: opacity 0.28s ease 0.364s, -webkit-transform 1.12s ease;
    transition: opacity 0.28s ease 0.364s, -webkit-transform 1.12s ease;
    transition: transform 1.12s ease, opacity 0.28s ease 0.364s;
    transition: transform 1.12s ease, opacity 0.28s ease 0.364s,
      -webkit-transform 1.12s ease;
    -webkit-transform: translate(-50%, -50%) scale(1);
    transform: translate(-50%, -50%) scale(1);
    opacity: 0;
  }

  &:focus {
    outline: none;
  }
`;

export const ButtonSpan = styled.span`
  color: #fff;
  position: relative;
  z-index: 1;
`;
