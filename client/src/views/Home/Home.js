import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Home = ({onGoBack}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home donde se mostrara la navegación!</Text>
      <Button title="Cerrar sesión" onPress={onGoBack} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
});

export default Home;