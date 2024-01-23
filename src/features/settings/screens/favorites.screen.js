import { useContext } from "react";
import { FavoritesContext } from "../../../services/favorites/favorites.context";
import { TouchableOpacity, FlatList, Button } from "react-native";
import { RestaurantInfoCard } from "../../restaurants/components/restaurant-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component";

export default function FavoritesScreen({ navigation }) {
  const { favorites } = useContext(FavoritesContext);
  return (
    <SafeArea>
      <Button
        onPress={() => {
          navigation.goBack();
        }}
        title="Back"
      />
      <FlatList
        style={{ padding: 16 }}
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
    </SafeArea>
  );
}
