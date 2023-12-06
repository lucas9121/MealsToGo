import { useState } from "react";
import styled from "styled-components/native";
import { SafeAreaView, StyleSheet, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

const Search = styled.View`
  padding: 16px;
`;

const List = styled.View`
  flex: 1;
  background-color: blue;
  padding: 16px;
`;

export default function RestaurantsScreen() {
  const [searchQueary, setSearchQuery] = useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <SafeAreaView style={styles.container}>
      <Search>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQueary}
        />
      </Search>
      <List>
        <RestaurantInfoCard />
      </List>
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
});
