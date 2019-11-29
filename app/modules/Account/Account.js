import React from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components/native';
import Button from '../../components/Button/Button';
import ItemsList from './ItemsList/ItemsList';

const Header = styled.View`
  height: 65px;
  flex-direction: row;
  padding: 14px 0 14px 24px;
  border-bottom-width: 1px;
  border-bottom-color: #bfbfbf;
`;

const Main = styled.View`
  height: 485px;
  padding: 20px 64px;
`;

const Bottom = styled.View`
  height: 128px;
  background-color: #f9f9f9;
  border-top-width: 1px;
  flex-direction: row;
  border-top-color: #bfbfbf;
`;

const WrapperBottom = styled.View`
  width: 900px;
  padding: 20px 51px 0;
`;

const WrapperTextBottom = styled.View`
  flex-direction: row;
  margin-bottom: 15px;
`;

const ButtonWrapper = styled.View`
  flex-direction: row;
  padding: 21px 0 28px 36px;
`;

const Subtotal = styled.Text`
  width: 137.3px;
  height: 37.3px;
  font-family: Nunito;
  font-size: 26px;
  color: #515151;
  margin-right: 140px;
`;

const Value = styled.Text`
  width: 128px;
  height: 37.3px;
  font-family: Nunito;
  font-size: 26px;
  font-weight: 600;
  text-align: right;
  margin-right: 236px;
  color: #515151;
`;

const Total = styled.Text`
  width: 128px;
  height: 37.3px;
  font-family: Nunito;
  font-size: 26px;
  text-align: right;
  color: #515151;
`;

const Service = styled.Text`
  width: 190.7px;
  height: 37.3px;
  font-family: Nunito;
  font-size: 26px;
  font-weight: 300;
  margin-right: 140px;
  color: #515151;
`;

const ServiceValue = styled.Text`
  width: 73.3px;
  height: 37.3px;
  font-family: Nunito;
  font-size: 26px;
  font-weight: 300;
  text-align: right;
  margin-right: 190px;
  color: #515151;
`;

const TotalValue = styled.Text`
  width: 169.3px;
  height: 44px;
  font-family: Nunito;
  font-size: 34px;
  font-weight: 600;
  text-align: right;
  color: #515151;
`;

const Finish = styled(Button)`
  width: 308px;
  height: 79px;
`;

const Command = styled.Text`
  width: 181.3px;
  height: 36px;
  font-family: Quicksand;
  font-size: 24px;
  text-align: center;
  color: ${props => (props.active ? '#e12537' : '#6f6f6f')};
`;

function Account() {
  return (
    <View>
      <Header>
        <Command>Comanda 1</Command>
        <Command>Comanda 2</Command>
        <Command>Comanda 3</Command>
        <Command>Comanda 4</Command>
        <Command active>Comanda 05</Command>
      </Header>
      <Main>
        <ItemsList></ItemsList>
      </Main>
      <Bottom>
        <WrapperBottom>
          <WrapperTextBottom>
            <Subtotal>SUBTOTAL</Subtotal>
            <Value>R$ 264,00</Value>
            <Total>TOTAL</Total>
          </WrapperTextBottom>

          <WrapperTextBottom>
            <Service>taxa de serviço</Service>
            <ServiceValue>00,00</ServiceValue>
            <TotalValue>R$ 264,00</TotalValue>
          </WrapperTextBottom>
        </WrapperBottom>
        <ButtonWrapper>
          <Finish title="PEDIR CONTA" onPress={() => {}} />
        </ButtonWrapper>
      </Bottom>
    </View>
  );
}

export default Account;
