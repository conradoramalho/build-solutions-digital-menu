import React from 'react';
import { Button, View, Text } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation'; // Version can be specified in package.json
import * as Screens from '../screens';

const RootStack = createStackNavigator(
  {
    Home: {
      screen: Screens.Home,
    },
    Details: {
      screen: Screens.Details,
    },
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
