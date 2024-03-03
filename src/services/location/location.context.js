import { useState, createContext, useEffect } from "react";

import { locationRequest, locationTransform } from "./location.service";

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [initialLoad, setInitialLoad] = useState(true);

  const onSearch = (searchKeyword) => {
    setIsLoading(true);
    setKeyword(searchKeyword);
  };

  const handleSearchResult = (req) => {
    const result = locationTransform(req);
    setLocation((prevLocation) => ({
      ...prevLocation,
      lat: result.lat,
      lng: result.lng,
      viewport: result.viewport,
    }));
  };

  const handleSearchError = (err) => {
    setIsLoading(false);
    setError(err);
    setKeyword("");
  };

  const performInitialLoad = async () => {
    try {
      const request = await locationRequest("san francisco");
      handleSearchResult(request);
      setError(null);
      setIsLoading(false);
      setInitialLoad(false);
      setKeyword("");
    } catch (error) {
      handleSearchError(error);
    }
  };

  const fetchLocationData = async () => {
    try {
      if (initialLoad) return await performInitialLoad();
      if (!keyword.length) return; //end here if no search word
      const request = await locationRequest(keyword.toLowerCase());
      setError(null);
      handleSearchResult(request);
      setIsLoading(false);
    } catch (error) {
      handleSearchError(error);
    }
  };

  useEffect(() => {
    fetchLocationData();
  }, [keyword]);

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
