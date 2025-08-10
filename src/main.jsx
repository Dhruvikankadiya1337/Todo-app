<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store/store";
import Counter from "./Components/Counter";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Counter />
  </Provider>
);
=======
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import store from "./store/store.js";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
>>>>>>> 168d1f7 (First commit - All React projects)
