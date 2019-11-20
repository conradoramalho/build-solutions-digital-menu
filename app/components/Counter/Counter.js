import React, {useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

const Wrapper = styled.View`
  flex-direction: row;
`;

const Value = styled.Text`
  font-family: Nunito;
  font-size: 53.3px;
  font-weight: 600;
  text-align: center;
  color: rgba(0, 0, 0, 0.6);
`;

const Icon = styled.Text`
  font-family: Nunito;
  font-size: 53.3px;
  font-weight: 600;
  text-align: center;
  color: rgba(0, 0, 0, 0.6);
`;

function Counter({minValue = 1, maxValue = 50}) {
  const [count, setCount] = useState(0);

  const changeCount = newValue => {
    if (newValue < minValue || newValue > maxValue) return;

    setCount(newValue);
  };

  return (
    <Wrapper>
      <TouchableOpacity onPress={() => changeCount(count - 1)}>
        <Icon>-</Icon>
      </TouchableOpacity>
      <Value>{count}</Value>
      <TouchableOpacity onPress={() => changeCount(count + 1)}>
        <Icon>+</Icon>
      </TouchableOpacity>
    </Wrapper>
  );
}

export default Counter;
