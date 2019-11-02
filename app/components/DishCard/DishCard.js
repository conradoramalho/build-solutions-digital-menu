import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';
import Button from '../Button/Button';

const Wrapper = styled.View`
  height: 225px;
  background-color: #fafafa;
  flex-direction: row;
  border-width: 1px;
  border-color: gray;
  padding: 15px 40px 15px 20px;
`;

const ImageWrapper = styled.View`
  width: 220px;
  height: 195px;
`;

const Image = styled.Image`
  height: 100%;
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
  height: 30px;
  flex-direction: row;
  justify-content: space-between;
`;

const Description = styled.Text`
  height: 81px;
  font-size: 19px;
  color: #6f6f6f;
  line-height: 27px;
`;

const Buttons = styled.View`
  height: 50px;
  flex-direction: row;
  justify-content: space-between;
`;

const Name = styled.Text`
  font-size: 21px;
  font-weight: 600;
  color: #6f6f6f;
`;

const Price = styled.Text`
  font-size: 21px;
  font-weight: 600;
  color: #6f6f6f;
`;

const Dish = {
  title: 'Gran Prime Burguer',
  price: 'R$ 37,00',
  description:
    'Molho de tomate fresco, calabresa especial fatiada, rodelas de cebola, orégano e azeitonas pretas',
};

function DishCard() {
  return (
    <Wrapper>
      <ImageWrapper>
        <Image source={{ uri: `http://placehold.jp/${220}x${195}.png` }} />
      </ImageWrapper>
      <Container>
        <Title>
          <Name>{Dish.title}</Name>
          <Price>{Dish.price}</Price>
        </Title>
        <Description>{Dish.description}</Description>
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
