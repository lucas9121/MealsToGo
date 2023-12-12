import { useState } from "react";
import styled from "styled-components/native";
import { SafeAreaView, StatusBar, FlatList, Platform } from "react-native";
import { Searchbar } from "react-native-paper";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { Spacer } from "../components/spacer/spacer.component";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  /* background-color: ${(props) => props.theme.colors.bg.dark}; */
  /* Avoids terminal warning */
  ${StatusBar.currentHeight &&
  `margin-top: ${StatusBar.currentHeight}px;`}; /* Only for Android devices */
`;

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

// attributes function allows me to give specific props to default value, which is Flatlist in this case
const ListContainer = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const restaurantAPI = Array.from(new Array(15));
restaurantAPI.forEach((ele, idx) => {
  restaurantAPI[idx] = { name: idx };
});

export default function RestaurantsScreen() {
  const [searchQueary, setSearchQuery] = useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <SafeArea>
      <StatusBar
        barStyle={Platform.OS === "ios" ? "dark-content" : "light-content"}
      />
      <SearchContainer>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQueary}
        />
      </SearchContainer>
      <ListContainer
        data={restaurantAPI}
        renderItem={() => (
          <Spacer position="bottom" size="large">
            <RestaurantInfoCard />
          </Spacer>
        )}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
}
