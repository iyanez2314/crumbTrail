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
import { RootStackParamList } from "../App";
import { useNavigation } from "@react-navigation/native";

interface ListDetailsHeaderProps {
  title: string;
}

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "UserListScreen"
>;

export default function ListHeader({ title }: ListDetailsHeaderProps) {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const [visible, setVisible] = useState(false);

  const toggleModal = () => {
    setVisible(!visible);
  };

  const handleBack = () => {
    navigation.navigate("Home");
  };

  return (
    <View className="  justify-between p-5 w-full flex flex-row items-center">
      <Pressable
        onPress={handleBack}
        className="flex flex-row items-center space-x-2  w-[44px] h-[44px] justify-center"
      >
        <FontAwesome name="arrow-left" size={26} color="#F29FBC" />
      </Pressable>
      <View className="">
        <Text className="text-[14px] font-bold text-3xl">{title}</Text>
      </View>
      <Pressable
        onPress={toggleModal}
        className="flex flex-row items-center space-x-2 w-[44px] h-[44px] justify-center"
      >
        <FontAwesome name="edit" size={26} color="#F29FBC" />
      </Pressable>
      <Modal animationType="slide" transparent={true} visible={visible}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
        >
          <View className="flex-1 justify-center items-center">
            <View className="w-[400px] h-[425px] bg-white p-5 rounded-2xl">
              <View className="flex flex-row items-center justify-between">
                <View>
                  <Text className="text-xl font-bold">Edit List Details</Text>
                </View>
                <Pressable
                  onPress={toggleModal}
                  className=" flex flex-row items-center space-x-2  w-[44px] h-[44px] justify-center"
                >
                  <FontAwesome name="close" size={26} color="#F29FBC" />
                </Pressable>
              </View>
              <View className="space-y-4">
                <View>
                  <Text className="font-light text-xs">Title</Text>
                  <TextInput
                    placeholder="Best Tacos"
                    className="p-2 w-[100%] border h-[50px] rounded font-bold"
                  />
                </View>
                <View>
                  <Text className="font-light text-xs">City</Text>
                  <TextInput
                    placeholder="San Antonio, TX"
                    className="p-2 w-[100%] border h-[50px] rounded"
                  />
                </View>
                <View>
                  <Text className="font-light text-xs">City</Text>
                  <TextInput
                    placeholder="Esse ad aliquip duis aliquip id cillum consectetur magna ut."
                    className="p-2 w-[100%] border h-[150px] rounded"
                  />
                </View>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </Modal>
    </View>
  );
}
