import { createStackNavigator } from "@react-navigation/stack";
import { MyListsScreen, UsersListScreen } from "../../screens";
import HomeScreen from "../../screens/HomeScreen";
import UserListScreen from "../../screens/UserListScreen";
const HomeStack = createStackNavigator();

export default function MainStack() {
  return (
    <HomeStack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}
    >
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

      <HomeStack.Screen
        name="MyListsScreen"
        component={MyListsScreen}
        options={{ headerShown: false }}
      />
    </HomeStack.Navigator>
  );
}
