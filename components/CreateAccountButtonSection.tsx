import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

interface Props {
  handleSigninClick?: () => void;
  handleSignupClick?: () => void;
  handleLogin?: () => void;
  title: string;
  Login: boolean;
}

export default function CreateAccountButtonSection({
  handleSigninClick,
  handleSignupClick,
  handleLogin,
  title,
  Login,
}: Props) {
  return (
    <View className="flex flex-col items-center mt-4">
      <TouchableOpacity
        onPress={handleLogin}
        className="bg-[#F29FBC] p-3 w-[300px] items-center rounded"
      >
        <Text className="text-white font-bold text-xl">{title}</Text>
      </TouchableOpacity>
      <View>
        <TouchableOpacity
          onPress={Login ? handleSignupClick : handleSigninClick}
          className="flex justify-center items-center"
        >
          <View className="flex flex-row items-center mt-6">
            <Text className="text-black font-light text-sm">
              {Login ? "Don't have an account? " : "Already have an account? "}
            </Text>
            <Text className="text-[#F29FBC] font-light text-sm ">
              {Login ? "Signup" : "Login"}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
