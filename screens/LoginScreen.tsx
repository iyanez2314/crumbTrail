import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
} from "react-native";
import React from "react";
import { CreateAccountButtonSection, Heading, Logins } from "../components";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../src/navigation/AppNavigator";
import { useNavigation } from "@react-navigation/native";
import LoginInputs from "../components/LoginInputs";

export type LoginScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Login"
>;

export default function LoginScreen() {
  const navigation = useNavigation<LoginScreenNavigationProp>();

  const handleBack = () => {
    navigation.goBack();
  };

  const handleSignupClick = () => {
    navigation.navigate("Signup");
  };

  const handleLogin = () => {
    // Here we will need to do some logic to login the user
    navigation.navigate("Tabs");
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
            <Heading navigation={navigation} title="Login" />
            <Logins />
            <LoginInputs />
            <CreateAccountButtonSection
              handleLogin={handleLogin}
              Login={true}
              title="Login"
              handleSignupClick={handleSignupClick}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}
