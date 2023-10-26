import * as SplashScreen from "expo-splash-screen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreateListScreen from "../../screens/CreateListScreen";
import DecisionScreen from "../../screens/DecisionScreen";
import Discover from "../../screens/Discover";
import HomeScreen from "../../screens/HomeScreen";
import LoginScreen from "../../screens/LoginScreen";
import SignupScreen from "../../screens/SignupScreen";
import UsersListScreen from "../../screens/UsersListScreen";
import UserListScreen from "../../screens/UserListScreen";
import Tabs from "./Tabs";
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
  Tabs: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Decision">
      <Stack.Screen
        name="Tabs"
        component={Tabs}
        options={{ headerShown: false }}
      />
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
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Create" component={CreateListScreen} />
      <Stack.Screen name="Discover" component={Discover} />
      <Stack.Screen name="UserListScreen" component={UserListScreen} />
      <Stack.Screen name="UsersListScreen" component={UsersListScreen} />
    </Stack.Navigator>
  );
}
