import { Button } from "react-native-paper";

import {
  createStackNavigator,
  CardStyleInterpolators,
  TransitionPresets,
} from "@react-navigation/stack";

import { colors } from "../theme/colors";
import SettingsScreen from "../../features/settings/screens/settings.screen";
import FavoritesScreen from "../../features/settings/screens/favorites.screen";
import CameraScreen from "../../features/settings/screens/camera.screen";
import { RestaurantDetailScreen } from "../../features/restaurants/screens/restaurant-detail.screen";

const SettingsStack = createStackNavigator();

export const SettingsNavigator = ({ route, navigation }) => (
  <SettingsStack.Navigator
    screenOptions={{
      headerShown: false,
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }}
  >
    <SettingsStack.Screen name="Settings" component={SettingsScreen} />
    <SettingsStack.Screen
      options={{
        headerShown: true,
        headerLeft: () => (
          <Button
            title="Back"
            icon="arrow-left"
            textColor={colors.ui.blue}
            onPress={() => {
              navigation.navigate("Settings");
            }}
          />
        ),
      }}
      name="Favorites"
      component={FavoritesScreen}
    />
    <SettingsStack.Screen
      options={{
        gestureResponseDistance: 200,
        ...TransitionPresets.ModalPresentationIOS,
      }}
      name="RestaurantDetail"
      component={RestaurantDetailScreen}
    />
    <SettingsStack.Screen
      options={{
        headerShown: true,
        headerLeft: () => (
          <Button
            title="Back"
            icon="arrow-left"
            textColor={colors.ui.blue}
            onPress={() => {
              navigation.navigate("Settings");
            }}
          />
        ),
      }}
      name="Camera"
      component={CameraScreen}
    />
  </SettingsStack.Navigator>
);
