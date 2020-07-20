import styled from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
  font-size: 48px;
  color: #f0f0f5;
`;

export const Form = styled.form`
  margin-top: 40px;
  display: flex;

  input {
    flex: 1;
    height: 40px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px;
    margin: 0 10px;
  }

  button {
    width: 200px;
    height: 40px;
    background: #04d361;
    border-radius: 0px 5px 5px 0px;
    border: 0;
    color: #f0f0f5;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }
`;

export const MoviesDiv = styled.div`
  margin-top: 80px;
  max-width: 700px;

  span {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;
    transition: transform 0.2s;

    & + span {
      margin-top: 15px;
    }

    &:hover {
      transform: translateX(10px);
    }

    img {
      width: 100px;
      height: auto;
    }

    div {
      margin-left: 16px;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }
  }
`;

export const Link = styled.a`
  font-size: 48px;
  color: #f0f0f5;
`;
