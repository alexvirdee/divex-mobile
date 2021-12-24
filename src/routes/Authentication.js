import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '../screens/Signin';

const Auth = createStackNavigator();

const Authentication = () => (
  <Auth.Navigator>
    <Auth.Screen
      name="SignIn"
      component={SignIn}
      options={{
        headerTitle: 'Login',
      }}
    />
  </Auth.Navigator>
);

export default Authentication;
