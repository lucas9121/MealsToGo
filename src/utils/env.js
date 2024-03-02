import { Platform } from "react-native";
const livePlacesHost = process.env.EXPO_PUBLIC_PLACES_NEARBY_URL;
const liveLocationHost = process.env.EXPO_PUBLIC_GEOCODE_URL;
const localHost = process.env.EXPO_PUBLIC_LOCAL_URL;
const isDevelopment = process.env.NODE_ENV === "development";
const isAndroid = Platform.OS === "android"; // android can't use http
export const restaurantHost =
  !isDevelopment || isAndroid ? livePlacesHost : localHost;
export const locationtHost =
  !isDevelopment || isAndroid ? liveLocationHost : localHost;
export const isMock = process.env.NODE_ENV === "development" ? true : false;
