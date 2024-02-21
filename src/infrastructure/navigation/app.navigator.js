import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { FavoritesContextProvider } from "../../services/favorites/favorites.context";
import { LocationContextProvider } from "../../services/location/location.context";
import { RestaurantsContextProvider } from "../../services/restaurants/restaurants.context";

import { RestaurantNavigator } from "./restaurants.navigator";
import SettingsScreen from "../../features/settings/screens/settings.screen";
import { SettingsNavigator } from "./settings.navigator";
import { MapScreen } from "../../features/map/screens/map.screen";
import { colors } from "../theme/colors";

const Tab = createBottomTabNavigator();

// will choose icon based on focused
const getIconName = (route, focused) => {
  switch (route.name) {
    case "Restaurants":
      return (iconName = focused ? "restaurant" : "restaurant-outline");
    case "Map":
      return (iconName = focused ? "map" : "map-outline");
    default:
      return (iconName = focused ? "settings" : "settings-outline");
  }
};

// Navigator icons
const createScreenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, size, color }) => {
    const iconName = getIconName(route, focused);
    return <Ionicons name={iconName} size={size} color={color} />;
  },
  tabBarActiveTintColor: colors.ui.blue,
  tabBarInactiveTintColor: colors.ui.secondary,
  headerShown: false,
});
export const AppNavigator = () => {
  return (
    <FavoritesContextProvider>
      <LocationContextProvider>
        <RestaurantsContextProvider>
          <Tab.Navigator screenOptions={createScreenOptions}>
            <Tab.Screen name="Restaurants" component={RestaurantNavigator} />
            <Tab.Screen name="Map" component={MapScreen} />
            <Tab.Screen name="Settings" component={SettingsNavigator} />
          </Tab.Navigator>
        </RestaurantsContextProvider>
      </LocationContextProvider>
    </FavoritesContextProvider>
  );
};
