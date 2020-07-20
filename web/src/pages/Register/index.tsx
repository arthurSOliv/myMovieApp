import React, { useState, FormEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';

import { Title, Form, Ancora } from './styles';

const Register: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  async function handleUserSign(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const user = {
      username: 'Arthur',
      email,
      password,
    };

    const response = await api.post('/users', user);

    history.push('/login');

    return response.data;
  }
  return (
    <>
      <Title>Register</Title>
      <Link to="/login">
        <Ancora>Login</Ancora>
      </Link>
      <Form onSubmit={handleUserSign}>
        <div>
          <input
            value={email}
            onChange={e => setEmail(e.target.value)}
            type="text"
            placeholder="Type your email"
          />
        </div>
        <div>
          <input
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
            placeholder="Type your password"
          />
        </div>
        <div>
          <button type="submit">Sign out</button>
        </div>
      </Form>
    </>
  );
};

export default Register;
