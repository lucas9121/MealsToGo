import { useState } from "react";
import { SafeAreaView, View, Text, StyleSheet, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfo } from "../components/restaurant-info.component";

export default function RestaurantsScreen() {
  const [searchQueary, setSearchQuery] = useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQueary}
        />
      </View>
      <View style={styles.list}>
        <RestaurantInfo />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    //Only for Androind devices
    marginTop: StatusBar.currentHeight,
  },
  search: {
    padding: 16,
  },
  list: {
    flex: 1,
    backgroundColor: "blue",
    padding: 16,
  },
});
