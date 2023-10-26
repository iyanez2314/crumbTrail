import {
  View,
  Text,
  TouchableOpacity,
  Pressable,
  Modal,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Ionicons, FontAwesome, Feather } from "@expo/vector-icons";
import React, { useState } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../src/navigation/AppNavigator";
import { useNavigation } from "@react-navigation/native";
import ShareButton from "./ShareButton";

interface ListDetailsHeaderProps {
  title: string;
  isUsersList?: boolean;
}

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "UserListScreen"
>;

export default function ListHeader({
  title,
  isUsersList,
}: ListDetailsHeaderProps) {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const [visible, setVisible] = useState(false);

  const toggleModal = () => {
    setVisible(!visible);
  };

  const handleBack = () => {
    navigation.navigate("Tabs");
  };

  return (
    <View className="justify-between p-5 w-full flex flex-row items-center">
      <Pressable
        onPress={handleBack}
        className="flex flex-row items-center space-x-2  w-[44px] h-[44px] justify-center"
      >
        <FontAwesome name="arrow-left" size={26} color="#F29FBC" />
      </Pressable>
      <View className="">
        <Text className="font-bold text-2xl">{title}</Text>
      </View>
      {isUsersList ? (
        <Pressable
          onPress={toggleModal}
          className="flex flex-row items-center space-x-2 w-[44px] h-[44px] justify-center"
        >
          <FontAwesome name="edit" size={26} color="#F29FBC" />
        </Pressable>
      ) : (
        <ShareButton />
      )}

      <Modal animationType="slide" transparent={true} visible={visible}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
        >
          <View className="flex-1 justify-center items-center">
            <View className="w-[400px] h-[500px] bg-white p-5 rounded-2xl items-center">
              <View className="flex flex-row items-center justify-between w-full">
                <View>
                  <Text className="text-2xl font-bold">Edit List Details</Text>
                </View>
                <Pressable
                  onPress={toggleModal}
                  className=" flex flex-row items-center space-x-2  w-[44px] h-[44px] justify-center"
                >
                  <FontAwesome name="close" size={26} color="#F29FBC" />
                </Pressable>
              </View>
              <View className="space-y-4 items-center w-full ">
                <View className="w-full">
                  <Text className="font-light text-base">Title</Text>
                  <TextInput
                    placeholder="Best Tacos"
                    className="p-2 w-full border h-[50px] rounded font-bold"
                  />
                </View>
                <View className="w-full">
                  <Text className="font-light text-base">City</Text>
                  <TextInput
                    placeholder="San Antonio, TX"
                    className="p-2 w-full border h-[50px] rounded"
                  />
                </View>
                <View className="w-full">
                  <Text className="font-light text-base">Description</Text>
                  <TextInput
                    placeholder="Esse ad aliquip duis aliquip id cillum consectetur magna ut."
                    className="p-2 w-[100%] border h-[150px] rounded"
                  />
                </View>
              </View>
              <View className="mt-4">
                <TouchableOpacity className="bg-[#F29FBC] p-3 w-[300px] items-center rounded">
                  <Text className="text-white font-bold text-xl">Update</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </Modal>
    </View>
  );
}
