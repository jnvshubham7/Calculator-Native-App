import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import { ThemeContext } from '../context/ThemeContext';
import CalculatorScreen from '../screens/CalculatorScreen';
import UnitConverterScreen from '../screens/UnitConverterScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <NavigationContainer theme={isDarkMode ? darkTheme : lightTheme}>
      <Stack.Navigator initialRouteName="Calculator">
        <Stack.Screen name="Calculator" component={CalculatorScreen} />
        <Stack.Screen name="UnitConverter" component={UnitConverterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const lightTheme = {
  dark: false,
  colors: {
    primary: '#1f1f1f',
    background: '#ffffff',
    card: '#ffffff',
    text: '#000000',
    border: '#cccccc',
    notification: '#1f1f1f',
  },
};

const darkTheme = {
  dark: true,
  colors: {
    primary: '#ffffff',
    background: '#1f1f1f',
    card: '#1f1f1f',
    text: '#ffffff',
    border: '#333333',
    notification: '#ffffff',
  },
};

export default AppNavigator;
