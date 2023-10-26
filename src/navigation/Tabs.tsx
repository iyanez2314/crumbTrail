import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStackNavigator from "./HomeStack";
import { Discover as DiscoverScreen, CreateListScreen } from "../../screens";
import { FontAwesome } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Home") {
            return <FontAwesome name="home" size={size} color="#F29FBC" />;
          } else if (route.name === "Discover") {
            return <FontAwesome name="search" size={size} color="#F29FBC" />;
          } else if (route.name === "Create") {
            return <FontAwesome name="plus" size={size} color="#F29FBC" />;
          }
        },
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
        component={HomeStackNavigator}
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
