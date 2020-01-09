import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';
import Button from '../Button/Button';
import {Hamburguer} from '../../assets/images';
import {formatPrice} from '../../utils/formatPrice';

const Wrapper = styled.View`
  height: 240;
  background-color: #fafafa;
  flex-direction: row;
  padding: 20px 30px;
  position: relative;

  border-bottom-width: 1px;
  border-bottom-color: #979797;
`;

const ImageWrapper = styled.View`
  width: 280;
  height: 200;
`;

const Image = styled.Image`
  height: 100%;
  width: 100%;
`;

const Container = styled.View`
  flex: 1;
  flex-direction: column;
  padding: 0 0 0 20px;
  position: relative;
`;

const Title = styled.View`
  height: 30;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 15;
`;

const DishName = styled.Text`
  font-size: 21;
  color: #6f6f6f;
  font-family: Nunito-Bold;
`;

const DishPrice = styled.Text`
  font-size: 21;
  font-family: Nunito-Bold;
  color: #6f6f6f;
`;

const Description = styled.Text`
  height: 81;
  font-size: 19;
  color: #6f6f6f;
  line-height: 27;
  margin-bottom: 20;
`;

const Buttons = styled.View`
  height: 50;
  flex-direction: row;
  justify-content: space-between;
`;

const Dish = {
  title: 'Gran Prime Burguer',
  price: 'R$ 37,00',
  description:
    'Molho de tomate fresco, calabresa especial fatiada, rodelas de cebola, orégano e azeitonas pretas',
};

function DishCard({dish, openDetailsModal, openAddModal}) {
  return (
    <Wrapper>
      <ImageWrapper>
        <Image source={{uri: `http://168.194.230.42:5600${dish.img}`}} />
      </ImageWrapper>
      <Container>
        <Title>
          <DishName>{dish.description}</DishName>
          <DishPrice>{formatPrice(dish.unitPrice)}</DishPrice>
        </Title>
        <Description>{dish.description}</Description>
        <Buttons>
          <Button title="Ver mais" onPress={openDetailsModal} />
          <Button title="Adicionar" onPress={openAddModal} />
        </Buttons>
      </Container>
    </Wrapper>
  );
}

export default DishCard;
