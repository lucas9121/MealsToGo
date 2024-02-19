import camelize from "camelize"; // camelcase seperate words. Adds consistency from API being returned.
import { restaurantHost } from "../../utils/env";
export const restaurantsRequest = async (
  location = "37.7749295,-122.4194155"
) => {
  try {
    const res = await fetch(
      `${restaurantHost}/placesNearby?location=${location}`
    );
    return res.json();
  } catch (error) {
    console.error("Error during fetch:", error);
    throw error;
  }
};

export const restaurantsTransform = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {
    return {
      ...restaurant,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now, // adds isOpenNow key and make value be opening_hours
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY", // adds isClosedTemporarily key and makes value be business_status
      address: restaurant.vicinity, // adds address key and makes value be vicinity value
    };
  });
  return camelize(mappedResults);
};
