import React, {useState} from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import styled from 'styled-components/native';
import BuildLogo from '../../../assets/icons/build-logo.svg';
import BuildSolutionsModal from '../../../components/BuildSolutionsModal/BuildSolutionsModal';

import {START_MENU} from '../../../constants';

const Wrapper = styled.View`
  width: 100%;
  background-color: #fefefe;
`;

const Button = styled.TouchableOpacity`
  padding: 20px 50px;
  ${props =>
    props.isActive
      ? `border-left-color: #e12537; border-left-width: 10; padding-left: 40px;`
      : ''};
`;

const ButtonText = styled.Text`
  font-family: Quicksand;
  font-size: 26.7px;
  font-weight: 500;
  color: #6f6f6f;
`;

const List = styled.FlatList`
  margin-bottom: 270px;
`;

const BuildWrapper = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 25px;
`;

const BuildText = styled.Text`
  font-family: Quicksand;
  font-size: 20px;
  color: #6f6f6f;
  margin-right: 15px;
`;

const Logo = styled(BuildLogo)`
  width: 160px;
  height: 40px;
`;

function Menu({navigate, active}) {
  const [isBuildModalVisible, setIsBuildModalVisible] = useState(false);

  return (
    <Wrapper>
      <List
        data={START_MENU}
        renderItem={({item}) => (
          <Button
            onPress={() => navigate(item.to)}
            isActive={active === item.id}>
            <ButtonText>{item.title}</ButtonText>
          </Button>
        )}
        keyExtractor={item => `item-${item.id}`}
      />

      <BuildWrapper onPress={() => setIsBuildModalVisible(true)}>
        <BuildText>Feito por</BuildText>
        <Logo />
      </BuildWrapper>

      <BuildSolutionsModal
        isVisible={isBuildModalVisible}
        onClose={() => setIsBuildModalVisible(false)}
      />
    </Wrapper>
  );
}

export default Menu;
