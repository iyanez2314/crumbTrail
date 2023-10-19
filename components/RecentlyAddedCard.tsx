import { View, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";

export default function RecentlyAddedCard() {
  return (
    <View className="bg-[#FFFFFF] shadow rounded-lg w-full h-[90px]">
      <View className="p-4 flex flex-row justify-between">
        <View>
          <Text className="text-[18px] font-bold">Best Tacos</Text>
          <Text className="text-[16px] font-light">San Antonio, TX</Text>
        </View>
        <View>
          <Ionicons color={"#F29FBC"} name={"share-outline"} size={28} />
        </View>
      </View>
    </View>
  );
}
