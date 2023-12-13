import { ThemeProvider } from "styled-components/native";
import {
  useFonts,
  Oswald_300Light,
  Oswald_400Regular,
  Oswald_700Bold,
} from "@expo-google-fonts/oswald";
import { Lato_400Regular, Lato_700Bold } from "@expo-google-fonts/lato";
import { theme } from "./src/infrastructure/theme";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import RestaurantsScreen from "./src/features/restaurants/screens/restaurant.screens";
import SettingsScreen from "./src/features/restaurants/screens/settings.screen";
import MapScreen from "./src/features/restaurants/screens/map.screen";

const Tab = createBottomTabNavigator();

export default function App() {
  const [oswaldLoaded] = useFonts({
    Oswald_300Light,
    Oswald_400Regular,
    Oswald_700Bold,
  });

  const [latoLoaded] = useFonts({
    Lato_400Regular,
    Lato_700Bold,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
          <Tab.Screen name="Map" component={MapScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
