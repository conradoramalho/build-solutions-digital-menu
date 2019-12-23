import React from 'react';
import Modal from 'react-native-modal';
import styled from 'styled-components/native';
import BuildLogo from '../../assets/icons/build-solutions-vertical.svg';

const Wrapper = styled.View`
  width: 800px;
  height: 314.7px;
  background-color: #fff;
  flex-direction: row;
  padding: 50px;
  margin: auto;
`;

const WrapperText = styled.View``;

const Text = styled.Text`
  font-family: Nunito;
  font-size: 25px;
  color: #666666;
  margin-bottom: 20px;
`;

const Close = styled.TouchableOpacity``;

const Logo = styled(BuildLogo)`
  width: 208px;
  height: 212px;
  margin-right: 40px;
`;

function BuildSolutionsModal({isVisible, onClose}) {
  return (
    <Modal isVisible={isVisible}>
      <Wrapper>
        <Logo />
        <WrapperText>
          <Text>Feito por Build Solutions</Text>
          <Text>Telefone: (19) 3852-2979</Text>
          <Text>E-mail: contato@buildsolutions.com.br</Text>
          <Text>https://buildsolutions.com.br/</Text>
        </WrapperText>
      </Wrapper>
      <Close onPress={onClose}>
        <Text>Fechar</Text>
      </Close>
    </Modal>
  );
}

export default BuildSolutionsModal;
