import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  CreateListScreen,
  DecisionScreen,
  Discover,
  HomeScreen,
  LoginScreen,
  SignupScreen,
  UsersListScreen,
} from "./screens/index";
import UserListScreen from "./screens/UserListScreen";
SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 2000);

export type RootStackParamList = {
  Home: undefined;
  Decision: undefined;
  Login: undefined;
  Signup: undefined;
  ForgotPassword: undefined;
  ResetPassword: undefined;
  Create: undefined;
  UserListScreen: undefined;
  UsersListScreen: undefined;
  Discover: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Decision"
          component={DecisionScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Signup"
          component={SignupScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Create"
          component={CreateListScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="UserListScreen"
          component={UserListScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="UsersListScreen"
          component={UsersListScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Discover"
          component={Discover}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
