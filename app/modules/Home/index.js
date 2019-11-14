import React from 'react';
import styled from 'styled-components/native';
import {Text} from 'react-native';
import Carousel from './Carousel/Carousel';
import Menu from './Menu/Menu';
import Button from '../../components/Button/Button';

const Wrapper = styled.View`
  flex-direction: row;
`;

const MenuWrapper = styled.View`
  flex: 2;
`;

const SlideWrapper = styled.View`
  flex: 8;
  margin: auto;
  flex-direction: column;
`;

function HomeScreen({navigation}) {
  return (
    <Wrapper>
      <MenuWrapper>
        <svg width={24} height={24}>
          <g fill="none" transform="translate(3.5 3)">
            <path
              stroke="#E12537"
              d="M0 9.5h2.3v8H0zm2.5 1.2h6.688c-.288 1.867-1.431 2.978-3.43 3.335h4.448l5.198-3.85c1.13-.473 1.935.689 1.468 1.49 0 0-4.993 4.625-6.372 4.625h-8v-5.6zM0 7.4h17M15.788 7.422a7.503 7.503 0 00-14.582.023c.057-.236 14.53-.236 14.582-.023z"
            />
            <rect width={1} height={2} x={8} fill="#E12537" rx={0.5} />
          </g>
        </svg>
        <Menu navigate={navigation.navigate} />
      </MenuWrapper>
      <SlideWrapper>
        <Carousel />
      </SlideWrapper>
    </Wrapper>
  );
}

export default HomeScreen;
