import { mocks } from "."; //pulling from index
import camelize from "camelize"; // camelcase seperate words. Adds consistency from API being returned.
export const restaurantsRequest = (location = "37.7749295,-122.4194155") => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) reject("not found");
    resolve(mock);
  });
};

export const restaurantsTransform = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {
    return {
      ...restaurant,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now, // adds isOpenNow key and make value be opening_hours
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY", // adds isClosedTemporarily key and makes value be business_status
    };
  });
  return camelize(mappedResults);
};
