import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import React from "react";
import {
  ListDetails,
  ListHeader,
  ListInfoRow,
  ListRestaurantCard,
  ListRestaurantCount,
  ListSearchRow,
} from "../components";

import { FontAwesome } from "@expo/vector-icons";

export default function UsersListScreen() {
  return (
    <SafeAreaView className=" flex-1">
      <View className="w-[100%] justify-center items-center p-6 h-full">
        <ListHeader title="Best Tacos" isUsersList={false} />
        <ListDetails
          city="San Antonio, TX"
          description="Nisi ut nisi incididunt ad pariatur veniam aliqua enim dolore ex nulla excepteur."
        />
        <View className="flex flex-row w-4/5 justify-evenly items-center my-2">
          <View className="flex flex-row items-center">
            <Pressable className="w-[44px] h-[44px] flex flex-col items-center justify-center space-x-2">
              <FontAwesome name="check" size={24} color="#F29FBC" />
            </Pressable>
            <Text className="text-[18px] font-bold text-sm">Follow</Text>
          </View>

          <View className="w-1/2 flex flex-col items-center">
            <View className="  flex flex-row items-center w-full gap-1 ml-2">
              <View>
                <Image
                  source={require("../assets/test_pfp.png")}
                  className="object-contain w-9 h-9 rounded-full"
                />
              </View>
              <View>
                <Text className="p-0 m-0 text-[16px] font-bold">Made By</Text>
                <Text className="p-0 m-0 text-[14px] font-light">username</Text>
              </View>
            </View>
          </View>
        </View>
        <ListSearchRow />
        <ListRestaurantCount />
        <ScrollView showsVerticalScrollIndicator={false} className="w-full">
          <View className=" flex flex-col w-full justify-center mt-3 space-y-6">
            <View>
              <ListRestaurantCard />
            </View>
            <View>
              <ListRestaurantCard />
            </View>
            <View>
              <ListRestaurantCard />
            </View>
            <View>
              <ListRestaurantCard />
            </View>
            <View>
              <ListRestaurantCard />
            </View>
            <View>
              <ListRestaurantCard />
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
