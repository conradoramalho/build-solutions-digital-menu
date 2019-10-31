import React from 'react';
import { ScrollView, Button, Text, View } from 'react-native';
import styled from 'styled-components';
import Modal from 'react-native-modal';
import Counter from '../../../components/Counter/Counter';

const Image = styled.Image`
  height: 200px;
  width: 100%;
`;

function AddDishModal({ isVisible, onClose, dish }) {
  return (
    <Modal isVisible={isVisible}>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <View style={{ flex: 1, backgroundColor: 'white' }}>
          <Image source={{ uri: `http://placehold.jp/${250}x${250}.png` }} />
          <Text>{dish.title}</Text>
          <ScrollView>
            <Text style={{ fontSize: 20 }}>Quantidade e Opcionais</Text>
            <Text style={{ fontSize: 20 }}>Retirar algum ingrediente</Text>
            <Text style={{ fontSize: 20 }}>Ponto da Carne</Text>
          </ScrollView>
          <Text>Subtotal R$ 53,00</Text>
        </View>
        <View style={{ flex: 1, backgroundColor: 'white' }}>
          <Text>Quantidade</Text>
          <Counter />
          <Text>Opcionais:</Text>
          <ScrollView>
            <Text style={{ fontSize: 20 }}>Queijo + R$ 4,50</Text>
            <Text style={{ fontSize: 20 }}>Azeitona + R$ 4,00</Text>
            <Text style={{ fontSize: 20 }}>Cebola + R$ 3,00</Text>
            <Text style={{ fontSize: 20 }}>Alcaparra + R$ 7,00</Text>
          </ScrollView>
          <Button title="Próxima" onPress={onClose} />
        </View>
      </View>
    </Modal>
  );
}

export default AddDishModal;
