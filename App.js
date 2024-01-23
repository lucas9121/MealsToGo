import { ThemeProvider } from "styled-components/native";

import {
  useFonts,
  Oswald_300Light,
  Oswald_400Regular,
  Oswald_700Bold,
} from "@expo-google-fonts/oswald";
import { Lato_400Regular, Lato_700Bold } from "@expo-google-fonts/lato";
import { theme } from "./src/infrastructure/theme";

import { Navigation } from "./src/infrastructure/navigation";

import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";

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
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
