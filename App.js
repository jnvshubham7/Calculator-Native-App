import React, { useState } from 'react';
import { ThemeProvider } from './src/context/ThemeContext';
import AppNavigator from './src/navigation/AppNavigator';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeProvider value={{ isDarkMode, toggleDarkMode }}>
      <AppNavigator />
    </ThemeProvider>
  );
};

export default App;
