import React from 'react';
import styled from 'styled-components/native';

const Wrapper = styled.View``;
const Header = styled.View``;

const HeaderText = styled.Text`
  width: 78.7px;
  height: 37.3px;
  font-family: Nunito;
  font-size: 26px;
  font-weight: bold;
  color: #d93645;
`;

function ItemsList() {
  return (
    <Wrapper>
      <Header>
        <HeaderText>QTDE</HeaderText>
        <HeaderText>ITEM</HeaderText>
        <HeaderText>UNID</HeaderText>
        <HeaderText>VALOR</HeaderText>
      </Header>
    </Wrapper>
  );
}

export default ItemsList;
