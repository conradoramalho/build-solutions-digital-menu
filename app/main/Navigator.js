import React from 'react';
import { Text } from 'react-native';
import { createAppContainer } from 'react-navigation'; // Version can be specified in package.json
import { createStackNavigator } from 'react-navigation-stack';
import * as Screens from '../screens';

const RootStack = createStackNavigator(
  {
    Home: {
      screen: Screens.Home,
    },
  },
  {
    initialRouteName: 'Home',
  }
);

export default createAppContainer(RootStack);
