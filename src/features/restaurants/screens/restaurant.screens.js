import { useState } from "react";
import styled from "styled-components/native";
import { SafeAreaView, StatusBar, FlatList } from "react-native";
import { Searchbar } from "react-native-paper";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { Spacer } from "../components/spacer/spacer.component";
import { colors } from "../../../infrastructure/theme/colors";

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

const restaurantAPI = Array.from(new Array(15));
restaurantAPI.forEach((ele, idx) => {
  restaurantAPI[idx] = { name: idx };
});

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
      <FlatList
        data={restaurantAPI}
        renderItem={() => (
          <Spacer position="bottom" size="large">
            <RestaurantInfoCard />
          </Spacer>
        )}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{
          backgroundColor: `${colors.bg.secondary}`,
          padding: 16,
        }}
      />
    </SafeArea>
  );
}
