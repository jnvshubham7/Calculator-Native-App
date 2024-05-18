import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity, Switch } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';
import { calculatorStyles as styles } from '../styles/calculatorStyles';

const CalculatorScreen = () => {
  const [result, setResult] = useState('');
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

  const handleButtonPress = (value) => {
    if (value === '=') {
      try {
        setResult(eval(result).toString());
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'AC') {
      setResult('');
    } else if (value === '⌫') {
      setResult(result.slice(0, -1));
    } else {
      setResult(result + value);
    }
  };

  const buttons = [
    ['AC', '%', '⌫', '/'],
    ['7', '8', '9', '*'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['00', '0', '.', '=']
  ];

  return (
    <View style={isDarkMode ? styles.containerDark : styles.containerLight}>
      <View style={styles.switchContainer}>
        <Switch value={isDarkMode} onValueChange={toggleDarkMode} />
        <Text style={isDarkMode ? styles.switchTextDark : styles.switchTextLight}>
          {isDarkMode ? 'Dark Mode' : 'Light Mode'}
        </Text>
      </View>
      <View style={styles.resultContainer}>
        <Text style={isDarkMode ? styles.resultDark : styles.resultLight}>{result}</Text>
      </View>
      <View style={styles.buttonContainer}>
        {buttons.flat().map((button) => (
          <TouchableOpacity
            key={button}
            style={[
              styles.button,
              isDarkMode ? styles.buttonDark : styles.buttonLight,
              button === 'AC' && (isDarkMode ? styles.acButtonDark : styles.acButtonLight),
              button === '=' && (isDarkMode ? styles.equalButtonDark : styles.equalButtonLight),
            ]}
            onPress={() => handleButtonPress(button)}
          >
            <Text style={isDarkMode ? styles.buttonTextDark : styles.buttonTextLight}>{button}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default CalculatorScreen;
