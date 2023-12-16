import { useState, useContext } from "react";
import styled from "styled-components/native";
import { StatusBar, FlatList, Platform } from "react-native";
import { Searchbar, ActivityIndicator } from "react-native-paper";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { Spacer } from "../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantsContext } from "../../../services/restaurants/mock/restaurants.context";
import { LoadingComponent } from "../components/loading.component";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

// attributes function allows me to give specific props to default value, which is Flatlist in this case
const ListContainer = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export default function RestaurantsScreen() {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext); // popuplates the ammount of restaurants determined in RestaurantsContext array
  const [searchQueary, setSearchQuery] = useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return isLoading ? (
    <LoadingComponent />
  ) : (
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
        data={restaurants}
        renderItem={({ item }) => (
          <Spacer position="bottom" size="large">
            <RestaurantInfoCard restaurant={item} />
          </Spacer>
        )}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
}
