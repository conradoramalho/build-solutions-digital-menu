import React from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components/native';
import Button from '../../components/Button/Button';

const Header = styled.View`
  width: 1280px;
  height: 65px;
  background-color: red;
`;

const Label = styled.Text`
  width: 130.7px;
  height: 36px;
  font-family: Quicksand;
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  color: #d93645;
`;

const Main = styled.View`
  width: 1280px;
  height: 485px;
  flex-direction: row;
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
  width: 130.7px;
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
        <Command>Mesa 12</Command>
      </Header>
      <Main>
        <Command>Mesa 12</Command>
        <Command>Mesa 12</Command>
        <Command>Mesa 12</Command>
        <Command>Mesa 12</Command>
        <Command active>Mesa 12</Command>
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
