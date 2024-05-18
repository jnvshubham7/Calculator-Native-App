import { StyleSheet } from 'react-native';

export const unitConverterStyles = StyleSheet.create({
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
  inputContainer: {
    marginBottom: 20,
  },
  inputLight: {
    borderBottomWidth: 1,
    borderColor: '#888',
    color: '#000000',
    fontSize: 20,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  inputDark: {
    borderBottomWidth: 1,
    borderColor: '#888',
    color: '#ffffff',
    fontSize: 20,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  errorTextLight: {
    color: '#ff0000',
    marginBottom: 10,
  },
  errorTextDark: {
    color: '#ff0000',
    marginBottom: 10,
  },
  pickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  labelLight: {
    fontSize: 18,
    color: '#000000',
    marginRight: 10,
  },
  labelDark: {
    fontSize: 18,
    color: '#ffffff',
    marginRight: 10,
  },
  picker: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  pickerButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    margin: 4,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  pickerButtonText: {
    fontSize: 16,
    color: '#000000',
  },
  convertButtonLight: {
    padding: 12,
    backgroundColor: '#444444',
    borderRadius: 8,
    alignItems: 'center',
  },
  convertButtonDark: {
    padding: 12,
    backgroundColor: '#888888',
    borderRadius: 8,
    alignItems: 'center',
  },
  convertButtonTextLight: {
    fontSize: 20,
    color: '#ffffff',
  },
  convertButtonTextDark: {
    fontSize: 20,
    color: '#000000',
  },
  resultTextLight: {
    color: '#000000',
    fontSize: 25,
    marginTop: 20,
  },
  resultTextDark: {
    color: '#ffffff',
    fontSize: 25,
    marginTop: 20,
  },
});

