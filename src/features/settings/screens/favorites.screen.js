import { useContext } from "react";
import { TouchableOpacity } from "react-native";
import { Button } from "react-native-paper";

import { FavoritesContext } from "../../../services/favorites/favorites.context";
import { RestaurantInfoCard } from "../../restaurants/components/restaurant-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Text } from "../../../components/typography/text.component";
import { RestaurantList } from "../../restaurants/components/restaurant-list.styles";

export default function FavoritesScreen({ navigation }) {
  const { favorites } = useContext(FavoritesContext);
  return favorites.length ? (
    <SafeArea>
      <RestaurantList
        style={{ height: 2 }}
        data={favorites}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("RestaurantDetail", {
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
