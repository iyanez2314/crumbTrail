import { View, Text, TextInput } from "react-native";
import React from "react";

export default function LoginInputs() {
  return (
    <View className="flex-1 mt-8">
      <View className="gap-4 justify-between flex flex-col">
        <View>
          <Text className="font-light text-xs">Email</Text>
          <TextInput
            autoComplete="email"
            placeholder="JohnDoe@email.com"
            className="p-2 w-[100%] border h-[50px] rounded"
          />
        </View>
        <View>
          <Text className="font-light text-xs">Password</Text>
          <TextInput
            placeholder="********"
            textContentType="newPassword"
            autoComplete="new-password"
            className="p-2 w-[100%] border h-[50px] rounded"
          />
        </View>
      </View>
    </View>
  );
}
