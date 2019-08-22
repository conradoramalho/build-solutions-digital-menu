import React from 'react';
import { Button, View, Text } from 'react-native';

class Details extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'red',
        }}
      >
        <Text>Details Screen</Text>
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.push('DishesList')}
        />
      </View>
    );
  }
}

export default Details;
