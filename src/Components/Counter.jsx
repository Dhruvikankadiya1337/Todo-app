// src/components/Counter.jsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../feature/CounterSlice";

export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: "center", marginTop: "50px", fontFamily: "Arial" }}>
      <h1>Redux Counter App</h1>
      <h2>Count: {count}</h2>
      <div>
        <button
          onClick={() => dispatch(increment())}
          style={{
            padding: "10px 20px",
            marginRight: "10px",
            fontSize: "16px",
            backgroundColor: "#4caf50",
            color: "white",
            border: "none",
            borderRadius: "5px",
          }}
        >
          +1
        </button>
        <button
          onClick={() => dispatch(decrement())}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "#f44336",
            color: "white",
            border: "none",
            borderRadius: "5px",
          }}
        >
          -1
        </button>
      </div>
    </div>
  );
}
