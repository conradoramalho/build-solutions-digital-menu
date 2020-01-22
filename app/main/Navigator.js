import React from 'react';
import {View, Text} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Header from '../components/Header/Header';
import * as Screens from '../modules';

const RootStack = createStackNavigator(
  {
    Home: {
      screen: Screens.Home,
    },
    DishesList: {
      screen: Screens.DishesList,
    },
    About: {
      screen: Screens.About,
    },
    Deals: {
      screen: Screens.Deals,
    },
    Account: {
      screen: Screens.Account,
    },
    Evaluation: {
      screen: Screens.Evaluation,
    },
  },
  {
    initialRouteName: 'Home',
    headerMode: 'float',
    defaultNavigationOptions: {
      header: <Header />,
    },
  }
);

export default createAppContainer(RootStack);
