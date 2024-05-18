import React, { useContext, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Switch } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';
import { units } from '../utils/units';
import { unitConverterStyles as styles } from '../styles/unitConverterStyles';

const UnitConverterScreen = () => {
  const [category, setCategory] = useState('length');
  const [fromUnit, setFromUnit] = useState('');
  const [toUnit, setToUnit] = useState('');
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

  const handleConvert = () => {
    if (!value) {
      setError('Please enter a value');
      return;
    }
    if (!fromUnit || !toUnit) {
      setError('Please select units');
      return;
    }
    setError('');

    let convertedValue;
    if (category === 'temperature') {
      // Temperature conversion logic
      // Add your temperature conversion logic here
    } else {
      const fromValue = parseFloat(value);
      const fromFactor = units[category][fromUnit];
      const toFactor = units[category][toUnit];
      convertedValue = (fromValue * fromFactor) / toFactor;
    }
    setResult(convertedValue.toString());
  };

  return (
    <View style={isDarkMode ? styles.containerDark : styles.containerLight}>
      <View style={styles.switchContainer}>
        <Switch value={isDarkMode} onValueChange={toggleDarkMode} />
        <Text style={isDarkMode ? styles.switchTextDark : styles.switchTextLight}>
          {isDarkMode ? 'Dark Mode' : 'Light Mode'}
        </Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={isDarkMode ? styles.inputDark : styles.inputLight}
          placeholder="Enter value"
          placeholderTextColor="#888"
          keyboardType="numeric"
          value={value}
          onChangeText={setValue}
        />
        <Text style={isDarkMode ? styles.errorTextDark : styles.errorTextLight}>{error}</Text>
      </View>

      <View style={styles.pickerContainer}>
        <Text style={isDarkMode ? styles.labelDark : styles.labelLight}>From:</Text>
        <View style={styles.picker}>
          {Object.keys(units[category]).map((unit) => (
            <TouchableOpacity
              key={unit}
              style={[
                styles.pickerButton,
                fromUnit === unit && styles.selectedPickerButtonFrom, // Apply selected "from" style if this unit is selected as fromUnit
              ]}
              onPress={() => setFromUnit(unit)}
            >
              <Text style={styles.pickerButtonText}>{unit}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.pickerContainer}>
        <Text style={isDarkMode ? styles.labelDark : styles.labelLight}>To:</Text>
        <View style={styles.picker}>
          {Object.keys(units[category]).map((unit) => (
            <TouchableOpacity
              key={unit}
              style={[
                styles.pickerButton,
                toUnit === unit && styles.selectedPickerButtonTo, // Apply selected "to" style if this unit is selected as toUnit
              ]}
              onPress={() => setToUnit(unit)}
            >
              <Text style={styles.pickerButtonText}>{unit}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <TouchableOpacity style={isDarkMode ? styles.convertButtonDark : styles.convertButtonLight} onPress={handleConvert}>
        <Text style={isDarkMode ? styles.convertButtonTextDark : styles.convertButtonTextLight}>Convert</Text>
      </TouchableOpacity>

      <Text
        style={[
          isDarkMode ? styles.resultTextDark : styles.resultTextLight,
          !result && styles.placeholderTextColor, // Apply different color if result is empty
        ]}
      >
        {result }
      </Text>
    </View>
  );
};

export default UnitConverterScreen;
