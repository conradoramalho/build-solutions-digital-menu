import React from 'react';
import {HamburguerDetails} from '../../../assets/images';
import styled from 'styled-components/native';

const Wrapper = styled.View`
  flex-direction: row;
  padding: 20px;
`;

const InfoWrapper = styled.View`
  width: 250px;
  margin-right: 30px;
`;

const Name = styled.Text`
  width: 225.3px;
  height: 66.7px;
  font-family: Nunito;
  font-size: 23px;
  color: #6f6f6f;
`;

const Value = styled.Text`
  width: 96px;
  height: 37.3px;
  font-family: Nunito;
  font-size: 23px;
  font-weight: 300;
  color: #9c9c9c;
`;

const Image = styled.Image`
  width: 75px;
  height: 100px;
`;

function CartItem({item}) {
  return (
    <Wrapper>
      <InfoWrapper>
        <Name>{item.name}</Name>
        <Value>{item.value}</Value>
      </InfoWrapper>
      <Image source={HamburguerDetails} />
    </Wrapper>
  );
}

export default CartItem;
