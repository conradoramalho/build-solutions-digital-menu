import React from 'react';
import { TextInput } from 'react-native';
import styled from 'styled-components/native';

const Wrapper = styled.View`
  flex-direction: row;
`;

const Logo = styled.Image`
  flex: 1;
  margin-right: 30px;
`;

const TableNumber = styled.Text`
  flex: 1;
  margin-right: 30px;
  font-size: 20px;
`;

const Search = styled.TextInput`
  flex: 2;
  margin-right: 30px;
`;

const CallWaiter = styled.Text`
  flex: 2;
  font-size: 20px;
`;

const MyOrders = styled.Text`
  flex: 2;
  font-size: 20px;
`;

const MyAccount = styled.Text`
  flex: 2;
  font-size: 20px;
`;

class LogoTitle extends React.Component {
  render() {
    return (
      <Wrapper>
        <Logo source={{ uri: `http://placehold.jp/${100}x${100}.png` }} />
        <TableNumber>04</TableNumber>
        <Search
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={text => console.log(text)}
          value={10}
          placeholder="Buscar"
        />
        <CallWaiter>Garçom</CallWaiter>
        <MyOrders>Pedidos</MyOrders>
        <MyAccount>Minha Conta</MyAccount>
      </Wrapper>
    );
  }
}

export default LogoTitle;
