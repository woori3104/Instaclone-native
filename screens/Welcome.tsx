import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Props } from "../types";


export default function Welcome({ navigation }: Props<"Welcome">) {
  return (
    <View>
      <Text>Welcome</Text>
      <TouchableOpacity onPress={() => navigation.navigate("CreateAccount")}>
        <View>
          <Text>Go to Create Account</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("LogIn")}>
        <View>
          <Text>Go to Log In</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}