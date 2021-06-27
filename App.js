import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.search}>
          <Text>Search goes here!</Text>
        </View>
        <View style={styles.list}>
          <Text>Our react native blank canvas!</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  search: {
    backgroundColor: "green",
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
