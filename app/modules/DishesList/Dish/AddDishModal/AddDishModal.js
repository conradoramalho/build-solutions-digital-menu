import React from 'react';
import {ScrollView, Button, Text, View, CheckBox} from 'react-native';
import styled from 'styled-components';
import Modal from 'react-native-modal';
import Counter from '../../../../components/Counter/Counter';
import {HamburguerAdd} from '../../../../assets/images';

import MenuItem from './MenuItem';

const DishTitle = styled.Text`
  font-family: Nunito;
  font-size: 30px;
  font-weight: bold;
  color: #6f6f6f;
  margin: 0 0 20px 32px;
`;

const Image = styled.Image`
  height: 200px;
  width: 100%;
  margin-bottom: 10px;
`;

const SubTotalWrapper = styled.View`
  align-items: center;
  flex-direction: row;
  height: 96px;
  background-color: #eaeaea;
  justify-content: flex-end;
`;

const Subtotal = styled.Text`
  width: 128px;
  height: 37.3px;
  font-family: Quicksand;
  font-size: 26px;
  font-weight: 600;
  color: #515151;
`;

const Title = styled.Text`
  width: 265.3px;
  height: 37.3px;
  font-family: Nunito;
  font-size: 28px;
  font-weight: 600;
  color: #6f6f6f;
`;

const ItemName = styled.Text`
  width: 68px;
  height: 36px;
  font-family: Nunito;
  font-size: 24px;
  font-weight: 300;
  line-height: 36px;
  color: #656565;
`;

const ItemValue = styled.Text`
  width: 118px;
  height: 36px;
  font-family: Nunito;
  font-size: 26.7px;
  font-weight: 300;
  line-height: 36px;
  text-align: right;
  color: #656565;
`;

const ItemWrapper = styled.View`
  align-items: center;
  flex-direction: row;
  height: 96px;
  background-color: #eaeaea;
  justify-content: flex-end;
`;

const MENU_ITEMS = [
  {
    id: 1,
    title: 'Quantidade e Opcionais',
    isRequired: false,
  },
  {
    id: 2,
    title: 'Retirar algum ingrediente',
    isRequired: false,
  },
  {
    id: 3,
    title: 'Ponto da Carne',
    isRequired: false,
  },
];

const ITEMS = [
  {
    id: 1,
    name: 'Queijo',
    value: '4,50',
  },
  {
    id: 2,
    name: 'Azeitona',
    value: '4,00',
  },
  {
    id: 2,
    name: 'Cebola',
    value: '3,00',
  },
  {
    id: 3,
    name: 'Alcaparra',
    value: '7,50',
  },
];

function AddDishModal({isVisible, onClose, dish}) {
  return (
    <Modal
      isVisible={isVisible}
      style={{
        flex: 0,
        width: 1185,
        marginVertical: 15,
        alignSelf: 'center',
      }}>
      <View
        style={{
          height: 720,
          flexDirection: 'row',
          backgroundColor: '#fdfdfd',
        }}>
        <View style={{flex: 1}}>
          <Image source={HamburguerAdd} />
          <DishTitle>{dish.title}</DishTitle>
          <ScrollView>
            {MENU_ITEMS.map(item => (
              <MenuItem key={item.id} item={item} />
            ))}
          </ScrollView>
          <SubTotalWrapper>
            <Subtotal>Subtotal</Subtotal>
            <Subtotal>R$ 53,00</Subtotal>`{{}}`
          </SubTotalWrapper>
        </View>
        <View style={{flex: 1, borderRadius: 50}}>
          <Title>Quantidade</Title>
          <Counter />
          <Title>Opcionais:</Title>
          <ScrollView>
            {ITEMS.map(item => (
              <ItemWrapper key={item.id}>
                <ItemName style={{fontSize: 20}}>{ item.name }</ItemName>
                <ItemValue> + R${ item.value }</ItemValue>
              </ItemWrapper>
            ))}
          </ScrollView>
          <Button title="Próxima" onPress={onClose} />
        </View>
      </View>
    </Modal>
  );
}

''

export default AddDishModal;''''''''''