import { View, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import ShareButton from "./ShareButton";

export default function UserListsCard() {
  return (
    <View className="bg-[#FFFFFF] shadow w-[150px] h-[150px] rounded-md">
      <View className=" flex flex-col justify-between h-full">
        <View className="w-full p-5 relative">
          <Text className="text-[18px] font-bold">Best Tacos</Text>
          <Text className="text-[16px] font-light">San Antonio, TX</Text>
          <View className="absolute w-1/2  items-end h-full top-24 left-20 justify-start">
            <ShareButton />
          </View>
        </View>
      </View>
    </View>
  );
}
