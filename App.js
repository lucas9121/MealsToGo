
import { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import { Searchbar } from 'react-native-paper';

export default function App() {
  const [searchQueary, setSearchQuery] = useState('')

  const onChangeSearch = query => setSearchQuery(query)
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Searchbar placeholder='Search' onChangeText={onChangeSearch} value={searchQueary} />
      </View>
      <View style={styles.list}>
        <Text> List </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    //Only for Androind devices
    marginTop: StatusBar.currentHeight,
  },
  search: {
    // flex: .05,
    backgroundColor: 'green',
    padding: 16,
    justifyContent: 'center',
  },
  list: {
    flex: 1,
    backgroundColor: 'blue',
    padding: 16,
  }
});
