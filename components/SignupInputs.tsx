import React from "react";
import { View, Text, TextInput } from "react-native";

export default function SignupInputs() {
  return (
    <View className="flex-1 mt-8">
      <View className="flex flex-row gap-5 justify-center items-center mb-5">
        <View className="w-[45%]">
          <Text className="font-light text-xs">Full Name</Text>
          <TextInput
            autoComplete="name"
            placeholder="John Doe"
            className="border p-2 h-[50px] rounded"
          />
        </View>
        <View className="w-[45%]">
          <Text className="font-light text-xs">Username</Text>
          <TextInput
            placeholder="JohnDoe"
            className="border p-2 h-[50px] rounded"
          />
        </View>
      </View>
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
        <View>
          <Text className="font-light text-xs">Confirm Password</Text>
          <TextInput
            placeholder="********"
            className="p-2 w-[100%] border h-[50px] rounded"
          />
        </View>
      </View>
    </View>
  );
}
