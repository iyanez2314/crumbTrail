import { View, Text, Image } from "react-native";
import React from "react";

export default function HomeHeading() {
  return (
    <View className="flex flex-row justify-between items-center p-3">
      <View>
        <Text className="text-2xl font-bold">Welcome Back👋</Text>
        <Text className="text-base font-light">Hello, Isaac Yanez</Text>
      </View>
      <View>
        <Image
          source={require("../assets/test_pfp.png")}
          className="object-contain w-20 h-20 rounded-full"
        />
      </View>
    </View>
  );
}
