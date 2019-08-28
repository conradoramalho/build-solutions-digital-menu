import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation'; // Version can be specified in package.json
import * as Screens from '../screens';

const RootStack = createStackNavigator(
  {
    Home: {
      screen: Screens.Home,
    },
    DishesList: {
      screen: Screens.DishesList,
    },
  },
  {
    initialRouteName: 'DishesList',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
