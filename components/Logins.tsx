import { View, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import React from "react";

export default function Logins() {
  return (
    <View className="mt-8">
      <Text>Continue With</Text>
      <View className="flex flex-row gap-4 pt-3">
        <View className="w-[75px] h-[75px] rounded bg-black items-center flex justify-center">
          <Text className="text-white text-4xl">
            <Ionicons name="logo-apple" size={32} />
          </Text>
        </View>
        <View className="w-[75px] h-[75px] rounded bg-[#E56464] items-center flex justify-center">
          <Text className="text-white text-4xl">
            <Ionicons name="logo-google" size={32} />
          </Text>
        </View>
      </View>
    </View>
  );
}
