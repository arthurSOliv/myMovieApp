import React from 'react';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Title, Container } from './style';

const Register: React.FC = () => {
    return (
        <Container>
            <Title>Register to search for your favorites movies</Title>

            <Input />
            <Input />

            <Button onPress={() => console.log('deu')}/>
        </Container>
    )
}

export default Register;