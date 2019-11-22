import React from 'react';
import {Text, View} from 'react-native';
import Modal from 'react-native-modal';
import styled from 'styled-components/native';
import {HamburguerDetails} from '../../assets/images';
import Button from '../../components/Button/Button';

const Wrapper = styled.View`
  width: 394.7px;
  height: 800px;
  background-color: #ffffff;
  align-self: flex-end;
`;

function Cart({isVisible, onClose, dish}) {
  return (
    <Modal
      isVisible={isVisible}
      style={{marginHorizontal: 0, paddingHorizontal: 0}}>
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
