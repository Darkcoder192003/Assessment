
import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/Navigation/Navigation';
import { AuthProvider } from './src/context/contextApi';


function App(): React.JSX.Element {


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden/>
      <NavigationContainer>
      <AuthProvider>
        <Navigation/>
      </AuthProvider>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
