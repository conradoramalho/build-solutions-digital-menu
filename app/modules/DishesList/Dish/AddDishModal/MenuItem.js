import React from 'react';
import styled from 'styled-components/native';
import RequiredSuccess from '../../../../assets/icons/menu-item-ok.svg';

const Wrapper = styled.View`
  width: 100%;
  height: 85px;
  background-color: #f8f8f8;
  flex-direction: row;
  margin-bottom: 5px;
  align-items: center;
  padding: 17px 20px 14px 50px;
`;

const Title = styled.Text`
  color: #6f6f6f;
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  font-family: Nunito;
`;

const Center = styled.View`
  width: 400px;
`;

const Box = styled.View`
  width: 34px;
  height: 34px;
  background-color: #e12537;
  border-radius: 50;
  margin-right: 20px;
  justify-content: center;
`;

const Label = styled.Text`
  font-family: Roboto;
  font-size: 19px;
  font-weight: 500;
  color: #ffffff;
  align-self: center;
`;

const Required = styled.Text`
  width: 80px;
  height: 27px;
  font-family: Nunito;
  font-size: 16px;
  font-weight: 600;
  line-height: 27px;
  color: #d93645;
`;

const IconWrapper = styled.View``;

function MenuItem({item}) {
  return (
    <Wrapper>
      <Box>
        <Label>{item.id}</Label>
      </Box>
      <Center>
        <Title>{item.title}</Title>
        <Required>obrigatório</Required>
      </Center>
      <IconWrapper>
        <RequiredSuccess />
      </IconWrapper>
    </Wrapper>
  );
}

export default MenuItem;
