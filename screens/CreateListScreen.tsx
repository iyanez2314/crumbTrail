import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../src/navigation/AppNavigator";
import { Heading, Navbar } from "../components";

export type CreateListScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Create"
>;

export default function CreateListScreen() {
  const navigation = useNavigation<CreateListScreenNavigationProp>();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <SafeAreaView className="m-6 flex-1">
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flexGrow: 1 }}
        >
          <View className="mt-16 w-full">
            <Heading location="Home" title="Create List" />
          </View>
          <View className="w-full justify-evenly items-center mt-6 ">
            {/* Create List Section */}
            <View className="w-full p-3 ">
              <View className="mb-6">
                <Text className="text-base font-light">Name</Text>
                <TextInput
                  placeholder="Amazing Burgers.."
                  className="p-2 w-[100%] border h-[50px] rounded"
                />
              </View>

              <View className="mb-4">
                <Text className="text-base font-light">Location</Text>
                <TextInput
                  placeholder="San Antonio, TX"
                  className="p-2 w-[100%] border h-[50px] rounded"
                />
              </View>

              <View className="mb-4">
                <Text className="text-base font-light">Description</Text>
                <TextInput
                  placeholder="Brief description of the list being made"
                  className="p-2 w-[100%] border h-[150px] rounded"
                />
              </View>

              <View className="mb-2">
                <Text className="text-base font-light">Tags</Text>
                <TextInput className="p-2 w-[100%] border h-[50px] rounded" />
              </View>
            </View>
            <View className="">
              <TouchableOpacity className="bg-[#F29FBC] p-3 w-[300px] items-center rounded mt-4">
                <Text className="text-white font-bold text-xl">Create</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}
