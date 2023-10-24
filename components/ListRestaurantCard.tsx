import { View, Text } from "react-native";
import React from "react";
import { Ionicons, FontAwesome, Feather } from "@expo/vector-icons";

interface ListRestaurantCardProps {
  usersList?: boolean;
}

export default function ListRestaurantCard({
  usersList,
}: ListRestaurantCardProps) {
  return (
    <View className="bg-[#FFFFFF] rounded-xl h-[75px] items-center justify-center flex flex-row shadow">
      {/* Right side content of card */}
      <View className="flex flex-row space-x-2  w-4/5 items-center">
        <View className=" w-[50px] h-[50px] rounded-xl items-center justify-center">
          <Text className="text-[18px] font-bold">T</Text>
        </View>
        <View>
          <Text className="text-[18px] font-bold">Torchy's Tacos</Text>
          <Text className="text-base font-light">324 IH-35, 78108, TX</Text>
        </View>
      </View>
      {/*  Left side content */}
      <View className="flex flex-row items-center space-x-2 w-[44px] h-[44px] justify-center">
        {usersList ? (
          <FontAwesome name="remove" size={26} color="#F29FBC" />
        ) : (
          <FontAwesome name="plus" size={26} color="#F29FBC" />
        )}
      </View>
    </View>
  );
}
