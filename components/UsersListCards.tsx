import { View, Text, Image } from "react-native";
import React from "react";

export default function UsersListCards() {
  return (
    <View className="bg-[#FFFFFF] shadow w-[150px] h-[150px] rounded-md">
      <View>
        <View className="p-4 flex flex-col justify-between h-1/2 ">
          <View className="w-full">
            <Text className="text-[18px] font-bold">Best Tacos</Text>
            <Text className="text-[16px] font-light">San Antonio, TX</Text>
          </View>
        </View>
        <View className="w-full flex flex-col items-start h-1/2 top-5">
          <View className="flex flex-row items-center w-full gap-1 ml-2">
            <View>
              <Image
                source={require("../assets/test_pfp.png")}
                className="object-contain w-9 h-9 rounded-full"
              />
            </View>
            <View>
              <Text className="p-0 m-0 text-[16px] font-bold">Made By</Text>
              <Text className="p-0 m-0 text-[14px] font-light">username</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
