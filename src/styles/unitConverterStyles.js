import { StyleSheet } from 'react-native';

export const unitConverterStyles = StyleSheet.create({
  containerLight: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20,
    justifyContent: 'flex-start',
  },
  containerDark: {
    flex: 1,
    backgroundColor: '#1f1f1f',
    padding: 20,
    justifyContent: 'flex-start',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  switchTextLight: {
    marginLeft: 10,
    color: '#000000',
    fontSize: 16,
  },
  switchTextDark: {
    marginLeft: 10,
    color: '#ffffff',
    fontSize: 16,
  },
  inputContainer: {
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  inputContainerDark: {
    backgroundColor: '#333',
    borderColor: '#555',
  },
  input: {
    fontSize: 16,
    color: '#333',
  },
  inputLight: {
    backgroundColor: '#f5f5f5',
  },
  inputDark: {
    backgroundColor: '#444',
    color: '#fff',
  },
  errorText: {
    color: 'red',
    marginTop: 5,
  },
  errorTextLight: {
    color: 'red',
  },
  errorTextDark: {
    color: '#ff7f7f',
  },

  inputLight: {
    fontSize: 18,
    color: '#000000',
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
    padding: 5,
    marginBottom: 5,
  },
  inputDark: {
    fontSize: 18,
    color: '#ffffff',
    borderBottomColor: '#ffffff',
    borderBottomWidth: 1,
    padding: 5,
    marginBottom: 5,
  },
  errorTextLight: {
    color: '#ff0000',
    fontSize: 14,
  },
  errorTextDark: {
    color: '#ff6666',
    fontSize: 14,
  },
  pickerContainer: {
    marginBottom: 20,
  },
  labelLight: {
    fontSize: 18,
    color: '#000000',
    marginBottom: 10,
  },
  labelDark: {
    fontSize: 18,
    color: '#ffffff',
    marginBottom: 10,
  },
  picker: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  pickerButton: {
    padding: 10,
    margin: 5,
    borderRadius: 5,
    backgroundColor: '#dddddd',
  },
  pickerButtonText: {
    fontSize: 16,
  },
  selectedPickerButtonFrom: {
    backgroundColor: '#ff9800', // Highlight color for selected "from" unit
  },
  selectedPickerButtonTo: {
    backgroundColor: '#4CAF50', // Highlight color for selected "to" unit
  },
  convertButtonLight: {
    backgroundColor: '#1b62e7',
    padding: 15,
    alignItems: 'center',
    borderRadius: 10,
  },
  convertButtonDark: {
    backgroundColor: '#1b62e7',
    padding: 15,
    alignItems: 'center',
    borderRadius: 10,
  },
  convertButtonTextLight: {
    color: '#ffffff',
    fontSize: 18,
  },
  convertButtonTextDark: {
    color: '#ffffff',
    fontSize: 18,
  },
  resultTextLight: {
    fontSize: 24,
    color: '#000000',
    textAlign: 'center',
    marginTop: 20,
  },
  resultTextDark: {
    fontSize: 24,
    color: '#ffffff',
    textAlign: 'center',
    marginTop: 20,
  },
  placeholderTextColor: {
    color: '#888888',
  },
});
