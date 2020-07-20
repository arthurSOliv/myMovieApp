import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';

import { Title, Form, Error } from './styles';

const Login: React.FC = () => {
  const [inputError, setInputError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  async function handleUserLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!email || !password) {
      setInputError('Email and Password cannot be empty!');
      return;
    }

    const response = await api.get(`/users/${email}/${password}`);

    if (response.data.id !== undefined) {
      history.push(`/dashboard/${response.data.id}`);
    } else {
      setInputError('Invalid Email or Password!');
    }
  }
  return (
    <>
      <Title>Login</Title>
      <Form onSubmit={handleUserLogin}>
        <div>
          <input
            type="text"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Type your email"
            className="login"
          />
        </div>
        <div>
          <input
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
            placeholder="Type your password"
            className="login"
          />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </Form>
      {inputError && <Error>{inputError}</Error>}
    </>
  );
};

export default Login;
