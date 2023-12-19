import { useState, createContext, useEffect } from "react";

import { locationRequest, locationTransform } from "./location.service";

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSearch = async (searchKeyword) => {
    try {
      setIsLoading(true);
      setKeyword(searchKeyword);
      if (!searchKeyword.length) return; //end here if no search word
      const request = await locationRequest(searchKeyword.toLowerCase());
      const result = locationTransform(request);
      setLocation((prevLocation) => ({
        ...prevLocation,
        lat: result.lat,
        lng: result.lng,
      }));
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error);
    }
  };

  return (
    <LocationContext.Provider
      value={{
        isLoading,
        error,
        location,
        keyword,
        search: onSearch,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
