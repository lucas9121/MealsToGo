import styled from "styled-components";
import { FlatList } from "react-native";

// attributes function allows me to give specific props to default value, which is Flatlist in this case
export const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;
