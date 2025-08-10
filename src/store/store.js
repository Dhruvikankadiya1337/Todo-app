<<<<<<< HEAD
// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../feature/CounterSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,

import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../Features/TodoSlice";

const store = configureStore({
  reducer: {
    todo: todoReducer,
>>>>>>> 168d1f7 (First commit - All React projects)
  },
});

export default store;
