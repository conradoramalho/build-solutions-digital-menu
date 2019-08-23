import React from 'react';
import { Button, View, Text } from 'react-native';

class HomeScreen extends React.Component {
  changeRoute() {
    console.log(' this.props: ', this.props);
    this.props.navigation.navigate('DishesList');
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screensa</Text>
        <Button title="Go to Detailsa" onPress={() => this.changeRoute()} />
        <Button title="Go to Detailsa" onPress={() => this.changeRoute()} />
      </View>
    );
  }
}

export default HomeScreen;
