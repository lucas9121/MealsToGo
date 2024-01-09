import { mockImages, mocks } from "./mock"; //pulling from index
import camelize from "camelize"; // camelcase seperate words. Adds consistency from API being returned.
export const restaurantsRequest = async (
  location = "37.7749295,-122.4194155"
) => {
  const mock = mocks[location];

  if (!mock) throw new Error("not found");

  return mock;
};

export const restaurantsTransform = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {
    restaurant.photos = [
      mockImages[Math.floor(Math.random() * (mockImages.length - 1))],
    ];
    return {
      ...restaurant,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now, // adds isOpenNow key and make value be opening_hours
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY", // adds isClosedTemporarily key and makes value be business_status
      address: restaurant.vicinity, // adds address key and makes value be vicinity value
    };
  });
  return camelize(mappedResults);
};
