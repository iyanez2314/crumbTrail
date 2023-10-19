import { View, Text, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import React from "react";

interface Props {
  handleCreateList?: () => void;
}

export default function Navbar({ handleCreateList }: Props) {
  return (
    <View className="w-full flex justify-center items-center">
      <View className="bg-[#FFFFFF] shadow rounded-lg w-3/4 h-[60px] flex justify-center">
        <View className="flex flex-row gap-6 items-center justify-evenly">
          <TouchableOpacity onPress={handleCreateList}>
            <View className="flex flex-col justify-center items-center">
              <Ionicons name="create" size={24} color="#F29FBC" />
              <Text className="font-bold">Create</Text>
            </View>
          </TouchableOpacity>

          <View className="flex flex-col justify-center items-center">
            <Ionicons name="home" size={24} color="#F29FBC" />
            <Text className="font-bold">Home</Text>
          </View>
          <View className="flex flex-col justify-center items-center">
            <Ionicons name="earth" size={24} color="#F29FBC" />
            <Text className="font-bold">Discover</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
