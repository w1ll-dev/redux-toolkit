import React from 'react';
import {Provider} from 'react-redux';
import {Routes} from './src/routes';
import {defaultStore} from './src/store';

const App = () => (
  <Provider store={defaultStore}>
    <Routes />
  </Provider>
);

export default App;
