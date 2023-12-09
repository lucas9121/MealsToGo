import RestaurantsScreen from "./src/features/restaurants/screens/restaurant.screens";
import { ThemeProvider } from "styled-components/native";
import {
  useFonts,
  Oswald_300Light,
  Oswald_400Regular,
  Oswald_700Bold,
} from "@expo-google-fonts/oswald";
import { Lato_400Regular, Lato_700Bold } from "@expo-google-fonts/lato";
import { theme } from "./src/infrastructure/theme";

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
      <RestaurantsScreen />
    </ThemeProvider>
  );
}
