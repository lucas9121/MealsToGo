import { useContext } from "react";
import styled from "styled-components";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity, Text } from "react-native";

import { FavoritesContext } from "../../services/favorites/favorites.context";

const FavoriteButton = styled.TouchableOpacity`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 9;
`;

export const Favorite = () => {
  const { favorites, addToFavorites, removeFromFavorites } =
    useContext(FavoritesContext);

  return (
    <FavoriteButton>
      <AntDesign name="heart" size={24} color="red" />
    </FavoriteButton>
  );
};
