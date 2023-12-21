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
import { Ionicons } from "@expo/vector-icons";
import RestaurantsScreen from "./src/features/restaurants/screens/restaurant.screens";
import SettingsScreen from "./src/features/restaurants/screens/settings.screen";
import MapScreen from "./src/features/restaurants/screens/map.screen";
import { colors } from "./src/infrastructure/theme/colors";

import { Navigation } from "./src/infrastructure/navigation";
import { RestaurantsContextProvider } from "./src/services/restaurants/mock/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";

// console.log(appNavigator);

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
      <LocationContextProvider>
        <RestaurantsContextProvider>
          {/* anything below can use RestaurantsContext now */}
          <Navigation />
        </RestaurantsContextProvider>
      </LocationContextProvider>
    </ThemeProvider>
  );
}
