import { useState } from "react";
import styled from "styled-components/native";
import { SafeAreaView, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color: ${(props) => props.theme.colors.bg.dark};
  /* Avoids terminal warning */
  ${StatusBar.currentHeight &&
  `margin-top: ${StatusBar.currentHeight}px;`}; /* Only for Android devices */
`;

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const ListContainer = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.bg.secondary};
  padding: ${(props) => props.theme.space[3]};
`;

export default function RestaurantsScreen() {
  const [searchQueary, setSearchQuery] = useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQueary}
        />
      </SearchContainer>
      <ListContainer>
        <RestaurantInfoCard />
      </ListContainer>
    </SafeArea>
  );
}
