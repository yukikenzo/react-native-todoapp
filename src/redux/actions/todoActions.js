import axios from "axios";
import {
  ADD_TODO,
  COMPLETE_TODO,
  DELETE_TODO,
  GET_TODO,
} from "../constants/todoConstants";

export const getTodos = () => {
  try {
    return async (dispatch) => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      if (response.data) {
        dispatch({
          type: GET_TODO,
          payload: response.data,
        });
      } else {
        console.debug("Unable to fetch todos");
      }
    };
  } catch (error) {
    console.debug(error);
  }
};

export const addTodo = (data) => {
  return {
    type: ADD_TODO,
    payload: data,
  };
};

export const completeTodo = (data) => {
  return {
    type: COMPLETE_TODO,
    payload: data,
  };
};

export const deleteTodo = (data) => {
  return {
    type: DELETE_TODO,
    payload: data,
  };
};
