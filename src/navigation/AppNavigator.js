import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ThemeContext } from '../context/ThemeContext';
import CalculatorScreen from '../screens/CalculatorScreen';
import UnitConverterScreen from '../screens/UnitConverterScreen';

const Tab = createMaterialTopTabNavigator();

const AppNavigator = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <NavigationContainer theme={isDarkMode ? darkTheme : lightTheme}>
      <Tab.Navigator
        initialRouteName="Calculator"
        screenOptions={{
          tabBarIndicatorStyle: { backgroundColor: isDarkMode ? '#ffffff' : '#000000' },
          tabBarStyle: { backgroundColor: isDarkMode ? '#1f1f1f' : '#ffffff' },
          tabBarLabelStyle: { color: isDarkMode ? '#ffffff' : '#000000' },
        }}
      >
        <Tab.Screen name="Calculator" component={CalculatorScreen} />
        <Tab.Screen name="Unit_Converter" component={UnitConverterScreen} />
      </Tab.Navigator>
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
