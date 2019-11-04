import React from 'react';
import { TextInput } from 'react-native';
import styled from 'styled-components/native';
import { Logo } from '../../assets/images';

const Wrapper = styled.View`
  flex-direction: row;
  height: 72px;
  background-color: #fefefe;
  align-items: center;
`;

const LogoWrapper = styled.Image`
  width: 110px;
  height: 72px;
  margin-right: 30px;
`;

const TableNumber = styled.Text`
  width: 35;
  height: 60;
  font-size: 21px;
  color: #fff;
  text-align: center;
  padding-top: 20px;
  margin: 0 30px 12px 0;
  background-color: #6f6f6f;
`;

const Search = styled.TextInput`
  flex: 2;
  margin-right: 30px;
`;

const CallWaiter = styled.Text`
  flex: 2;
  font-family: Quicksand-Bold;
  color: #6f6f6f;
  font-size: 20px;
`;

const MyOrders = styled.Text`
  flex: 2;
  font-family: Quicksand-Bold;
  color: #6f6f6f;
  font-size: 20px;
`;

const MyAccount = styled.Text`
  flex: 2;
  font-family: Quicksand-Bold;
  color: #6f6f6f;
  font-size: 20px;
`;

class LogoTitle extends React.Component {
  render() {
    return (
      <Wrapper>
        <LogoWrapper source={Logo} />
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
