import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { WHITE } from './color.js';
import AuthStack from './navigations/AuthStack.js';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './navigations/MainStack.js';
import { useState } from 'react';

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      {user ? (
        <MainStack user={user} setUser={setUser} />
      ) : (
        <AuthStack user={user} setUser={setUser} />
      )}
    </NavigationContainer>
  );
};

export default App;
