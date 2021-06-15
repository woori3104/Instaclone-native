import React, { useRef } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Props } from "../types";
import AuthLayout from "../components/auth/AuthLayout";
import { TextInput } from "../components/auth/AuthShared";
import AuthButton from "../components/auth/AuthButton";

export default function LogIn({ navigation }: Props<"LogIn">) {
  const passwordRef = useRef();
  return (
    <AuthLayout>
      <TextInput
        placeholder="Username"
        returnKeyType="next"
        placeholderTextColor="gray"
        style={{ backgroundColor: "white", width: "100%" }}
      />
      <TextInput
        ref={passwordRef}
        placeholder="Password"
        secureTextEntry
        returnKeyType="next"
        placeholderTextColor="gray"
        lastOne={true}
        style={{ backgroundColor: "white", width: "100%" }}
      />
      <AuthButton text="Log In" disabled={true} onPress={() => null} />
    </AuthLayout>
  );
}