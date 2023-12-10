import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Button, Text, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const LandingPage = ({onAccessHome}) => {
  const screenWidth = Dimensions.get('window').width;
  
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <View style={styles.imageContainer}>
        <Image
          source={require('../../../assets/gym_out.jpg')}
          style={[styles.image, { width: screenWidth }]}
        />
        <View style={styles.overlay}>
          <TouchableOpacity onPress={onAccessHome} style={styles.loginButton}>
            <Text style={styles.buttonText}>Iniciar sesión</Text>
          </TouchableOpacity>
        </View>
      </View>
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
    imageContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%', 
    },
    image: {
      aspectRatio: 1,
      resizeMode: 'contain',
      marginBottom: 20,
    },
    overlay: {
      ...StyleSheet.absoluteFillObject,
      justifyContent: 'center',
      alignItems: 'center',
    },
    loginButton: {
      backgroundColor: '#D0BB00',
      padding: 10,
      borderRadius: 5,
      marginTop: 150
    },
    buttonText: {
      color: '#000000',
    },
  });


export default LandingPage;