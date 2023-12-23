import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { Text } from "react-native";

import RestaurantsScreen from "../../features/restaurants/screens/restaurant.screens";
import { RestaurantInfoCard } from "../../features/restaurants/components/restaurant-info-card.component";

const RestaurantStack = createStackNavigator();

const RestaurantDetail = ({ route }) => {
  const { itemId, otherParam } = route.params;
  return <RestaurantInfoCard restaurant={otherParam} />;
};

export const RestaurantNavigator = () => {
  return (
    <RestaurantStack.Navigator
      screenOptions={{
        ...TransitionPresets.ModalPresentationIOS,
        headerShown: false,
      }}
    >
      <RestaurantStack.Screen // will pass a prop to component at the top level
        name="Restaurants"
        component={RestaurantsScreen}
      />
      <RestaurantStack.Screen
        name="RestaurantDetail"
        component={RestaurantDetail}
      />
    </RestaurantStack.Navigator>
  );
};
