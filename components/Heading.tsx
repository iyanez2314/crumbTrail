import { View, Text, TouchableOpacity, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { LoginScreenNavigationProp } from "../screens/LoginScreen";

interface Props {
  navigation?: any;
  title: string;
}

export default function Heading({ navigation, title }: Props) {
  const goBack = () => {
    navigation.navigate("Home");
  };
  return (
    <TouchableOpacity>
      <View className="flex flex-row items-center gap-2 ">
        <Pressable
          onPress={goBack}
          className="w-[44px] h-[44px] items-center justify-center"
        >
          <Ionicons name="ios-caret-back-outline" size={24} color="black" />
        </Pressable>
        <Text className="text-2xl font-bold">{title}</Text>
      </View>
    </TouchableOpacity>
  );
}
