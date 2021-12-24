import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as RootNavigation from './src/routes/RootNavRef';
import Authenticate from './src/screens/Signin';
import Home from './src/screens/Home';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer ref={RootNavigation.navigationRef}>
      <Stack.Navigator>
        {/* <Stack.Screen name="Home" component={Home} /> */}
        <Stack.Screen name="Authenticate" component={Authenticate} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
