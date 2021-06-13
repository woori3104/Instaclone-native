import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Props } from "../types";

export default function LogIn({ navigation }: Props<"LogIn">) {
  return (
    <View>
      <Text>Login</Text>
      <TouchableOpacity onPress={() => navigation.navigate("CreateAccount")}>
        <Text>Go to Create Account</Text>
      </TouchableOpacity>
    </View>
  );
}