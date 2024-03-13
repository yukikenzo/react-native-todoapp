import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { PaperProvider } from "react-native-paper";
import { Provider as StoreProvider } from "react-redux";
import { store } from './src/redux/store'
import Home from "./src/screens/Home";
import { useState } from "react";

export default function App() {

  return (
    <StoreProvider store={store}>
      <PaperProvider>
        <ScrollView style={styles.container}>
          <View style={styles.box}>
            <Home />
            <StatusBar style="auto" />
          </View>
        </ScrollView>
      </PaperProvider>
    </StoreProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 100,
  },
  box: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1,
  },
});
