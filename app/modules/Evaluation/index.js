import React, {useState} from 'react';
import styled from 'styled-components/native';
import EvaluationItem from './Item/EvaluationItem';

const Wrapper = styled.View`
  padding: 20px 50px;
`;

const Title = styled.Text`
  width: 770.7px;
  height: 36px;
  font-family: Nunito;
  font-size: 26px;
  line-height: 36px;
  color: #6f6f6f;
  margin-bottom: 50px;
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
  const [active, setActive] = useState({});

  return (
    <Wrapper>
      <Title>
        Qual a sua opinião sobre esses aspectos do nosso estabelecimento?
      </Title>
      {OPTIONS.map(item => (
        <EvaluationItem
          key={item.id}
          item={item}
          active={active[item.id]}
          onChange={(id, active) =>
            setActive(state => ({...state, [id]: active}))
          }
        />
      ))}
    </Wrapper>
  );
}

export default Evaluation;
