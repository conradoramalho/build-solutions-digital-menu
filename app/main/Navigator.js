import React from 'react';
import {View, Text} from 'react-native';
import {createAppContainer} from 'react-navigation'; // Version can be specified in package.json
import {createStackNavigator} from 'react-navigation-stack';
import Header from '../components/Header/Header';
import * as Screens from '../modules';

const defaultHeader = {
  header: <Header />,
};

Screens.DishesList.navigationOptions = defaultHeader;
Screens.Home.navigationOptions = defaultHeader;
Screens.Deals.navigationOptions = defaultHeader;

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
    Highlights: {
      screen: Screens.Highlights,
    },
  },
  {
    initialRouteName: 'DishesList',
  }
);

export default createAppContainer(RootStack);
