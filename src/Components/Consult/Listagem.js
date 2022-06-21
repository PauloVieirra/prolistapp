import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Listagem({ data }){
 return (
   <View style={styles.viewplayer}>
     <Text>{data.nome}</Text>
   </View>
  );
}