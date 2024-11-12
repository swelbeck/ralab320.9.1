import { useState } from "react";
import ACTIONS from "../utilities/toDoReducerActions.mjs";

export default function ToDoItem({ toDoList, dispatch }) {
    console.log(toDoList)
  const [isEditing, setIsEditing] = useState(null);
  const [editText, setEditText] = useState("");

  function handleDelete(id) {
    dispatch({ type: ACTIONS.DELETE_TODO, payload: id });
  }

  function handleToggle(id) {
    dispatch({ type: ACTIONS.TOGGLE_TODO, payload: id });
  }

  function handleEdit(id, currentTitle) {
    setIsEditing(id);
    setEditText(currentTitle);
  }

  function handleSave(id) {
    dispatch({ type: ACTIONS.EDIT_TODO, payload: { id, title: editText } });
    setIsEditing(null);
  }

  return (
    <ul>
      {toDoList.map((item) => (
        <li key={item.id}>
          <button onClick={() => handleToggle(item.id)}>Toggle</button>
          {isEditing === item.id ? (
            <>
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
              <button onClick={() => handleSave(item.id)}>Save</button>
            </>
          ) : (
            <span style={{ color: item.completed ? "green" : "#000" }}>
              {item.title}
            </span>
          )}
          <button onClick={() => handleEdit(item.id, item.title)}>Edit</button>
          <button onClick={() => handleDelete(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
