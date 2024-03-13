import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import todoReducers from "./reducers/todoReducers";

const rootReducer = combineReducers({ todos: todoReducers });

export const store = createStore(rootReducer, applyMiddleware(thunk));
