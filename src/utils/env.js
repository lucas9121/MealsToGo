const livePlacesHost = process.env.EXPO_PUBLIC_PLACES_NEARBY_URL;
const liveLocationHost = process.env.EXPO_PUBLIC_GEOCODE_URL;
const localHost = process.env.EXPO_PUBLIC_LOCAL_URL;
export const restaurantHost =
  process.env.NODE_ENV === "development" ? localHost : livePlacesHost;
export const locationtHost =
  process.env.NODE_ENV === "development" ? localHost : liveLocationHost;
