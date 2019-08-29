import React, { useEffect } from 'react';
import { Button, View, Text } from 'react-native';
import API from '../api';

const HomeScreen = props => {
  const changeRoute = () => {
    props.navigation.navigate('DishesList');
  };

  useEffect(() => {
    API.getCategories()
      .then(data => {
        console.log('data', data);
      })
      .catch(err => {
        console.log('err', err);
      });
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screensaa</Text>
      <Button title="Go to Detailsa" onPress={() => changeRoute()} />
      <Button title="Go to Detailsa" onPress={() => changeRoute()} />
    </View>
  );
};

export default HomeScreen;
