import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Heading, RecentlyAddedCard } from "../components";

export default function MyListsScreen() {
  return (
    <SafeAreaView className="flex-1 m-6">
      <View className="w-[100%] justify-center items-center ">
        <View className=" flex flex-col mt-16 w-full">
          <Heading title="My Lists" />
        </View>

        <View className=" w-full ">
          <View className="p-3">
            <Text className="text-xl font-bold">Recently Created</Text>
          </View>
          <View className="">
            <TouchableOpacity>
              <RecentlyAddedCard />
            </TouchableOpacity>
          </View>
        </View>

        <View className="w-full h-[75%]">
          <View className="p-3 w-full mt-3">
            <Text className="text-xl font-bold ">All My Lists</Text>
          </View>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal={false}
            className="h-full"
          >
            <View className="space-y-4">
              <TouchableOpacity>
                <RecentlyAddedCard />
              </TouchableOpacity>
              <TouchableOpacity>
                <RecentlyAddedCard />
              </TouchableOpacity>
              <TouchableOpacity>
                <RecentlyAddedCard />
              </TouchableOpacity>
              <TouchableOpacity>
                <RecentlyAddedCard />
              </TouchableOpacity>
              <TouchableOpacity>
                <RecentlyAddedCard />
              </TouchableOpacity>
              <TouchableOpacity>
                <RecentlyAddedCard />
              </TouchableOpacity>
            </View>

            {/* Other lists cards */}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}
