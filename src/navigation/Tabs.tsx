import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainStack from "./MainStack";
import { Discover as DiscoverScreen, CreateListScreen } from "../../screens";
import { FontAwesome } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Home") {
            return <FontAwesome name="home" size={size} color="#F29FBC" />;
          } else if (route.name === "Discover") {
            return <FontAwesome name="globe" size={size} color="#F29FBC" />;
          } else if (route.name === "Create") {
            return <FontAwesome name="plus" size={size} color="#F29FBC" />;
          }
        },
        tabBarActiveTintColor: "#F29FBC",
        tabBarInactiveTintColor: "#000000",
      })}
    >
      <Tab.Screen
        name="Create"
        component={CreateListScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Home"
        component={MainStack}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Discover"
        component={DiscoverScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Discover",
        }}
      />
    </Tab.Navigator>
  );
}
