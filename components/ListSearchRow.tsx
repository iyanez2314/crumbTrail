import { View, Text, TextInput } from "react-native";
import React from "react";
import { Ionicons, FontAwesome, Feather } from "@expo/vector-icons";

export default function ListSearchRow() {
  return (
    <View className=" w-full p-2 flex-row items-center justify-center space-x-3">
      <View className="flex-row items-center bg-white w-4/5 h-[50px] rounded-full relative p-3 shadow">
        <Ionicons
          name="search"
          size={24}
          color="#F29FBC"
          className="absolute top-1/2 left-5  transform -translate-y-1/2"
        />
        <TextInput
          placeholder="Add a new restaurant"
          className="pl-2 pr-3 flex-1 h-[50px] rounded-full"
        />
      </View>
    </View>
  );
}
