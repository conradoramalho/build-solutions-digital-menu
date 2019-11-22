import React from 'react';
import {Text, View} from 'react-native';
import Modal from 'react-native-modal';
import styled from 'styled-components/native';
import {HamburguerDetails} from '../../assets/images';
import Button from '../../components/Button/Button';
import ClickIcon from '../../assets/icons/icon-clique.svg';

const Wrapper = styled.View`
  width: 394.7px;
  height: 800px;
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

const Send = styled.Text`
  width: 233.3px;
  height: 77.3px;
  font-family: Nunito;
  font-size: 31px;
  font-weight: 600;
  text-align: center;
  color: #515151;
`;

function Cart({isVisible, onClose, dish}) {
  return (
    <Modal
      isVisible={isVisible}
      style={{marginHorizontal: 0, paddingHorizontal: 0}}>
      <ClickWrapper>
        <ClickIcon />
        <ClickHere>Clique aqui para voltar</ClickHere>
      </ClickWrapper>
      <View>
        <Send>Clique aqui para enviar o pedido</Send>
      </View>
      <Wrapper>
        <Text>PEDIDOS</Text>
        <Button title="ADICIONAR AO CARRINHO" onPress={onClose} />
        <Button title="ADICIONAR AO CARRINHO" onPress={onClose} />
        <Button title="ADICIONAR AO CARRINHO" onPress={onClose} />
        <Button title="ADICIONAR AO CARRINHO" onPress={onClose} />
        <Button title="ADICIONAR AO CARRINHO" onPress={onClose} />
        <Button title="ADICIONAR AO CARRINHO" onPress={onClose} />
      </Wrapper>
    </Modal>
  );
}

export default Cart;
