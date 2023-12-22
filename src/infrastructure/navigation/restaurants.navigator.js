import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text } from "react-native";

import RestaurantsScreen from "../../features/restaurants/screens/restaurant.screens";

const RestaurantStack = createNativeStackNavigator();

export const RestaurantNavigator = () => {
  return (
    <RestaurantStack.Navigator screenOptions={{ headerShown: false }}>
      <RestaurantStack.Screen
        name="Restaurants"
        component={RestaurantsScreen}
      />
      <RestaurantStack.Screen
        name="RestaurantDetail "
        component={() => <Text>Restaurant Detail</Text>}
      />
    </RestaurantStack.Navigator>
  );
};
