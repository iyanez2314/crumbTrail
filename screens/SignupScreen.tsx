import {
  View,
  SafeAreaView,
  Platform,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import {
  Heading,
  Logins,
  SignupInputs,
  CreateAccountButtonSection,
} from "../components/index";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import { useNavigation } from "@react-navigation/native";

export type SignupScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Signup"
>;

export default function SignupScreen() {
  const navigation = useNavigation<SignupScreenNavigationProp>();

  const handleBack = () => {
    navigation.goBack();
  };

  const handleSignIn = () => {
    navigation.navigate("Login");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <SafeAreaView className="m-6 flex-1">
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ paddingBottom: 100 }}
        >
          <View className=" w-[100%] justify-center mt-20">
            {/* Heading comoponent */}
            <Heading navigation={navigation} title="Create Account" />
            {/* 3rd party login component */}
            <Logins />
            {/* Form component */}
            <SignupInputs />
            {/* Create account component */}
            <CreateAccountButtonSection
              Login={false}
              title="Create Account"
              handleSigninClick={handleSignIn}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}
