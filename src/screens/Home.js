import { View, Text } from "react-native";
import React from "react";
import Header from "../components/Header";
import TodoList from "../components/TodoList";

const Home = () => {
  return (
    <View>
      <Header />
      <TodoList />
    </View>
  );
};

export default Home;
