import React from 'react';
import {useDispatch} from 'react-redux';
import {ScrollView, View, CheckBox} from 'react-native';
import styled from 'styled-components';
import Modal from 'react-native-modal';
import Counter from '../../../../components/Counter/Counter';
import Button from '../../../../components/Button/Button';

import {HamburguerAdd} from '../../../../assets/images';
import {formatImageSource} from '../../../../utils/formatImageSource';
import {addCartItem} from '../../../../actions/cartActions';

import MenuItem from './MenuItem';

const SecondWrapper = styled.View`
  flex: 1;
  border-radius: 50;
  padding: 50px 28px 26px 48px;
`;

const CounterWrapper = styled.View`
  margin-bottom: 30px;
`;

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

const ItemWrapper = styled.View`
  height: 80px;
  width: 100%;
  margin-bottom: 10px;
  flex-direction: row;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: #bfbfbf;
`;
const ItemName = styled.Text`
  height: 36px;
  width: 300px;
  font-family: Nunito;
  font-size: 24px;
  font-weight: 300;
  line-height: 36px;
  color: #656565;
  margin-left: 30px;
`;

const ItemValue = styled.Text`
  height: 36px;
  font-family: Nunito;
  font-size: 25.3px;
  line-height: 36px;
  text-align: right;
  color: #656565;
  margin-left: auto;
`;

const Finish = styled(Button)`
  width: 207px;
  height: 79px;
  align-self: flex-end;
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
  const dispatch = useDispatch();

  const onAddItem = () => {
    dispatch(addCartItem(dish));
    onClose();
  };

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
          <Image source={formatImageSource(dish.img)} />
          <DishTitle>{dish.description}</DishTitle>
          <ScrollView>
            {MENU_ITEMS.map(item => (
              <MenuItem key={item.id} item={item} />
            ))}
          </ScrollView>
          <SubTotalWrapper>
            <Subtotal>Subtotal</Subtotal>
            <Subtotal>R$ 53,00</Subtotal>
          </SubTotalWrapper>
        </View>
        <SecondWrapper>
          <CounterWrapper>
            <Title>Quantidade</Title>
            <Counter />
          </CounterWrapper>
          <Title>Opcionais:</Title>
          <ScrollView>
            {ITEMS.map(item => (
              <ItemWrapper key={item.id}>
                <CheckBox />
                <ItemName>{item.name}</ItemName>
                <ItemValue> + R$ {item.value}</ItemValue>
              </ItemWrapper>
            ))}
          </ScrollView>
          <Finish title="Próxima" onPress={onAddItem} />
        </SecondWrapper>
      </View>
    </Modal>
  );
}

export default AddDishModal;
