import React from 'react';
import {ThemeProvider} from 'styled-components';
import {Provider} from 'react-redux';

import store from './Store';
import Navigator from './Navigator';
import theme from '../styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Navigator />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
