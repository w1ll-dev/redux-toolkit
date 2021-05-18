import React from 'react';
import {Provider} from 'react-redux';
import {Routes} from './src/routes';
import {toolkitStore} from './src/store';

const App = () => (
  <Provider store={toolkitStore}>
    <Routes />
  </Provider>
);

export default App;
