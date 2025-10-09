import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../screens/SignInScreen';
import ListScreen from '../screens/ListScreen';
import { PRIMARY, WHITE } from '../color';
import HeaderLeftButton from '../components/HeaderLeftButton';
import HeaderRightButton from '../components/HeaderRightButton';
import SettingsScreen from '../screens/SettingsScreen';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="SignIn"
      screenOptions={{
        contentStyle: { backgroundColor: WHITE },
        headerTitleAlign: 'center',
        headerTintColor: PRIMARY.DEFAULT,
        headerTitleStyle: {
          fontWeight: '700',
          // color: 'lightcoral',
        },
        headerLeft: HeaderLeftButton,
      }}
    >
      <Stack.Screen
        name="List"
        component={ListScreen}
        options={{
          title: 'TODO LIST',
          headerRight: HeaderRightButton,
          //   headerTitle: ({ children, tintColor }) => {
          //     return (
          //       <Pressable onPress={() => console.log('test')}>
          //         <Text style={{ color: tintColor }}>{children}</Text>
          //       </Pressable>
          //     );
          //   },
        }}
      />
      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{
          title: '로그인',
          headerShown: false,
        }}
      />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
