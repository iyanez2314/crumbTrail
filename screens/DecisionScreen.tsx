import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../src/navigation/AppNavigator";

export type DecisionScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Decision"
>;

export default function DecisionScreen() {
  const navigation = useNavigation<DecisionScreenNavigationProp>();

  const handleCreateAccountClick = () => {
    navigation.navigate("Signup");
  };

  const handleLoginClick = () => {
    navigation.navigate("Login");
  };

  const handleGoToAppClick = () => {
    navigation.navigate("Tabs");
  };
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
          <TouchableOpacity
            onPress={handleCreateAccountClick}
            className="bg-[#F29FBC] p-3 w-[300px] items-center rounded"
          >
            <Text className="text-white font-bold text-xl">Create Account</Text>
          </TouchableOpacity>
          <View>
            <TouchableOpacity
              onPress={handleLoginClick}
              className="flex justify-center items-center"
            >
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
