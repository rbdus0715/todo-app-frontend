import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { WHITE } from './color.js';
import AuthStack from './navigations/AuthStack.js';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './navigations/MainStack.js';
import { useState } from 'react';
import UserContext from './contexts/UserContext.js';

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <NavigationContainer>
        <StatusBar style="dark" />
        {user ? (
          <MainStack user={user} setUser={setUser} />
        ) : (
          <AuthStack user={user} setUser={setUser} />
        )}
      </NavigationContainer>
    </UserContext.Provider>
  );
};

export default App;
