import React from 'react';
import { Container, ButtonText } from './style';

const Button: React.FC = ({ children }) => (
    <Container>
        <ButtonText>
            Register
        </ButtonText>
    </Container>
);

export default Button;