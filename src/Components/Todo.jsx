import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Todo.css"; // CSS file
import { add, remove, update } from "../Features/TodoSlice";

export default function Todos() {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  const [taskText, setTaskText] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const handleAddOrUpdate = () => {
    if (taskText.trim() === "") return;

    if (editIndex !== null) {
      // Update existing todo
      dispatch(update({ index: editIndex, title: taskText }));
      setEditIndex(null);
    } else {
      // Add new todo
      dispatch(add(taskText));
    }

    setTaskText("");
  };

  const handleEdit = (index, title) => {
    setTaskText(title);
    setEditIndex(index);
  };

  return (
    <div className="todo-container">
      <h2>My Todo List</h2>

      {/* Add/Edit input */}
      <div className="add-section">
        <input
          type="text"
          placeholder="Enter task..."
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />
        <button onClick={handleAddOrUpdate} className="add-btn">
          {editIndex !== null ? "✏️ Update" : "➕ Add"}
        </button>
      </div>

      {todos.length === 0 && <p className="empty">No tasks yet...</p>}

      {todos.map((todo, index) => (
        <div key={index} className="todo-item">
          <span>{todo.title}</span>
          <div className="buttons">
            <button
              className="edit-btn"
              onClick={() => handleEdit(index, todo.title)}
            >
              ✏️ Edit
            </button>
            <button
              className="delete-btn"
              onClick={() => dispatch(remove(index))}
            >
              ❌ Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
