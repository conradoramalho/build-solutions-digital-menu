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

const Wrapper = styled.View``;

const Text = styled.Text`
  width: 198.7px;
  height: 37.3px;
  font-family: Nunito;
  font-size: 28px;
  font-weight: 600;
  color: #6f6f6f;
`;

function EvaluationItem({item}) {
  return (
    <Wrapper>
      <Text>{item.name}</Text>
      <Evaluation1Inactive></Evaluation1Inactive>
      <Evaluation2Inactive></Evaluation2Inactive>
      <Evaluation3Inactive></Evaluation3Inactive>
      <Evaluation4Inactive></Evaluation4Inactive>
      <Evaluation5Inactive></Evaluation5Inactive>
      <Evaluation1Active></Evaluation1Active>
      <Evaluation2Active></Evaluation2Active>
      <Evaluation3Active></Evaluation3Active>
      <Evaluation4Active></Evaluation4Active>
    </Wrapper>
  );
}

export default EvaluationItem;
