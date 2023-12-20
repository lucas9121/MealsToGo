import { useContext } from "react";
import styled from "styled-components/native";
import { StatusBar, FlatList, Platform } from "react-native";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { Spacer } from "../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantsContext } from "../../../services/restaurants/mock/restaurants.context";
import { LoadingComponent } from "../components/loading.component";
import { Search } from "../components/search.component";

// attributes function allows me to give specific props to default value, which is Flatlist in this case
const ListContainer = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export default function RestaurantsScreen() {
  const { isLoading, restaurants } = useContext(RestaurantsContext); // popuplates the ammount of restaurants determined in RestaurantsContext array

  return isLoading ? (
    <LoadingComponent />
  ) : (
    <SafeArea>
      <StatusBar
        barStyle={Platform.OS === "ios" ? "dark-content" : "light-content"}
      />
      <Search />
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
