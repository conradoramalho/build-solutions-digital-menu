import React from 'react';
import {Text, View} from 'react-native';
import Modal from 'react-native-modal';
import styled from 'styled-components/native';
import {HamburguerDetails} from '../../../assets/images';
import Button from '../../../components/Button/Button';

const Wrapper = styled.View`
  width: 1185.3px;
  height: 721.3px;
  background-color: #fdfdfd;
  flex-direction: row;
`;

const Image = styled.Image`
  flex: 1;
  height: 100%;
`;

const SecondWrapper = styled.View`
  flex: 1;
`;

function DishDetailsModal({isVisible, onClose, dish}) {
  return (
    <Modal isVisible={isVisible}>
      <Wrapper>
        <Image source={HamburguerDetails} />
        <SecondWrapper>
          <Text>{dish.title}</Text>
          <Button
            title="Fechar"
            onPress={() => {
              console.log('clicou', onClose);

              onClose();
            }}
          />
        </SecondWrapper>
      </Wrapper>
    </Modal>
  );
}

export default DishDetailsModal;
