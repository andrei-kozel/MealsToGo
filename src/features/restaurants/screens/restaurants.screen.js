import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import { SearchBar } from "../../../components/SearchBar";

export const RestaurantsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <SearchBar />
      </View>
      <View style={styles.list}>
        <Text>Our react native blank canvas!</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  search: {
    width: "100%",
    padding: 16,
  },
  list: {
    backgroundColor: "blue",
    flex: 1,
    width: "100%",
    padding: 16,
  },
});
