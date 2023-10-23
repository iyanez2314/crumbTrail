import { View, Text, TouchableOpacity, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons/";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Home"
>;

export default function Navbar() {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const handleCreateList = () => {
    navigation.navigate("Create");
  };
  const handleHome = () => {};
  const handleDiscover = () => {};

  return (
    <View className="w-full flex justify-center items-center">
      <View className="bg-[#FFFFFF] shadow rounded-lg w-3/4 h-[60px] flex justify-center">
        <View className="flex flex-row gap-6 items-center justify-evenly">
          <Pressable onPress={handleCreateList}>
            <View className="flex flex-col justify-center items-center">
              <FontAwesome name="plus" size={24} color="#F29FBC" />
              <Text className="font-bold">Create</Text>
            </View>
          </Pressable>
          <Pressable className="flex w-[44px] h-[44px] flex-col justify-center items-center">
            <FontAwesome name="home" size={24} color="#F29FBC" />
            <Text className="font-bold">Home</Text>
          </Pressable>
          <Pressable className="flex flex-col items-center w-[44px] h-[44px] justify-center ">
            <FontAwesome name="globe" size={24} color="#F29FBC" />
            <Text className="font-bold text-xs">View</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
