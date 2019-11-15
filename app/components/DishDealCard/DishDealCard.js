import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';
import Button from '../Button/Button';
import {Hamburguer} from '../../assets/images';

const Wrapper = styled.View`
  height: 300;
  width: 250px;
  flex-basis: 0;
  flex-grow: 1;

  flex-direction: column;
  padding: 20px 30px;
  position: relative;

  border-bottom-width: 1px;
`;

const ImageWrapper = styled.View`
  width: 300;
  height: 100;
`;

const Image = styled.Image`
  height: 100%;
  width: 100%;
`;

const Container = styled.View`
  flex: 1;
  flex-direction: column;
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

function DishDealCard() {
  return (
    <Wrapper>
      <ImageWrapper>
        <Image source={Hamburguer} />
      </ImageWrapper>
      <Container>
        <Title>
          <DishName>{Dish.title}</DishName>
          <DishPrice>{Dish.price}</DishPrice>
        </Title>
        <Buttons>
          <Button
            title="Adicionar"
            onPress={() => setIsAddDishModalVisible(true)}
          />
        </Buttons>
      </Container>
    </Wrapper>
  );
}

export default DishDealCard;
