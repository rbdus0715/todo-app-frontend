import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { WHITE } from './color.js';
import AuthStack from './navigations/AuthStack.js';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer style={styles.container}>
      <StatusBar style="dark" />
      <AuthStack />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
  },
});

export default App;
