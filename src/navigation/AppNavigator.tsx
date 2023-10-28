import * as SplashScreen from "expo-splash-screen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreateListScreen from "../../screens/CreateListScreen";
import DecisionScreen from "../../screens/DecisionScreen";
import Discover from "../../screens/Discover";
import LoginScreen from "../../screens/LoginScreen";
import SignupScreen from "../../screens/SignupScreen";
import UsersListScreen from "../../screens/UsersListScreen";
import UserListScreen from "../../screens/UserListScreen";
import { useState } from "react";
import Tabs from "./Tabs";
import MainStack from "./MainStack";
import AuthStack from "./AuthStack";
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
  main: undefined;
  auth: undefined;
  MyListsScreen: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  const [isSignedIn, setIsSignedIn] = useState(true);

  return (
    <RootStack.Navigator>
      {isSignedIn ? (
        <>
          <RootStack.Screen
            name="Tabs"
            component={Tabs}
            options={{ headerShown: false }}
          />
        </>
      ) : (
        <>
          <RootStack.Screen
            name="auth"
            component={AuthStack}
            options={{ headerShown: false }}
          />
        </>
      )}
    </RootStack.Navigator>

    // <RootStack.Navigator
    //   initialRouteName="Decision"
    //   screenOptions={{
    //     headerShown: false,
    //     gestureEnabled: false,
    //   }}
    // >
    //   <RootStack.Screen
    //     name="Tabs"
    //     component={Tabs}
    //     options={{ headerShown: false }}
    //   />
    //   <RootStack.Screen
    //     name="Decision"
    //     component={DecisionScreen}
    //     options={{
    //       headerShown: false,
    //     }}
    //   />
    //   <RootStack.Screen
    //     name="Login"
    //     component={LoginScreen}
    //     options={{
    //       headerShown: false,
    //     }}
    //   />
    //   <RootStack.Screen
    //     name="Signup"
    //     component={SignupScreen}
    //     options={{ headerShown: false }}
    //   />
    //   <RootStack.Screen name="Create" component={CreateListScreen} />
    //   <RootStack.Screen name="Discover" component={Discover} />
    //   <RootStack.Screen name="UserListScreen" component={UserListScreen} />
    //   <RootStack.Screen name="UsersListScreen" component={UsersListScreen} />
    // </RootStack.Navigator>
  );
}
