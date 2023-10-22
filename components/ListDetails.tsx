import { View, Text } from "react-native";
import React from "react";

interface ListDetailsProps {
  city: string;
  description: string;
}

export default function ListDetails({ city, description }: ListDetailsProps) {
  return (
    <View className="items-center w-4/5 gap-1">
      <View className="w-3/4 ">
        <Text className="text-[16px] font-light underline">{city}</Text>
      </View>
      <View className=" w-3/4">
        <Text>{description}</Text>
      </View>
    </View>
  );
}
