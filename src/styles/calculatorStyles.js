import { StyleSheet } from 'react-native';

export const calculatorStyles = StyleSheet.create({
  containerLight: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20,
    justifyContent: 'flex-end',
  },
  containerDark: {
    flex: 1,
    backgroundColor: '#1f1f1f',
    padding: 20,
    justifyContent: 'flex-end',
  },
  switchStyle: {
    alignSelf: 'flex-end',
    marginBottom: 10,
  },
  resultContainer: {
    marginBottom: 20, // Adjust this to give space above the result
  },
  resultLight: {
    fontSize: 40,
    color: '#000000',
    textAlign: 'right',
    marginBottom: 10,
    paddingRight: 10,
    paddingLeft: 10,
  },
  resultDark: {
    fontSize: 40,
    color: '#ffffff',
    textAlign: 'right',
    marginBottom: 10,
    paddingRight: 10,
    paddingLeft: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  button: {
    width: 70, // Set width to ensure the buttons are circular
    height: 70, // Set height to ensure the buttons are circular
    margin: 5, // Adjust margin for spacing
    borderRadius: 35, // Ensure the borderRadius is half of the width/height for a circle
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonLight: {
    backgroundColor: '#f0f0f0',
  },
  buttonDark: {
    backgroundColor: '#333333',
  },
  equalButtonLight: {
    backgroundColor: '#ff6347',
  },
  equalButtonDark: {
    backgroundColor: '#ff6347',
  },
  acButtonLight: {
    backgroundColor: '#f0f0f0',
  },
  acButtonDark: {
    backgroundColor: '#333333',
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
