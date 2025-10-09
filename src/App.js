import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { WHITE } from './color.js';
import AuthStack from './navigations/AuthStack.js';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './navigations/MainStack.js';
import { useState } from 'react';
import UserContext, { UserProvider } from './contexts/UserContext.js';

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <UserProvider>
      <NavigationContainer>
        <StatusBar style="dark" />
        <UserContext.Consumer>
          {({ user }) => (user ? <MainStack /> : <AuthStack />)}
        </UserContext.Consumer>
      </NavigationContainer>
    </UserProvider>
  );
};

export default App;
