import {
  ADD_TODO,
  COMPLETE_TODO,
  DELETE_TODO,
  GET_TODO,
} from "../constants/todoConstants";

const initialState = {
  todos: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TODO:
      return {
        ...state,
        todos: action.payload,
      };

    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case COMPLETE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id !== action.payload.id) {
            return todo;
          }

          return {
            ...todo,
            completed: !todo.completed,
          };
        }),
      };

    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id !== action.payload.id) {
            return todo;
          }

          return {
            ...todo,
            delete: !todo.delete,
          };
        }),
      };

    default:
      return state;
  }
};
