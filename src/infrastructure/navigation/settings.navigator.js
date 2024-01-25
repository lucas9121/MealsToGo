import { Button } from "react-native-paper";

import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import SettingsScreen from "../../features/settings/screens/settings.screen";
import FavoritesScreen from "../../features/settings/screens/favorites.screen";
import CameraScreen from "../../features/settings/screens/camera.screen";
import { colors } from "../theme/colors";

const SettingsStack = createStackNavigator();

export const SettingsNavigator = ({ route, navigation }) => (
  <SettingsStack.Navigator
    screenOptions={{
      headerShown: false,
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }}
  >
    <SettingsStack.Screen
      options={{ header: () => null }}
      name="Settings"
      component={SettingsScreen}
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
      name="Favorites"
      component={FavoritesScreen}
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
