import React from 'react';
import { View, Text, FlatList, ScrollView } from 'react-native';

const states = [
    'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA',
    'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN',
    'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'
  ];
  export default function ListaItems(){
    return (
      <ScrollView>
        <FlatList
          data={states}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <View>
              <Text>{item}</Text>
            </View>
          )}
        />
      </ScrollView>
    );
  
  }
