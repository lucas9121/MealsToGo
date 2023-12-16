import { useState, createContext, useEffect, useMemo } from "react";

import {
  restaurantsRequest,
  restaurantsTransform,
} from "./restaurants.service";

export const RestaurantsContext = createContext();

// provider of the context created above
//componenet that does most of the heavy lifting
export const RestaurantsContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const retrieveRestaurants = async () => {
    try {
      setIsLoading(true);

      // simulate asynchronous behavior with a timeout
      await new Promise((resolve) => setTimeout(resolve, 2000));

      const results = await restaurantsRequest();
      const transformedResults = restaurantsTransform(results);

      setIsLoading(false);
      setRestaurants(transformedResults);
    } catch (error) {
      setIsLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    retrieveRestaurants();
  }, []);
  return (
    // tells context what it will contain as a value
    <RestaurantsContext.Provider value={{ restaurants, isLoading, error }}>
      {/*shorhand for object key and value being the same */}
      {children}
    </RestaurantsContext.Provider>
  );
};
