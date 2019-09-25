import React from 'react';
import { View, Text, Button } from 'react-native';
import styled from 'styled-components/native';

const Wrapper = styled.View`
  flex-direction: row;
  background-color: blue;
  padding: 20px;
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
  background-color: red;
  padding: 20px;
  position: relative;
`;

const Title = styled.View`
  flex: 1;
  flex-direction: row;
`;

const Description = styled.View`
  flex: 2;
`;

const Buttons = styled.View`
  flex: 1;
  flex-direction: row;
`;

const Name = styled.Text`
  font-size: 20px;
`;

const Price = styled.Text`
  margin: 0 30px 0 auto;
  font-size: 20px;
`;

const SeeMore = styled.Button`
  width: 300px;
`;

const Add = styled.Button`
  width: 300px;
`;

const DishCard = () => {
  return (
    <Wrapper>
      <ImageWrapper>
        <Image source={{ uri: `http://placehold.jp/${250}x${250}.png` }} />
      </ImageWrapper>
      <Container>
        <Title>
          <Name>Gran Prime Burguer</Name>
          <Price>R$ 37,00</Price>
        </Title>
        <Description>
          <Text>
            Hamburguer de picanha envolvido por uma massa de pizza, cebola
            caramelizada, picles e cheddar
          </Text>
        </Description>
        <Buttons>
          <SeeMore title="Ver mais" />
          <Add title="Adicionar" />
        </Buttons>
      </Container>
    </Wrapper>
  );
};

export default DishCard;
