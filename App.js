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

import { RestaurantsContextProvider } from "./src/services/restaurants/mock/restaurants.context";

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
  tabBarActiveTintColor: "tomato",
  tabBarInactiveTintColor: "gray",
});

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
      <RestaurantsContextProvider>
        {/* anything below can use RestaurantsContext now */}
        <NavigationContainer>
          <Tab.Navigator screenOptions={createScreenOptions}>
            <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
            <Tab.Screen name="Map" component={MapScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </RestaurantsContextProvider>
    </ThemeProvider>
  );
}
