// CalculatorScreen.js
import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity, Switch, Button } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';
import { calculatorStyles as styles } from '../styles/calculatorStyles';

const CalculatorScreen = ({ navigation }) => {
  const [result, setResult] = useState('');
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

  const handleButtonPress = (value) => {
    if (value === '=') {
      setResult(eval(result).toString());
    } else if (value === 'AC') {
      setResult('');
    } else {
      setResult(result + value);
    }
  };

  const buttons = [
    ['7', '8', '9', '/'],
    ['4', '5', '6', '*'],
    ['1', '2', '3', '-'],
    ['0', '.', '=', '+'],
    ['AC']
  ];

  return (
    <View style={isDarkMode ? styles.containerDark : styles.containerLight}>
      <Text style={isDarkMode ? styles.headerDark : styles.headerLight}>Calculator</Text>
      <Switch value={isDarkMode} onValueChange={toggleDarkMode} />
      <Text style={isDarkMode ? styles.resultDark : styles.resultLight}>{result}</Text>
      <View style={styles.buttonContainer}>
        {buttons.flat().map((button) => (
          <TouchableOpacity
            key={button}
            style={
              button === 'AC'
                ? isDarkMode
                  ? [styles.buttonDark, styles.acButtonDark]
                  : [styles.buttonLight, styles.acButtonLight]
                : button === '='
                ? isDarkMode
                  ? [styles.buttonDark, styles.equalButtonDark]
                  : [styles.buttonLight, styles.equalButtonLight]
                : isDarkMode
                ? styles.buttonDark
                : styles.buttonLight
            }
            onPress={() => handleButtonPress(button)}
          >
            <Text style={isDarkMode ? styles.buttonTextDark : styles.buttonTextLight}>{button}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Button
        title="Go to Unit Converter"
        onPress={() => navigation.navigate('UnitConverter')}
      />
    </View>
  );
};

export default CalculatorScreen;
