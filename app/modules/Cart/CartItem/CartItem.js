import React from 'react';
import {HamburguerDetails} from '../../../assets/images';
import styled from 'styled-components/native';
import DeleteIcon from '../../../assets/icons/delete-icon.svg';
import EditIcon from '../../../assets/icons/edit-icon.svg';

const Wrapper = styled.View`
  flex-direction: row;
  padding: 20px;
  border-bottom-width: 1px;
  border-bottom-color: #bfbfbf;
`;

const InfoWrapper = styled.View`
  width: 250px;
  margin-right: 30px;
`;

const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

const IconsWrapper = styled.View`
  flex-direction: row;
`;

const Name = styled.Text`
  width: 225.3px;
  height: 66.7px;
  font-family: Nunito;
  font-size: 23px;
  color: #6f6f6f;
  margin-bottom: 26px;
`;

const Value = styled.Text`
  width: 100px;
  height: 37.3px;
  margin-right: 44px;
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
        <Container>
          <Value>{item.value}</Value>
          <IconsWrapper>
            <DeleteIcon style={{marginRight: 30}} />
            <EditIcon />
          </IconsWrapper>
        </Container>
      </InfoWrapper>
      <Image source={HamburguerDetails} />
    </Wrapper>
  );
}

export default CartItem;
