import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.TouchableOpacity`
  padding-left: 20px;
  padding-right: 20px;
  height: 100%;
  border-radius: 9px;
  background-color: #e12537;
`;

const Title = styled.Text`
  flex: 1;
  font-size: 21px;
  text-align: center;
  text-align-vertical: center;
  color: #fff;
`;

function Button({ title, ...props }) {
  return (
    <Wrapper {...props}>
      <Title>{title}</Title>
    </Wrapper>
  );
}

export default Button;