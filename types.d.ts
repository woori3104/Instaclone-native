import { RouteProp } from "@react-navigation/core";
import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
  Welcome: undefined;
  LogIn: { username: string; password: string } | undefined;
  CreateAccount: { username: string; password: string; email: string; name: string; } | undefined;
};

export type Props<RouteName extends keyof RootStackParamList> = {
  navigation: StackNavigationProp<RootStackParamList, RouteName>;
  route: RouteProp<RootStackParamList, RouteName>;
};