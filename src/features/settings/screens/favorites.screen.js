import { useContext } from "react";
import { TouchableOpacity, View } from "react-native";
import { Button } from "react-native-paper";

import { FavoritesContext } from "../../../services/favorites/favorites.context";
import { RestaurantInfoCard } from "../../restaurants/components/restaurant-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { AuthButton } from "../../account/components/account.styles";
import { Text } from "../../../components/typography/text.component";
import { RestaurantList } from "../../restaurants/components/restaurant-list.styles";

export default function FavoritesScreen({ navigation }) {
  const { favorites } = useContext(FavoritesContext);
  return favorites.length ? (
    <SafeArea style={{ justifyContent: "center" }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingRight: 16,
        }}
      >
        <Button
          title="Back"
          icon="arrow-left"
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Text variant="title">Favorites</Text>
        <Spacer position="right" size="large" />
      </View>
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
