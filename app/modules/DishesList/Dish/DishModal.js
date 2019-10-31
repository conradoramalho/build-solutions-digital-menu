import React from 'react';
import { Button, Text, View } from 'react-native';
import Modal from 'react-native-modal';

function DishModal({ isVisible, onClose, dish }) {
  return (
    <View style={{ flex: 1 }}>
      <Modal isVisible={isVisible}>
        <View style={{ flex: 1, backgroundColor: 'white' }}>
          <Text>{dish.title}</Text>
          <Button title="Fechar" onPress={onClose} />
        </View>
      </Modal>
    </View>
  );
}

export default DishModal;
