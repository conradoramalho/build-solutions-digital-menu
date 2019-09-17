import React from 'react';
import { View, Text } from 'react-native';
import Menu from '../modules/Home/Menu/Menu';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Menu />
      </View>
    );
  }
}

export default HomeScreen;
