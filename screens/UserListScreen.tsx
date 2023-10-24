import { View, Text, SafeAreaView, TextInput, ScrollView } from "react-native";
import React from "react";
import { Ionicons, FontAwesome, Feather } from "@expo/vector-icons";
import {
  ListDetails,
  ListHeader,
  ListInfoRow,
  ListRestaurantCard,
  ListRestaurantCount,
  ListSearchRow,
} from "../components";

export default function UserListScreen() {
  return (
    <SafeAreaView className=" flex-1">
      <View className="w-[100%] justify-center items-center p-6 h-full">
        <ListHeader title="Best Tacos" isUsersList={true} />
        <ListDetails
          city="San Antonio, TX"
          description="Nisi ut nisi incididunt ad pariatur veniam aliqua enim dolore ex nulla excepteur."
        />
        <ListInfoRow />
        <ListSearchRow />
        <ListRestaurantCount />
        <ScrollView showsVerticalScrollIndicator={false} className="w-full">
          <View className=" flex flex-col w-full justify-center mt-3 space-y-6">
            <View>
              <ListRestaurantCard usersList={true} />
            </View>
            <View>
              <ListRestaurantCard usersList={true} />
            </View>
            <View>
              <ListRestaurantCard usersList={true} />
            </View>
            <View>
              <ListRestaurantCard usersList={true} />
            </View>
            <View>
              <ListRestaurantCard usersList={true} />
            </View>
            <View>
              <ListRestaurantCard usersList={true} />
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
