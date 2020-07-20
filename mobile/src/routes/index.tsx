import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Register from '../pages/Register';
import Login from '../pages/Login';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
    <Auth.Navigator
        screenOptions={{
            headerShown: true,
            headerStyle: {
                backgroundColor: '#333331',
            },
            headerTintColor: '#fff',
            cardStyle: { backgroundColor: '#333333' },
        }}
    >
        <Auth.Screen name="Register" component={Register} />
        <Auth.Screen name="Login" component={Login} />
    </Auth.Navigator>
);

export default AuthRoutes;