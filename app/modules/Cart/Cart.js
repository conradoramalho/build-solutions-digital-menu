import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {Text, View, Dimensions} from 'react-native';
import Modal from 'react-native-modal';
import styled from 'styled-components/native';
import {HamburguerDetails} from '../../assets/images';
import Button from '../../components/Button/Button';
import CartItem from './CartItem/CartItem';

import ClickIcon from '../../assets/icons/icon-clique.svg';
import TextBallon from '../../assets/icons/text-ballon.svg';
import {closeCart} from '../../actions/cartActions';

const {height} = Dimensions.get('window');

const Wrapper = styled.View`
  width: 394.7px;
  height: ${height};
  background-color: #ffffff;
  align-self: flex-end;
`;

const ClickWrapper = styled.View`
  flex-direction: row;
  position: absolute;
  left: 250;
`;

const ClickHere = styled.Text`
  width: 306.7px;
  height: 122.7px;
  font-family: Nunito;
  font-size: 47px;
  font-weight: 600;
  color: #ffffff;
`;

const SendWrapper = styled.View`
  flex-direction: row;
  position: absolute;
  right: 400;
  bottom: 0;
  width: 329.3px;
  height: 109.7px;
`;

const Send = styled.Text`
  width: 300px;
  height: 80px;
  font-family: Nunito;
  font-size: 31px;
  font-weight: 600;
  text-align: center;
  color: #515151;
  position: absolute;
  top: 10;
  margin: auto;
`;

const HeaderWrapper = styled.View`
  width: 394.7px;
  height: 96px;
  background-color: #fefefe;
  padding: 32px;
  border-bottom-width: 1px;
  border-bottom-color: #bfbfbf;
`;

const HeaderText = styled.Text`
  width: 120px;
  height: 37.3px;
  font-family: Quicksand;
  font-size: 28px;
  font-weight: 600;
  color: #d93645;
`;

const ItemsWrapper = styled.ScrollView`
  height: 500px;
`;

const TotalWrapper = styled.View`
  height: 70px;
  flex-direction: row;
  padding: 16px 0 0 38px;
  border-bottom-width: 1px;
  border-bottom-color: #bfbfbf;
  border-top-width: 1px;
  border-top-color: #bfbfbf;
`;

const TotalText = styled.Text`
  width: 128px;
  height: 37.3px;
  font-family: Nunito;
  font-size: 24px;
  color: #5b5a5a;
  margin-right: 80px;
`;

const TotalValueText = styled.Text`
  width: 128px;
  height: 37.3px;
  font-family: Nunito;
  font-size: 24px;
  text-align: right;
  color: #5b5a5a;
`;

const ButtonWrapper = styled.View`
  height: 130px;
  padding: 22px 50px 0;
`;

function Cart() {
  const {cart} = useSelector(state => state);
  const dispatch = useDispatch();

  const onClose = () => dispatch(closeCart());

  return (
    <Modal
      isVisible={cart.isOpen}
      style={{marginHorizontal: 0, paddingHorizontal: 0}}>
      <ClickWrapper>
        <ClickIcon />
        <ClickHere>Clique aqui para voltar</ClickHere>
      </ClickWrapper>
      <SendWrapper>
        <TextBallon />
        <Send>Clique aqui para enviar o pedido</Send>
      </SendWrapper>
      <Wrapper>
        <HeaderWrapper>
          <HeaderText>PEDIDOS</HeaderText>
        </HeaderWrapper>
        <ItemsWrapper>
          {cart.items.map(dish => (
            <CartItem key={dish.id} dish={dish} />
          ))}
        </ItemsWrapper>
        <TotalWrapper>
          <TotalText>Subtotal</TotalText>
          <TotalValueText>R$ 73,00</TotalValueText>
        </TotalWrapper>
        <ButtonWrapper>
          <Button title="ENVIAR PEDIDO" onPress={onClose} />
        </ButtonWrapper>
      </Wrapper>
    </Modal>
  );
}

export default Cart;
