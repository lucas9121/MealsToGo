import { useState, createContext, useEffect, useMemo, useContext } from "react";

import {
  restaurantsRequest,
  restaurantsTransform,
} from "./restaurants.service";

import { LocationContext } from "../../location/location.context";

export const RestaurantsContext = createContext();

// provider of the context created above
//componenet that does most of the heavy lifting
export const RestaurantsContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { location } = useContext(LocationContext);

  const retrieveRestaurants = async (loc = "37.7749295,-122.4194155") => {
    try {
      setIsLoading(true);

      // simulate asynchronous behavior with a timeout
      await new Promise((resolve) => setTimeout(resolve, 2000));

      const results = await restaurantsRequest(loc);
      const transformedResults = restaurantsTransform(results);

      setIsLoading(false);
      setRestaurants(transformedResults);
    } catch (error) {
      setIsLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    if (location) {
      console.log("retrieve restaurant location: ", location);
      const locationString = `${location.lat},${location.lng}`;
      retrieveRestaurants(locationString);
    } else {
      retrieveRestaurants();
    }
  }, [location?.lat, location?.lng]);
  return (
    // tells context what it will contain as a value
    <RestaurantsContext.Provider value={{ restaurants, isLoading, error }}>
      {/*shorhand for object key and value being the same */}
      {children}
    </RestaurantsContext.Provider>
  );
};
