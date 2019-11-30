import React from 'react';
import styled from 'styled-components/native';

const Wrapper = styled.View`
  padding-bottom: 80px;
`;

const Header = styled.View`
  flex-direction: row;
  margin-bottom: 25px;
`;

const HeaderText = styled.Text`
  width: 100px;
  height: 37.3px;
  font-family: Nunito;
  font-size: 26px;
  font-weight: bold;
  color: #d93645;
`;

const SecondHeaderText = styled(HeaderText)`
  width: 200px;
  text-align: right;
`;

const Scroll = styled.ScrollView``;

const ItemWrapper = styled.View`
  flex-direction: row;
  margin-bottom: 15px;
`;

const Quantity = styled.Text`
  width: 100px;
  height: 37.3px;
  font-family: Nunito;
  font-size: 26px;
  font-weight: 300;
  color: rgba(6, 6, 6, 0.6);
`;

const Name = styled.Text`
  width: 500px;
  height: 37.3px;
  font-family: Nunito;
  font-size: 26px;
  font-weight: 600;
  color: #6f6f6f;
`;
const UnitPrice = styled.Text`
  width: 200px;
  height: 37.3px;
  font-family: Nunito;
  font-size: 26px;
  font-weight: 300;
  text-align: right;
  color: rgba(6, 6, 6, 0.6);
`;

const TotalPrice = styled.Text`
  width: 200px;
  font-family: Nunito;
  font-size: 26px;
  font-weight: 300;
  text-align: right;
  color: rgba(6, 6, 6, 0.6);
`;

const ITEMS = [
  {
    id: 1,
    quantity: 2,
    name: 'Porção bolinha queijo',
    unityPrice: '20,00',
    totalPrice: '40,00',
  },
  {
    id: 2,
    quantity: 5,
    name: 'Espetinho frango',
    unityPrice: '5,00',
    totalPrice: '25,00',
  },
  {
    id: 3,
    quantity: 2,
    name: 'Suco de laranja',
    unityPrice: '9,00',
    totalPrice: '18,00',
  },
  {
    id: 4,
    quantity: 4,
    name: 'Água s/ gás',
    unityPrice: '2,50',
    totalPrice: '10,00',
  },
  {
    id: 5,
    quantity: 1,
    name: 'Pizza Calabresa',
    unityPrice: '53,00',
    totalPrice: '53,00',
  },
  {
    id: 6,
    quantity: 1,
    name: 'Pizza Brócolis',
    unityPrice: '65,00',
    totalPrice: '65,00',
  },
  {
    id: 7,
    quantity: 6,
    name: 'Coca-cola lata',
    unityPrice: '4,00',
    totalPrice: '24,00',
  },

  {
    id: 1,
    quantity: 2,
    name: 'Porção bolinha queijo',
    unityPrice: '20,00',
    totalPrice: '40,00',
  },
  {
    id: 2,
    quantity: 5,
    name: 'Espetinho frango',
    unityPrice: '5,00',
    totalPrice: '25,00',
  },
  {
    id: 3,
    quantity: 2,
    name: 'Suco de laranja',
    unityPrice: '9,00',
    totalPrice: '18,00',
  },
  {
    id: 4,
    quantity: 4,
    name: 'Água s/ gás',
    unityPrice: '2,50',
    totalPrice: '10,00',
  },
  {
    id: 5,
    quantity: 1,
    name: 'Pizza Calabresa',
    unityPrice: '53,00',
    totalPrice: '53,00',
  },
  {
    id: 6,
    quantity: 1,
    name: 'Pizza Brócolis',
    unityPrice: '65,00',
    totalPrice: '65,00',
  },
  {
    id: 7,
    quantity: 6,
    name: 'Coca-cola lata',
    unityPrice: '4,00',
    totalPrice: '24,00',
  },
];

const FirstColum = styled.View`
  width: 100px;
`;

const SecondColum = styled.View`
  width: 500px;
`;

const ThirdColum = styled.View`
  width: 200px;
`;

const FourthColum = styled.View`
  width: 200px;
`;

function ItemsList() {
  return (
    <Wrapper>
      <Header>
        <FirstColum>
          <HeaderText>QTDE</HeaderText>
        </FirstColum>
        <SecondColum>
          <HeaderText>ITEM</HeaderText>
        </SecondColum>
        <ThirdColum>
          <SecondHeaderText>UNID</SecondHeaderText>
        </ThirdColum>
        <FourthColum>
          <SecondHeaderText>VALOR</SecondHeaderText>
        </FourthColum>
      </Header>
      <Scroll>
        {ITEMS.map(item => (
          <ItemWrapper key={item.id}>
            <FirstColum>
              <Quantity> {item.quantity}</Quantity>
            </FirstColum>
            <SecondColum>
              <Name>{item.name}</Name>
            </SecondColum>
            <ThirdColum>
              <UnitPrice>R$ {item.unityPrice}</UnitPrice>
            </ThirdColum>
            <FourthColum>
              <TotalPrice>R$ {item.totalPrice}</TotalPrice>
            </FourthColum>
          </ItemWrapper>
        ))}
      </Scroll>
    </Wrapper>
  );
}

export default ItemsList;
