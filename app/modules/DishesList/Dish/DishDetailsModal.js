import React from 'react';
import {Text, View} from 'react-native';
import Modal from 'react-native-modal';
import styled from 'styled-components/native';
import {HamburguerDetails} from '../../../assets/images';
import Button from '../../../components/Button/Button';

const Wrapper = styled.View`
  width: 1185.3px;
  height: 721.3px;
  background-color: #fdfdfd;
  flex-direction: row;
`;

const Image = styled.Image`
  flex: 1;
  height: 100%;
`;

const SecondWrapper = styled.View`
  flex: 1;
  padding: 50px 40px 25px 27px;
`;

const Title = styled.Text`
  width: 265.3px;
  height: 37.3px;
  font-family: Nunito;
  font-size: 28px;
  font-weight: bold;
  color: #6f6f6f;
  margin-bottom: 28px;
`;

const Description = styled.Text`
  font-family: Nunito;
  font-size: 24px;
  font-weight: 200;
  line-height: 36px;
  color: #6f6f6f;
  margin-top: 25px;
  margin-bottom: 70px;
`;

const InfoWrapper = styled.View`
  flex-direction: row;
`;

const Label = styled.Text`
  font-family: Nunito;
  font-size: 24px;
  line-height: 40px;
  color: #e12537;
`;

const SecondLabel = styled.Text`
  font-family: Nunito;
  font-size: 24px;
  line-height: 40px;
  color: #6f6f6f;
`;

function DishDetailsModal({isVisible, onClose, dish}) {
  return (
    <Modal isVisible={isVisible}>
      <Wrapper>
        <Image source={HamburguerDetails} />
        <SecondWrapper>
          <Title>{dish.title}</Title>
          <InfoWrapper>
            <Label>1/2 porção</Label>
            <SecondLabel>- 1 pessoa</SecondLabel>
          </InfoWrapper>
          <InfoWrapper>
            <Label>Inteira</Label>
            <SecondLabel>- 3 pessoas</SecondLabel>
          </InfoWrapper>

          <Description>
            Esse é o prato mais famoso da casa, por seus ingredientes
            perfeitamente escolhidos e preparados pelo chef e sua equipe.
            Hambúrguer de black angus, maionese de mostarda Dijon, picles,
            pepino, cardamomo, cenoura e alcaparra, tomate confit, endívia,
            queijo gruyère produzido pelo próprio chef e foie gras francês no
            pão brioche de fermentação natural, feito aqui mesmo no nosso
            restaurante.
          </Description>
          <Button
            title="ADICIONAR AO CARRINHO"
            onPress={() => {
              console.log('clicou', onClose);

              onClose();
            }}
          />
        </SecondWrapper>
      </Wrapper>
    </Modal>
  );
}

export default DishDetailsModal;
