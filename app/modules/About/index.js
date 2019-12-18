import React from 'react';
import styled from 'styled-components/native';
import Menu from '../Home/Menu/Menu';
import {AboutUs} from '../../assets/images';

const Wrapper = styled.View`
  flex-direction: row;
`;

const Image = styled.Image`
  width: 864px;
  height: 252px;
  margin: 0 auto 42px;
`;

const MenuWrapper = styled.View`
  width: 280px;
`;

const SlideWrapper = styled.View`
  width: 944px;
  margin: auto;
  padding: 25px 50px;
  background-color: #fafafa;
  flex-direction: column;
  justify-content: center;
`;

const ScrollView = styled.ScrollView`
  margin: auto;
  width: 864px;
`;

const Text = styled.Text`
  font-family: Nunito;
  font-size: 25px;
  font-weight: 300;
  line-height: 37.3px;
  color: #6f6f6f;
  padding: 0 30px 0 0;
`;

function About({navigation}) {
  return (
    <Wrapper>
      <MenuWrapper>
        <Menu navigate={navigation.navigate} active={4} />
      </MenuWrapper>
      <SlideWrapper>
        <Image source={AboutUs} />
        <ScrollView>
          <Text>
            O Nosso Bar gosta de comida boa e farta, a maioria dos nossos pratos
            servem facilmente duas pessoas ou mais. O carro-chefe do cardápio é
            o famoso Gran Prime Burguer, que é considerado um dos mais saborosos
            e famosos da cidade. Um corte do contrafilé de 400g- carne
            proveniente de gados de primeira linha. O restaurante oferece também
            vários outras opções de hamburgueres, pizzas e sobremesas deliciosas
            de dar agua na boca, e cervejas artesanais entre elas a famosa
            cerveja de trigo feita especialmente por nós. O clima descontraído e
            o ambiente aconchegante, fecha com chave de ouro a experiência que
            queremos proporcionar aos nossos clientes. Seja bem-vindo. O Nosso
            Bar gosta de comida boa e farta, a maioria dos nossos pratos servem
            facilmente duas pessoas ou mais. O carro-chefe do cardápio é o
            famoso Gran Prime Burguer, que é considerado um dos mais saborosos e
            famosos da cidade. Um corte do contrafilé de 400g- carne proveniente
            de gados de primeira linha. O restaurante oferece também vários
            outras opções de hamburgueres, pizzas e sobremesas deliciosas de dar
            agua na boca, e cervejas artesanais entre elas a famosa cerveja de
            trigo feita especialmente por nós. O clima descontraído e o ambiente
            aconchegante, fecha com chave de ouro a experiência que queremos
            proporcionar aos nossos clientes. Seja bem-vindo. O Nosso Bar gosta
            de comida boa e farta, a maioria dos nossos pratos servem facilmente
            duas pessoas ou mais. O carro-chefe do cardápio é o famoso Gran
            Prime Burguer, que é considerado um dos mais saborosos e famosos da
            cidade. Um corte do contrafilé de 400g- carne proveniente de gados
            de primeira linha. O restaurante oferece também vários outras opções
            de hamburgueres, pizzas e sobremesas deliciosas de dar agua na boca,
            e cervejas artesanais entre elas a famosa cerveja de trigo feita
            especialmente por nós. O clima descontraído e o ambiente
            aconchegante, fecha com chave de ouro a experiência que queremos
            proporcionar aos nossos clientes. Seja bem-vindo.
          </Text>
        </ScrollView>
      </SlideWrapper>
    </Wrapper>
  );
}

export default About;
