import { createStackNavigator } from "@react-navigation/stack";
import { View, Text } from "react-native";

import { AccountScreen } from "../../features/account/screens/account.screen";

const Stack = createStackNavigator();

export const AccountNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Main" component={AccountScreen} />
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
