import React from 'react';
import { Button, View, Text } from 'react-native';
import Header from '../components/Header/Header';

// static navigationOptions = {
//   headerTitle: <Header />,
// };
class DishesList extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>DishesList</Text>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    );
  }
}

export default DishesList;
