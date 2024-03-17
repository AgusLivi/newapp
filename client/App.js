import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/views/Home/Home';
import LandingPage from './src/views/LandingPage/LandingPage';
import SignUp from './src/views/SignUp/SignUp';
import { ApiProvider } from '@reduxjs/toolkit/query/react'
import { api } from '../api'

const Stack = createStackNavigator();

export default function App() {
  const [showHome, setShowHome] = useState(false);

  const handleAccessHome = () => {
    setShowHome(true);
  };

  const handleGoBack = () => {
    setShowHome(false);
  };

  return (
    <ApiProvider api={api}>
    <NavigationContainer>
      <View style={styles.container}>
        <Stack.Navigator>
          <Stack.Screen name="LandingPage" options={{ title: 'Landing Page' }}>
            {(props) => <LandingPage {...props} onAccessHome={handleAccessHome} />}
          </Stack.Screen>
          <Stack.Screen name="Home" options={{ title: 'Home' }}>
            {(props) => <Home {...props} onGoBack={handleGoBack} />}
          </Stack.Screen>
          <Stack.Screen name="SignUp" component={SignUp} options={{ title: 'Sign Up' }} />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
    </ApiProvider>
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