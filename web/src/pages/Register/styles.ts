import styled from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
  font-size: 48px;
  color: #f0f0f5;
`;

export const Ancora = styled.h1`
  font-size: 28px;
  color: #f0f0f5;
`;

export const Form = styled.form`
  margin-top: 40px;
  display: block;

  input {
    height: 40px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px;
    margin: auto;
    margin-bottom: 40px;
  }

  div {
    display: flex;
  }

  button {
    width: 200px;
    height: 40px;
    background: #04d361;
    border-radius: 5px;
    margin: auto;
    border: 0;
    color: #f0f0f5;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }
`;
