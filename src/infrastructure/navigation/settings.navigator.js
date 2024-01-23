import { useEffect } from "react";

import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import SettingsScreen from "../../features/settings/screens/settings.screen";
import FavoritesScreen from "../../features/settings/screens/favorites.screen";

const SettingsStack = createStackNavigator();

export const SettingsNavigator = ({ route, navigation }) => (
  <SettingsStack.Navigator
    screenOptions={{
      header: "screen",
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }}
  >
    <SettingsStack.Screen
      options={{ header: () => null }}
      name="Settings"
      component={SettingsScreen}
    />
    <SettingsStack.Screen
      options={{ header: () => null }}
      name="Favorites"
      component={FavoritesScreen}
    />
  </SettingsStack.Navigator>
);
