import React from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components/native';

const Header = styled.View`
  width: 1280px;
  height: 65.3px;
  background-color: red;
`;

const Label = styled.Text`
  width: 130.7px;
  height: 36px;
  font-family: Quicksand;
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  color: #d93645;
`;

const Main = styled.View`
  width: 1280px;
  height: 510px;
  background-color: #f9f9f9;
  background-color: green;
`;

const Bottom = styled.View`
  width: 1280px;
  height: 128px;
  background-color: #f9f9f9;
  background-color: blue;
`;

function Account() {
  return (
    <View>
      <Header>
        <Label>Mesa 12</Label>
      </Header>
      <Main>
        <Label>Mesa 12</Label>
      </Main>
      <Bottom>
        <Label>Mesa 12</Label>
      </Bottom>
    </View>
  );
}

export default Account;
