import { useState, createContext, useEffect, useMemo } from "react";

import {
  restaurantsRequest,
  restaurantsTransform,
} from "./restaurants.service";

export const RestaurantsContext = createContext();

// provider of the context created above
//componenet that does most of the heavy lifting
export const RestaurantsContextProvider = ({ children }) => {
  return (
    // tells context what it will contain as a value
    <RestaurantsContext.Provider value={{ restaurants: [1, 2, 3] }}>
      {children}
    </RestaurantsContext.Provider>
  );
};
