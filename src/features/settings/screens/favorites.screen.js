import { useContext } from "react";
import { FavoritesContext } from "../../../services/favorites/favorites.context";
import { TouchableOpacity, FlatList, Button } from "react-native";
import { RestaurantInfoCard } from "../../restaurants/components/restaurant-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component";

import { Text } from "../../../components/typography/text.component";
import { RestaurantList } from "../../restaurants/components/restaurant-list.styles";

export default function FavoritesScreen({ navigation }) {
  const { favorites } = useContext(FavoritesContext);
  return favorites.length ? (
    <SafeArea style={{ justifyContent: "center" }}>
      <RestaurantList
        style={{ height: 2 }}
        data={favorites}
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
                <RestaurantInfoCard restaurant={item} />
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
      <Button
        onPress={() => {
          navigation.goBack();
        }}
        title="Back"
      />
    </SafeArea>
  ) : (
    <SafeArea style={{ alignItems: "center", justifyContent: "center" }}>
      <Text variant="title">No Favorites Found</Text>
      <Button
        onPress={() => {
          navigation.goBack();
        }}
        title="Back"
      />
    </SafeArea>
  );
}
