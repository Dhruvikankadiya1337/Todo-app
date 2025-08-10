import { createSlice } from "@reduxjs/toolkit"; //

const initialState = {
  todos: [
    {
      title: "Read Book for 15 min",
      status: true,
    },
  ],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    add: (state, action) => {
      const newTodo = {
        title: action.payload,
        status: false,
      };
      state.todos.push(newTodo);
    },

    remove: (state, action) => {
      const index = action.payload;
      state.todos.splice(index, 1);
    },

    update: (state, action) => {
      const { index, title, status } = action.payload;
      state.todos[index] = { title: title, status: status };
    },
  },
});

export default todoSlice.reducer;
export const { add, remove, update } = todoSlice.actions;
