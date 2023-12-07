import RestaurantsScreen from "./src/features/restaurants/screens/restaurant.screens";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <RestaurantsScreen />
    </ThemeProvider>
  );
}
