import React from 'react';
import { ThemeProvider } from 'styled-components';

import Navigator from './Navigator';
import theme from '../styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navigator />
    </ThemeProvider>
  );
}

export default App;
