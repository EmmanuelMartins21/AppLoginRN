import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TelaPrincipal() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Seja bem-vindo ao APP da M&D TECH</Text>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#190b81',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: '#fff',
      fontSize: 24,
      fontWeight: 'bold',
    },
  });