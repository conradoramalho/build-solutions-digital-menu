import React from 'react';
import { Button, View, Text } from 'react-native';
import API from '../api';
console.log('API: ', API.getCategories);

class HomeScreen extends React.Component {
  changeRoute() {
    console.log(' this.props: ', this.props);
    this.props.navigation.navigate('DishesList');
  }

  componentDidMount() {
    API.getCategories()
      .then(data => {
        console.log('data', data);
      })
      .catch(err => {
        console.log('err', err);
      });
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screensaa</Text>
        <Button title="Go to Detailsa" onPress={() => this.changeRoute()} />
        <Button title="Go to Detailsa" onPress={() => this.changeRoute()} />
      </View>
    );
  }
}

export default HomeScreen;
