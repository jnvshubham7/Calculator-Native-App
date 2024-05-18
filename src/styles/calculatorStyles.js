// calculatorStyles.js
import { StyleSheet } from 'react-native';

export const calculatorStyles = StyleSheet.create({
  containerLight: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20,
  },
  containerDark: {
    flex: 1,
    backgroundColor: '#1f1f1f',
    padding: 20,
  },
  headerLight: {
    fontSize: 30,
    color: '#000000',
    textAlign: 'center',
    marginVertical: 20,
  },
  headerDark: {
    fontSize: 30,
    color: '#ffffff',
    textAlign: 'center',
    marginVertical: 20,
  },
  resultLight: {
    fontSize: 40,
    color: '#000000',
    textAlign: 'right',
    marginBottom: 10,
  },
  resultDark: {
    fontSize: 40,
    color: '#ffffff',
    textAlign: 'right',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  buttonLight: {
    width: '22%',
    margin: '1%',
    backgroundColor: '#f0f0f0',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonDark: {
    width: '22%',
    margin: '1%',
    backgroundColor: '#333333',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  equalButtonLight: {
    backgroundColor: '#ff6347', // Example color
  },
  equalButtonDark: {
    backgroundColor: '#ff6347', // Example color
  },
  acButtonLight: {
    width: '30%', // Adjusted width
    height: 70, // Adjusted height
    margin: '1%',
    backgroundColor: '#f0f0f0',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  acButtonDark: {
    width: '30%', // Adjusted width
    height: 70, // Adjusted height
    margin: '1%',
    backgroundColor: '#333333',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonTextLight: {
    fontSize: 25,
    color: '#000000',
  },
  buttonTextDark: {
    fontSize: 25,
    color: '#ffffff',
  },
});
