import React, { FunctionComponent } from 'react';
import { Provider } from 'react-redux';

import { Router } from '../Router';
import { CssBaseline } from '@material-ui/core';
//createMuiTheme ThemeProvider

import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';

import { configureStore } from '../../app/store';

// const theme = createMuiTheme({
//   palette: {
//     primary: {
//       main: '#ffffff',
//     },
//     secondary: {
//       main: '#000000',
//     },
//     success: {
//       main: '#81FF81',
//     },
//     error: {
//       main: '#FF3232',
//     },
//   },
// });

export const App: FunctionComponent = () => {
  return (
    // <ThemeProvider theme={theme}>
    <Provider store={configureStore()}>
      <CssBaseline />
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <Router />
      </MuiPickersUtilsProvider>
    </Provider>
    // </ThemeProvider>
  );
};
