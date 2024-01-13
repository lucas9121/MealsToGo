import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components/native";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  useFonts,
  Oswald_300Light,
  Oswald_400Regular,
  Oswald_700Bold,
} from "@expo-google-fonts/oswald";
import { Lato_400Regular, Lato_700Bold } from "@expo-google-fonts/lato";
import { theme } from "./src/infrastructure/theme";

import { Navigation } from "./src/infrastructure/navigation";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { FavoritesContextProvider } from "./src/services/favorites/favorites.context";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcInD3zDLAfau8COt8CrfZleq1XSOz29U",
  authDomain: "mealstogo-2af32.firebaseapp.com",
  projectId: "mealstogo-2af32",
  storageBucket: "mealstogo-2af32.appspot.com",
  messagingSenderId: "1005770049477",
  appId: "1:1005770049477:web:99f64503629cedd34cadac",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      signInWithEmailAndPassword(auth, "<email>", "<password>")
        .then((userCredential) => {
          setIsAuthenticated(true);
        })
        .catch((err) => {
          console.error("failed to authenticate: ", err);
        });
    }, 2000);
  }, []);
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

  if (!isAuthenticated) return null;

  return (
    <>
      <ThemeProvider theme={theme}>
        <FavoritesContextProvider>
          <LocationContextProvider>
            <RestaurantsContextProvider>
              {/* anything below can use RestaurantsContext now */}
              <Navigation />
            </RestaurantsContextProvider>
          </LocationContextProvider>
        </FavoritesContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
