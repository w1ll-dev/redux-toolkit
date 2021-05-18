import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FirstPage, SecondPage} from '../pages';

const {Navigator, Screen} = createBottomTabNavigator();

export const TabRoutes = () => (
  <Navigator
    tabBarOptions={{
      labelPosition: 'beside-icon',
    }}>
    <Screen name={'First Page'} component={FirstPage} />
    <Screen name={'Second Page'} component={SecondPage} />
  </Navigator>
);
