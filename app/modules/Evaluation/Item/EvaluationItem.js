import React from 'react';
import styled from 'styled-components/native';

import Evaluation1Inactive from '../../../assets/icons/evaluation-1-inactive.svg';
import Evaluation2Inactive from '../../../assets/icons/evaluation-2-inactive.svg';
import Evaluation3Inactive from '../../../assets/icons/evaluation-3-inactive.svg';
import Evaluation4Inactive from '../../../assets/icons/evaluation-4-inactive.svg';
import Evaluation5Inactive from '../../../assets/icons/evaluation-5-inactive.svg';
import Evaluation1Active from '../../../assets/icons/evaluation-2-active.svg';
import Evaluation2Active from '../../../assets/icons/evaluation-2-active.svg';
import Evaluation3Active from '../../../assets/icons/evaluation-3-active.svg';
import Evaluation4Active from '../../../assets/icons/evaluation-4-active.svg';
import Evaluation5Active from '../../../assets/icons/evaluation-5-active.svg';

const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 50px;
`;

const Text = styled.Text`
  width: 198.7px;
  height: 37.3px;
  font-family: Nunito;
  font-size: 28px;
  font-weight: 600;
  color: #6f6f6f;
  margin-right: 80px;
`;

const WrapperIcon = styled.View`
  width: 90px;
  height: 90px;
  margin-right: 50px;
`;

const Button = styled.TouchableOpacity``;

function EvaluationItem({item, active, onChange}) {
  return (
    <Wrapper>
      <Text>{item.name}</Text>
      <WrapperIcon>
        <Button onPress={() => onChange(item.id, 1)}>
          {active === 1 ? (
            <Evaluation1Active></Evaluation1Active>
          ) : (
            <Evaluation1Inactive></Evaluation1Inactive>
          )}
        </Button>
      </WrapperIcon>

      <WrapperIcon>
        <Button onPress={() => onChange(item.id, 2)}>
          {active === 2 ? (
            <Evaluation2Active></Evaluation2Active>
          ) : (
            <Evaluation2Inactive></Evaluation2Inactive>
          )}
        </Button>
      </WrapperIcon>
      <WrapperIcon>
        <Button onPress={() => onChange(item.id, 3)}>
          {active === 3 ? (
            <Evaluation3Active></Evaluation3Active>
          ) : (
            <Evaluation3Inactive></Evaluation3Inactive>
          )}
        </Button>
      </WrapperIcon>
      <WrapperIcon>
        <Button onPress={() => onChange(item.id, 4)}>
          {active === 4 ? (
            <Evaluation4Active></Evaluation4Active>
          ) : (
            <Evaluation4Inactive></Evaluation4Inactive>
          )}
        </Button>
      </WrapperIcon>

      <WrapperIcon>
        <Button onPress={() => onChange(item.id, 5)}>
          {active === 5 ? (
            <Evaluation5Active></Evaluation5Active>
          ) : (
            <Evaluation5Inactive></Evaluation5Inactive>
          )}
        </Button>
      </WrapperIcon>
    </Wrapper>
  );
}

export default EvaluationItem;
