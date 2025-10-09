import { StatusBar } from 'expo-status-bar';
import AuthStack from './navigations/AuthStack.js';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './navigations/MainStack.js';
import UserContext, { UserProvider } from './contexts/UserContext.js';
import Navigation from './navigations/Navigation.js';

const App = () => {
  return (
    <UserProvider>
      <StatusBar style="dark" />
      <Navigation />
    </UserProvider>
  );
};

export default App;
