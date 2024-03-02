import { useContext, useState } from "react";
import { TouchableOpacity } from "react-native";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { FavoritesBar } from "../../../components/favorite/favorites-bar.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { FadeInView } from "../components/animations/fade.animation";
import { LocationContext } from "../../../services/location/location.context";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { FavoritesContext } from "../../../services/favorites/favorites.context";
import { LoadingComponent } from "../components/loading.component";
import { Search } from "../components/search.component";
import { RestaurantList } from "../components/restaurant-list.styles";

// prop comes from restaurant navigator
export default function RestaurantsScreen({ navigation }) {
  const { error: locationError } = useContext(LocationContext);
  const { isLoading, restaurants, error } = useContext(RestaurantsContext); // popuplates the ammount of restaurants determined in RestaurantsContext array
  const { favorites } = useContext(FavoritesContext);
  const [isToggled, setIsToggled] = useState(false);

  return isLoading ? (
    <LoadingComponent />
  ) : (
    <SafeArea>
      <Search
        isFavoritesToggled={isToggled}
        onFavoritesToggled={() => setIsToggled(!isToggled)}
      />
      {isToggled && (
        <FavoritesBar favorites={favorites} onNavigate={navigation.navigate} />
      )}
      {!!error ||
        (!!locationError && ( // transforms empty object into boolean
          <Text variant="error">Oh no! Something went wrong.</Text>
        ))}
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("RestaurantDetail", {
                  // adds params
                  restaurant: item,
                });
              }}
            >
              <Spacer position="bottom" size="large">
                <FadeInView>
                  <RestaurantInfoCard restaurant={item} />
                </FadeInView>
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
}
