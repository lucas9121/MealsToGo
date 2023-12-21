import { createNativeStackNavigator } from "@react-navigation/native-stack";

import RestaurantsScreen from "../../features/restaurants/screens/restaurant.screens";

const RestaurantStack = createNativeStackNavigator();

export const RestaurantNavigator = () => {
  return (
    <RestaurantStack.Navigator screenOptions={{ headerShown: false }}>
      <RestaurantStack.Screen
        name="Restaurants"
        component={RestaurantsScreen}
      />
    </RestaurantStack.Navigator>
  );
};
