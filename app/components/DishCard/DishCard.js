import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';
import Button from '../Button/Button';

const Wrapper = styled.View`
  flex-direction: row;
  padding: 20px;
  border-width: 1px;
  border-color: gray;
`;

const ImageWrapper = styled.View`
  flex: 1;
`;

const Image = styled.Image`
  height: 250px;
  width: 100%;
`;

const Container = styled.View`
  flex: 3;
  flex-direction: column;
  height: 250px;
  padding: 20px;
  position: relative;
`;

const Title = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`;

const Description = styled.View`
  flex: 2;
`;

const Buttons = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`;

const Name = styled.Text`
  font-size: 20px;
`;

const Price = styled.Text`
  font-size: 20px;
`;

const Dish = {
  title: 'Gran Prime Burguer',
  price: 'R$ 37,00',
  description:
    'Hamburguer de picanha envolvido por uma massa de pizza, cebola caramelizada, picles e cheddar',
};

function DishCard() {
  return (
    <Wrapper>
      <ImageWrapper>
        <Image source={{ uri: `http://placehold.jp/${250}x${250}.png` }} />
      </ImageWrapper>
      <Container>
        <Title>
          <Name>{Dish.title}</Name>
          <Price>{Dish.price}</Price>
        </Title>
        <Description>
          <Text>{Dish.description} </Text>
        </Description>
        <Buttons>
          <Button
            title="Ver mais"
            onPress={() => setIsDetailsModalVisible(true)}
          />
          <Button
            title="Adicionar"
            onPress={() => setIsAddDishModalVisible(true)}
          />
        </Buttons>
      </Container>
    </Wrapper>
  );
}

export default DishCard;
