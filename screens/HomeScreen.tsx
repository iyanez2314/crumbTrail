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
  Navbar,
  RecentlyAddedCard,
  UserListsCard,
  UsersListCards,
} from "../components";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Home"
>;

export default function HomeScreen() {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const handleUserListPress = () => {
    navigation.navigate("UserListScreen");
  };

  const handleUsersListPress = () => {
    navigation.navigate("UsersListScreen");
  };

  return (
    <SafeAreaView className="m-6 flex-1 justify-center">
      <View className="w-[100%] justify-center">
        {/* Home Heading Component */}
        <HomeHeading />
        {/* Recently Created Section Component */}
        <View className="p-3">
          <Text className="text-[18px] font-bold">Recently Created</Text>
          <View className="mt-2">
            <TouchableOpacity onPress={handleUserListPress}>
              <RecentlyAddedCard />
            </TouchableOpacity>
          </View>
        </View>

        {/* My Other lists Section Component */}
        <View className="p-3">
          <Text className="text-xl font-bold">My Other Lists</Text>
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

            {/* <View className="bg-[#FFFFFF] shadow w-[150px] h-[150px] rounded-md">
              <View className=" flex flex-col justify-between h-full">
                <View className="w-full p-5 relative">
                  <Text className="text-[18px] font-bold">Best Tacos</Text>
                  <Text className="text-[16px] font-light">
                    San Antonio, TX
                  </Text>
                  <View className="absolute w-1/2  items-end h-full top-24 left-20 justify-start">
                    <Ionicons
                      color={"#F29FBC"}
                      name={"share-outline"}
                      size={34}
                    />
                  </View>
                </View>
              </View>
            </View> */}
          </ScrollView>
        </View>

        {/* other popular lists Section Component */}
        <View className="p-3">
          <Text className="text-xl font-bold">Other Popular Lists</Text>
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

        {/* Navbar */}
        <View className="top-12 bottom-20 mt-auto mb-5">
          <Navbar />
        </View>
      </View>
    </SafeAreaView>
  );
}
