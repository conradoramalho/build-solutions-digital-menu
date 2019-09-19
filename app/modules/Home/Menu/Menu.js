import React from 'react';
import { SafeAreaView, TouchableOpacity, FlatList, Text } from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Cardápio',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Destaques',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Ofertas',
  },
  {
    id: '58694a0f-3da1-471f-bd96-5as4d8edef58',
    title: 'Sobre nós',
  },
];

function Menu() {
  const onSelect = () => {
    console.log('ok');
  };

  return (
    <SafeAreaView>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={onSelect}>
            <Text>{item.title}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

export default Menu;
