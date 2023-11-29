import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Button, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const LandingPage = ({onAccessHome}) => {
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <Image
        source={require('../../../assets/gym.jpg')} 
        style={styles.image}
      />
      <TouchableOpacity onPress={onAccessHome}>
        <Text>Iniciar sesión</Text>
      </TouchableOpacity>
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
  image: {
    width: '80%',
    aspectRatio: 1,
    resizeMode: 'contain',
    marginBottom: 20,
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight || 0 : 0,
  },
  

});

export default LandingPage;