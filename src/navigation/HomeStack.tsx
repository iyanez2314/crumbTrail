import { createStackNavigator } from "@react-navigation/stack";
import { UsersListScreen } from "../../screens";
import HomeScreen from "../../screens/HomeScreen";
import UserListScreen from "../../screens/UserListScreen";
const HomeStack = createStackNavigator();

export default function HomeStackNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="UserListScreen"
        component={UserListScreen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="UsersListScreen"
        component={UsersListScreen}
        options={{ headerShown: false }}
      />
    </HomeStack.Navigator>
  );
}
