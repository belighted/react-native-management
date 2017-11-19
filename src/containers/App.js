import React from 'react';
import { Router } from 'react-native-router-flux';
import { connect, Provider } from 'react-redux';
import configureStore from '@configs/store';

import Scenes from '@configs/router/scenes';

const RouterWithRedux = connect()(Router);

const store = configureStore();

const App = () => (
  <Provider store={store} >
    <RouterWithRedux scenes={Scenes} />
  </Provider>
);

export default App;