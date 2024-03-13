import { Text, View, Image } from "react-native";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { TextInput } from "react-native-paper";
import { addTodo } from "../redux/actions/todoActions";
import { store } from "../redux/store";

export default function Header() {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const addTodoHandler = () => {

    const todoData = {
      title: text,
      completed: false,
      id: Math.floor(Math.random() * (9999 - 1000 + 1) + 1000).toString(),
      userId: 1,
    };

    dispatch(addTodo(todoData));
    setText("");
  };

  return (
    <View style={{ alignItems: "center" }}>
      <Image
        source={require("../../assets/todo.png")}
        style={{ width: 100, height: 100, marginBottom: 20 }}
      />
      <Text>Type in new todo and hit enter</Text>
      <TextInput
        onSubmitEditing={addTodoHandler}
        label="Add New Todo"
        value={text}
        onChangeText={(text) => setText(text)}
        mode="outlined"
        style={{ width: 350 }}
      />
    </View>
  );
}
