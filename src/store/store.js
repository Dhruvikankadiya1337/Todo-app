// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../feature/CounterSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
