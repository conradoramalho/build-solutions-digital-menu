import React from 'react';
import styled from 'styled-components/native';

const Wrapper = styled.View`
  width: 446px;
  height: 85px;
  background-color: #f8f8f8;
`;

const Title = styled.Text`
  color: #6f6f6f;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  font-family: Nunito;
`;

const Box = styled.View`
  width: 34px;
  height: 34px;
  background-color: #e12537;
`;

const Label = styled.Text`
  width: 15px;
  height: 22px;
  font-family: Roboto;
  font-size: 19px;
  font-weight: 500;
  text-align: center;
  color: #ffffff;
`;

function MenuItem({item}) {
  console.log('item: ', item);
  return (
    <Wrapper>
      <Box>
        <Label>{item.id}</Label>
      </Box>
      <Title>{item.title}</Title>
    </Wrapper>
  );
}

export default MenuItem;
