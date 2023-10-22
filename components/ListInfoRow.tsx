import { View, Text } from "react-native";
import React from "react";
import { Ionicons, FontAwesome, Feather } from "@expo/vector-icons";

export default function ListInfoRow() {
  return (
    <View className="flex flex-row w-4/5 justify-center items-center my-2">
      <View className="  w-1/2 flex flex-row items-baseline space-x-2">
        <FontAwesome name="users" size={24} color="#F29FBC" />
        <Text className="text-[18px] font-bold text-sm">20 Followers</Text>
      </View>

      <View className="flex flex-row items-center space-x-2 w-[44px] h-[44px] justify-center ">
        <FontAwesome name="share-square-o" size={30} color="#F29FBC" />
      </View>
    </View>
  );
}
