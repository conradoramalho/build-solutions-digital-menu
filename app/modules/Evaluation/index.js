import React from 'react';
import styled from 'styled-components/native';
import EvaluationItem from './Item/EvaluationItem';

const Wrapper = styled.View``;

const Title = styled.Text`
  width: 770.7px;
  height: 36px;
  font-family: Nunito;
  font-size: 26px;
  line-height: 36px;
  color: #6f6f6f;
`;

const OPTIONS = [
  {
    id: 1,
    name: 'Comida',
  },
  {
    id: 2,
    name: 'Ambiente',
  },
  {
    id: 3,
    name: 'Atendimento',
  },
  {
    id: 4,
    name: 'Aplicativo',
  },
];

function Evaluation() {
  return (
    <Wrapper>
      <Title>
        Qual a sua opnião sobre esses aspectos do nosso estabelecimento?
      </Title>
      {OPTIONS.map(item => (
        <EvaluationItem key={item.id} item={item} />
      ))}
    </Wrapper>
  );
}

export default Evaluation;
