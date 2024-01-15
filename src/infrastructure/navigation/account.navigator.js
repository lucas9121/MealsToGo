import { createStackNavigator } from "@react-navigation/stack";
import { View, Text } from "react-native";

const Stack = createStackNavigator();

export const AccountNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen
      name="Main"
      component={() => (
        <View>
          <Text>Account Screen</Text>
        </View>
      )}
    />
    <Stack.Screen
      name="Login"
      component={() => (
        <View>
          <Text>Login Screen</Text>
        </View>
      )}
    />
  </Stack.Navigator>
);
