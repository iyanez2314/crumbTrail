import { View, Text, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { LoginScreenNavigationProp } from "../screens/LoginScreen";

interface Props {
  navigation: any;
  title: string;
}

export default function Heading({ title }: Props) {
  return (
    <TouchableOpacity>
      <View className="flex flex-row items-center gap-2 ml-1">
        <Text className="text-2xl font-bold">{title}</Text>
      </View>
    </TouchableOpacity>
  );
}
