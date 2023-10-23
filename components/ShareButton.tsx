import { View, Text, TouchableOpacity, Share, Alert } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

export default function ShareButton() {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: "Share this list with your friends!",
        title: "Best Tacos",
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log("shared with activity type of result.activityType");
          Alert.alert("Shared List! Sweet!");
        } else {
          console.log("shared");
          Alert.alert("shared");
        }
      } else if (result.action === Share.dismissedAction) {
        console.log("dismissed");
      }
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };
  return (
    <TouchableOpacity
      onPress={onShare}
      className="flex flex-row items-center space-x-2 w-[44px] h-[44px] justify-center "
    >
      <FontAwesome name="share-square-o" size={30} color="#F29FBC" />
    </TouchableOpacity>
  );
}
