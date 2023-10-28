import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React from "react";
import {
  HomeHeading,
  RecentlyAddedCard,
  UserListsCard,
  UsersListCards,
} from "../components";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../src/navigation/AppNavigator";

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Home"
>;

export default function HomeScreen() {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  // Might need to remove this later
  const handleUserListPress = () => {
    navigation.navigate("UserListScreen");
  };

  const handleUsersListPress = () => {
    navigation.navigate("UsersListScreen");
  };

  const handleMyListsPress = () => {
    navigation.navigate("MyListsScreen");
  };

  return (
    <SafeAreaView className="m-6 flex-1 justify-center">
      <View className="w-full justify-center">
        {/* Home Heading Component */}
        <HomeHeading />
        {/* Recently Created Section Component */}
        <View className="p-3">
          <Text className="text-xl font-bold">Recently Created</Text>
          <View className="mt-2">
            <TouchableOpacity onPress={handleUserListPress}>
              <RecentlyAddedCard />
            </TouchableOpacity>
          </View>
        </View>

        {/* My Other lists Section Component */}
        <View className="p-3">
          <Pressable onPress={handleMyListsPress} className="">
            <Text className="text-xl font-bold underline">My Lists</Text>
          </Pressable>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            className=" pt-2 gap-3"
          >
            {/* Other lists cards */}
            <TouchableOpacity onPress={handleUserListPress}>
              <UserListsCard />
            </TouchableOpacity>
            <View>
              <UserListsCard />
            </View>
            <View>
              <UserListsCard />
            </View>
            <View>
              <UserListsCard />
            </View>
          </ScrollView>
        </View>

        {/* other popular lists Section Component */}
        <View className="p-3">
          <Text className="text-xl font-bold underline">Discover Lists</Text>
          <ScrollView
            className="pt-2 gap-3"
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            {/* Other user Cards Component */}
            <View>
              <Pressable onPress={handleUsersListPress}>
                <UsersListCards />
              </Pressable>
            </View>
            <View>
              <UsersListCards />
            </View>
            <View>
              <UsersListCards />
            </View>
            <View>
              <UsersListCards />
            </View>
          </ScrollView>
        </View>

        {/* <View className="top-12 bottom-20 mt-auto mb-5">
        </View> */}
      </View>
    </SafeAreaView>
  );
}
