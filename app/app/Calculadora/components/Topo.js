import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default () => (
  <View style={styles.topo}>
    <Text style={styles.texto}>Calculadora 1.0</Text>
  </View>
);

const styles = StyleSheet.create({
  topo: {
    backgroundColor: '#2196F3',
    padding: 10,
    alignItems: 'center'
  },
  texto: {
    fontSize: 25,
    color: '#FFF'
  }
});
