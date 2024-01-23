import { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { AuthenticationContext } from "../authentication/authentication.context";

export const FavoritesContext = createContext();

export const FavoritesContextProvider = ({ children }) => {
  const { user } = useContext(AuthenticationContext);
  const [favorites, setFavorites] = useState([]);

  const saveFavorites = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(`@favorites-${user.uid}`, jsonValue);
    } catch (e) {
      console.error("Can't save favorites: ", e);
    }
  };

  const loadFavorites = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem(`@favorites-${user.uid}`);
      if (jsonValue !== null) setFavorites(JSON.parse(jsonValue));
    } catch (e) {
      console.error("Can't load favorites: ", e);
    }
  };

  const add = (restaurant) => {
    setFavorites((prevFavorites) => [...prevFavorites, restaurant]);
  };

  const remove = (restaurant) => {
    const newFavorites = favorites.filter(
      (item) => item.placeId !== restaurant.placeId
    );
    setFavorites(newFavorites);
  };

  useEffect(() => {
    if (user) loadFavorites(user.uid);
  }, [user]);

  useEffect(() => {
    if (user) saveFavorites(favorites, user.uid);
  }, [favorites, user]);

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addToFavorites: add,
        removeFromFavorites: remove,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
