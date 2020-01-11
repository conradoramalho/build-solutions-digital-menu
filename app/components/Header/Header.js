import React from 'react';
import {useDispatch} from 'react-redux';
import styled from 'styled-components/native';
import {withNavigation} from 'react-navigation';

import {Logo} from '../../assets/images';
import WaiterIcon from '../../assets/icon_garcom.svg';
import OrdersIcon from '../../assets/icon_pedidos.svg';
import AccountIcon from '../../assets/icon_minha_conta.svg';
import Cart from '../../modules/Cart/Cart';
import {openCart} from '../../actions/cartActions';

const Wrapper = styled.View`
  flex-direction: row;
  height: 72px;
  background-color: #fefefe;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: #bfbfbf;
`;

const LogoWrapper = styled.TouchableOpacity`
  width: 110px;
  height: 72px;
  margin-right: 30px;
`;

const LogoImage = styled.Image``;

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

const Icon = styled.View`
  margin-right: 10px;
`;

const Search = styled.TextInput`
  flex: 2;
  margin-right: 30px;
`;

const WrapperBtns = styled.TouchableOpacity`
  flex: 2;
  flex-direction: row;
  align-items: center;
`;

const CallWaiter = styled.Text`
  font-family: Quicksand-Bold;
  color: #6f6f6f;
  font-size: 20px;
`;

const MyOrders = styled.Text`
  font-family: Quicksand-Bold;
  color: #6f6f6f;
  font-size: 20px;
`;

const MyAccount = styled.Text`
  font-family: Quicksand-Bold;
  color: #6f6f6f;
  font-size: 20px;
`;

function LogoTitle({navigation: {navigate}}) {
  const dispatch = useDispatch();

  const onOrdersClick = () => dispatch(openCart());

  return (
    <Wrapper>
      <LogoWrapper onPress={() => navigate('Home')}>
        <LogoImage source={Logo} />
      </LogoWrapper>
      <TableNumber>04</TableNumber>
      <Search
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={text => console.log(text)}
        value={10}
        placeholder="Buscar"
      />

      <WrapperBtns onPress={() => console.log('call waiter')}>
        <Icon>
          <WaiterIcon />
        </Icon>
        <CallWaiter>Garçom</CallWaiter>
      </WrapperBtns>

      <WrapperBtns onPress={onOrdersClick}>
        <Icon>
          <OrdersIcon />
        </Icon>
        <MyOrders>Pedidos</MyOrders>
      </WrapperBtns>

      <WrapperBtns onPress={() => navigate('Account')}>
        <Icon>
          <AccountIcon />
        </Icon>
        <MyAccount>Minha Conta</MyAccount>
      </WrapperBtns>
      <Cart />
    </Wrapper>
  );
}

export default withNavigation(LogoTitle);
