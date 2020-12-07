import React, { Component } from 'react';
import Router from './components/Router';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';

const theme = createMuiTheme ({
palette: {
  primary: {
    main: '#ff840b'
  },

  secondary: {
main: '#212121'
  }
}
})


class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
      <Router />
      </ThemeProvider>
    );

  }
}

export default App;
