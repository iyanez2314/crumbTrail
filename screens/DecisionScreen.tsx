import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

export default function DecisionScreen() {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <View className="w-full p-5 justify-center flex items-center">
        <View className="mb-10">
          <Image
            source={require("../assets/icon.png")}
            className="object-contain w-20 h-20"
          />
        </View>
        <View className="flex flex-col">
          <TouchableOpacity className="bg-[#F29FBC] p-3 w-[300px] items-center rounded">
            <Text className="text-white font-bold text-xl">Create Account</Text>
          </TouchableOpacity>
          <View>
            <TouchableOpacity className="flex justify-center items-center">
              <View className="flex flex-row items-center mt-6">
                <Text className="text-black font-light text-sm">
                  Already have an account? &nbsp;
                </Text>
                <Text className="text-[#F29FBC] font-light text-sm ">
                  Login
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
