import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../screens/SignInScreen';
import ListScreen from '../screens/ListScreen';
import { PRIMARY, WHITE } from '../color';
import { Pressable, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="SignIn"
      screenOptions={{
        contentStyle: { backgroundColor: WHITE },
        headerTitleAlign: 'center',
        headerLeft: ({ canGoBack, tintColor }) => {
          const navigation = useNavigation();

          if (!canGoBack) return null;
          return (
            <Pressable onPress={navigation.goBack}>
              <MaterialCommunityIcons
                name="chevron-left"
                size={30}
                color={tintColor}
              />
            </Pressable>
          );
        },
      }}
    >
      <Stack.Screen
        name="List"
        component={ListScreen}
        options={{
          title: 'TODO LIST',
          headerTintColor: PRIMARY.DEFAULT,
          headerTitleStyle: {
            fontWeight: '700',
            // color: 'lightcoral',
          },
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
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
