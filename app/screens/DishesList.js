import React from 'react';
import { Button, View, Text } from 'react-native';
import Menu from '../modules/Home/Menu/Menu';

class DishesList extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Menu />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    );
  }
}

export default DishesList;
