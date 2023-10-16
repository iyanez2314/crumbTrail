import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DecisionScreen from "./screens/DecisionScreen";
SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 2000);

export type RootStackParamList = {
  Home: undefined;
  Decision: undefined;
  Login: undefined;
  Signup: undefined;
  ForgotPassword: undefined;
  ResetPassword: undefined;
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
