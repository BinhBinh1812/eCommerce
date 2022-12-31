import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SCREEN_NAME} from '../utils/appConst';

import HomeScreen from '../screens/HomeScreen/index';

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={SCREEN_NAME.HOME_SCREEN} component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootStack;
