import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/views/Home/Home'
import LandingPage from './src/views/LandingPage/LandingPage';

export default function App() {
  const [showHome, setShowHome] = useState(false);

  const handleAccessHome = () => {
    setShowHome(true);
  };

  const handleGoBack = () => {
    setShowHome(false);
  };
  return (
    <View style={styles.container}>
      {showHome ? (
        <Home onGoBack={handleGoBack} />
      ) : (
        <LandingPage onAccessHome={handleAccessHome} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
