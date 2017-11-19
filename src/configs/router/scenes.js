import React from 'react';
import { Scene, Actions } from 'react-native-router-flux';
import Dashboard from '@containers/Dashboard';
import Spread from '@components/layout/Spread';

const Scenes = Actions.create(
  <Spread>
    <Scene key="dashboard" component={Dashboard} hideNavBar initial tabs />
  </Spread>
);

export default Scenes;