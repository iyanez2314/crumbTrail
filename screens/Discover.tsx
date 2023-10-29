import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  TextInput,
  ScrollView,
  Image,
} from "react-native";
import React from "react";
import { Ionicons, FontAwesome, Feather } from "@expo/vector-icons";
import { Heading } from "../components";

export default function Discover() {
  return (
    <SafeAreaView className="flex-1 m-6">
      <View className="w-[100%] justify-center items-center">
        <View className="flex flex-col p-6 mt-6 w-full ">
          <Heading title="Discover" location="Home" />
          <View className="w-[80%]  ml-3">
            <Text>
              Are you here just to find a new place to eat? or maybe you are
              looking for other users lists? well you came to the right spot.
            </Text>
          </View>
        </View>

        <View className="w-[85%]">
          <View className="flex-row items-center bg-white w-full h-[50px] rounded-full relative p-3 shadow">
            <Ionicons
              name="search"
              size={24}
              color="#F29FBC"
              className="absolute top-1/2 left-5  transform -translate-y-1/2"
            />
            <TextInput
              placeholder="Best burgers, San Antonio etc."
              className="pl-2 pr-3 flex-1 h-[50px] rounded-full"
            />
          </View>
        </View>

        <View className="flex flex-row w-full mt-7 items-center justify-center space-x-5">
          <Pressable className="w-[100px] items-center justify-center h-[50px] bg-[#FFFFFF] rounded-xl shadow">
            <Text className="font-bold text-base">Lists</Text>
          </Pressable>
          <Pressable className="w-[100px] items-center justify-center h-[50px] bg-[#FFFFFF] rounded-xl shadow">
            <Text className="font-bold text-base">City</Text>
          </Pressable>
          <Pressable className="w-[100px] items-center justify-center h-[50px] bg-[#FFFFFF] rounded-xl shadow">
            <Text className="font-bold text-base">Username</Text>
          </Pressable>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          className="w-full mt-7"
        >
          <View className="flex flex-col w-full justify-center space-y-5">
            <View className="bg-[#FFFFFF] rounded-xl h-[75px]  flex flex-row shadow">
              {/* Right side content of card */}
              <View className="flex flex-col  justify-center p-2  w-1/2 ">
                <Text className="text-xl font-bold">Best Burgers</Text>
                <Text className="text-base font-light">San Antonio, Tx</Text>
              </View>
              <View className="flex flex-col  justify-center items-end p-2  w-1/2 ">
                <View className="   flex flex-row items-end justify-end gap-1 mr-3">
                  <View>
                    <Image
                      source={require("../assets/test_pfp.png")}
                      className="object-contain w-9 h-9 rounded-full"
                    />
                  </View>
                  <View>
                    <Text className="p-0 m-0 text-[16px] font-bold">
                      Made By
                    </Text>
                    <Text className="p-0 m-0 text-[14px] font-light">
                      username
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View className="bg-[#FFFFFF] rounded-xl h-[75px]  flex flex-row shadow">
              {/* Right side content of card */}
              <View className="flex flex-col  justify-center p-2  w-1/2 ">
                <Text className="text-xl font-bold">Best Burgers</Text>
                <Text className="text-base font-light">San Antonio, Tx</Text>
              </View>
              <View className="flex flex-col  justify-center items-end p-2  w-1/2 ">
                <View className="   flex flex-row items-end justify-end gap-1 mr-3">
                  <View>
                    <Image
                      source={require("../assets/test_pfp.png")}
                      className="object-contain w-9 h-9 rounded-full"
                    />
                  </View>
                  <View>
                    <Text className="p-0 m-0 text-[16px] font-bold">
                      Made By
                    </Text>
                    <Text className="p-0 m-0 text-[14px] font-light">
                      username
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View className="bg-[#FFFFFF] rounded-xl h-[75px]  flex flex-row shadow">
              {/* Right side content of card */}
              <View className="flex flex-col  justify-center p-2  w-1/2 ">
                <Text className="text-xl font-bold">Best Burgers</Text>
                <Text className="text-base font-light">San Antonio, Tx</Text>
              </View>
              <View className="flex flex-col  justify-center items-end p-2  w-1/2 ">
                <View className="   flex flex-row items-end justify-end gap-1 mr-3">
                  <View>
                    <Image
                      source={require("../assets/test_pfp.png")}
                      className="object-contain w-9 h-9 rounded-full"
                    />
                  </View>
                  <View>
                    <Text className="p-0 m-0 text-[16px] font-bold">
                      Made By
                    </Text>
                    <Text className="p-0 m-0 text-[14px] font-light">
                      username
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View className="bg-[#FFFFFF] rounded-xl h-[75px]  flex flex-row shadow">
              {/* Right side content of card */}
              <View className="flex flex-col  justify-center p-2  w-1/2 ">
                <Text className="text-xl font-bold">Best Burgers</Text>
                <Text className="text-base font-light">San Antonio, Tx</Text>
              </View>
              <View className="flex flex-col  justify-center items-end p-2  w-1/2 ">
                <View className="   flex flex-row items-end justify-end gap-1 mr-3">
                  <View>
                    <Image
                      source={require("../assets/test_pfp.png")}
                      className="object-contain w-9 h-9 rounded-full"
                    />
                  </View>
                  <View>
                    <Text className="p-0 m-0 text-[16px] font-bold">
                      Made By
                    </Text>
                    <Text className="p-0 m-0 text-[14px] font-light">
                      username
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View className="bg-[#FFFFFF] rounded-xl h-[75px]  flex flex-row shadow">
              {/* Right side content of card */}
              <View className="flex flex-col  justify-center p-2  w-1/2 ">
                <Text className="text-xl font-bold">Best Burgers</Text>
                <Text className="text-base font-light">San Antonio, Tx</Text>
              </View>
              <View className="flex flex-col  justify-center items-end p-2  w-1/2 ">
                <View className="   flex flex-row items-end justify-end gap-1 mr-3">
                  <View>
                    <Image
                      source={require("../assets/test_pfp.png")}
                      className="object-contain w-9 h-9 rounded-full"
                    />
                  </View>
                  <View>
                    <Text className="p-0 m-0 text-[16px] font-bold">
                      Made By
                    </Text>
                    <Text className="p-0 m-0 text-[14px] font-light">
                      username
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View className="bg-[#FFFFFF] rounded-xl h-[75px]  flex flex-row shadow">
              {/* Right side content of card */}
              <View className="flex flex-col  justify-center p-2  w-1/2 ">
                <Text className="text-xl font-bold">Best Burgers</Text>
                <Text className="text-base font-light">San Antonio, Tx</Text>
              </View>
              <View className="flex flex-col  justify-center items-end p-2  w-1/2 ">
                <View className="   flex flex-row items-end justify-end gap-1 mr-3">
                  <View>
                    <Image
                      source={require("../assets/test_pfp.png")}
                      className="object-contain w-9 h-9 rounded-full"
                    />
                  </View>
                  <View>
                    <Text className="p-0 m-0 text-[16px] font-bold">
                      Made By
                    </Text>
                    <Text className="p-0 m-0 text-[14px] font-light">
                      username
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
