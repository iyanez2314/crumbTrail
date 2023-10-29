import { View, Text, TouchableOpacity, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { LoginScreenNavigationProp } from "../screens/LoginScreen";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../src/navigation/AppNavigator";

interface Props {
  title: string;
  location?: keyof RootStackParamList;
}

export default function Heading({ location, title }: Props) {
  const nav = useNavigation<LoginScreenNavigationProp>();

  const goBack = () => {
    if (location) {
      nav.navigate(location);
    } else {
      nav.goBack();
    }
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
