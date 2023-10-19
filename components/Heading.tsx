import { View, Text, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { LoginScreenNavigationProp } from "../screens/LoginScreen";

interface Props {
  navigation: any;
  title: string;
}

export default function Heading({ navigation, title }: Props) {
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <TouchableOpacity onPress={goBack}>
      <View className="flex flex-row items-center gap-2">
        <Ionicons name="arrow-back" size={24} />
        <Text className="text-2xl font-bold">{title}</Text>
      </View>
    </TouchableOpacity>
  );
}
