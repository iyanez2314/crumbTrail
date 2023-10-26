import { createStackNavigator } from "@react-navigation/stack";

import { DecisionScreen, LoginScreen, SignupScreen } from "../../screens";

const AuthStack = createStackNavigator();

export default function AuthNavigator() {
  return (
    <AuthStack.Navigator
      initialRouteName="Decision"
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}
    >
      <AuthStack.Screen
        name="Decision"
        component={DecisionScreen}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="Signup"
        component={SignupScreen}
        options={{ headerShown: false }}
      />
    </AuthStack.Navigator>
  );
}
