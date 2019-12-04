import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';
import Button from '../Button/Button';
import {Hamburguer} from '../../assets/images';

const Wrapper = styled.View`
  width: 280px;
  flex-direction: column;
  margin: 0 40px 40px 0;
`;

const ImageWrapper = styled.View`
  width: 100.7px;
  height: 162.7px;
`;

const Image = styled.Image`
  width: 280px;
  height: 160px;
`;

const Container = styled.View`
  width: 100%;
  flex-direction: row;
  background-color: #fff;
  position: relative;
  padding: 10px 0 10px 10px;
`;

const Title = styled.View`
  justify-content: space-between;
`;

const DishName = styled.Text`
  font-family: Nunito;
  font-size: 26px;
  font-weight: 600;
  font-size: 21;
  color: #6f6f6f;
  font-family: Nunito-Bold;
`;

const DishOldPrice = styled.Text`
  font-size: 18;
  color: #e12537;
  text-decoration: line-through;
`;

const DishPrice = styled.Text`
  font-size: 21;
  font-family: Nunito-Bold;
  color: #6f6f6f;
`;

const BTN = styled.TouchableOpacity`
  width: 74.7px;
  height: 74.7px;
  margin-bottom: -10px;
  font-family: Nunito-Bold;
  color: #6f6f6f;
  position: relative;
  align-self: flex-end;
`;

const Triangulo = styled.TouchableOpacity`
  width: 0;
  height: 0;
  border-bottom-width: 74.7px;
  border-left-width: 74.7px;
  border-bottom-color: red;
  border-left-color: transparent;
  position: absolute;
  right: 0;
  top: 0;
`;

const Plus = styled.Text`
  width: 28px;
  height: 28px;
  font-size: 48px;
  line-height: 42px;
  text-align: center;
  align-self: flex-end;
  margin: auto 10px 10px;
  color: #fff;
`;

const Dish = {
  title: 'Gran Prime Burguer',
  oldPrice: 'R$ 52,00',
  price: 'R$ 37,00',
  description:
    'Molho de tomate fresco, calabresa especial fatiada, rodelas de cebola, orégano e azeitonas pretas',
};

function DishDealCard() {
  return (
    <Wrapper>
      <ImageWrapper>
        <Image source={Hamburguer} />
      </ImageWrapper>
      <Container>
        <Title>
          <DishName>{Dish.title}</DishName>
          <DishOldPrice>{Dish.oldPrice}</DishOldPrice>
          <DishPrice>{Dish.price}</DishPrice>
        </Title>
        <BTN>
          <Triangulo />
          <Plus>+</Plus>
        </BTN>
      </Container>
    </Wrapper>
  );
}

export default DishDealCard;
