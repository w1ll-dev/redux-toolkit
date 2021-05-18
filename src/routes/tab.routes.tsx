import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {DefaultRedux, ReduxToolkit} from '../pages';

const {Navigator, Screen} = createBottomTabNavigator();

export const TabRoutes = () => (
  <Navigator
    tabBarOptions={{
      labelPosition: 'beside-icon',
    }}>
    <Screen name={'Default Redux'} component={DefaultRedux} />
    <Screen name={'Redux Toolkit'} component={ReduxToolkit} />
  </Navigator>
);
