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
  buttonLight: {
    width: '22%',
    marginVertical: 8,
    backgroundColor: '#f0f0f0',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonDark: {
    width: '22%',
    marginVertical: 8,
    backgroundColor: '#333333',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
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
