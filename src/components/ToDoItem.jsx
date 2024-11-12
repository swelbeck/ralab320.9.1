import { useState, useEffect } from "react";
import ACTIONS from "../utilities/toDoReducerActions.mjs";

export default function ToDoItem({ toDoList, dispatch }) {
  const [isEditing, setIsEditing] = useState(null);
  const [editText, setEditText] = useState("");

  function handleDelete(id) {
    dispatch({ type: ACTIONS.DELETE_TODO, payload: id });
  }

  function handleChecked(e, id) {
    dispatch({
      type: ACTIONS.CHECKED_TODO,
      payload: { id, completed: e.target.checked },
    });
  }

  function handleEdit(id, currentTitle) {
    setIsEditing(id);
    setEditText(currentTitle);
  }

  function handleSave(e, id) {
    e.preventDefault();
    dispatch({ type: ACTIONS.EDIT_TODO, payload: { id, title: editText } });
    setIsEditing(null);
  }

  return (
    <ul>
      {toDoList.map((item) => (
        <li key={item.id}>
          <label>
            <input
              onChange={(e) => handleChecked(e, item.id)}
              type="checkbox"
              checked={item.completed}
            />
            {isEditing === item.id ? (
              <form onSubmit={(e) => handleSave(e, item.id)}>
                <label>
                  <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                  />
                </label>
                <span className="button">
                  <button type="submit">Save</button>
                </span>
              </form>
            ) : (
              <span
                style={{
                  color: item.completed ? "green" : "#000",
                  textDecoration: item.completed ? "line-through" : "none",
                }}
              >
                {item.title}
              </span>
            )}
          </label>

          {isEditing !== item.id && (
            <>
              <span className="button">
                <button onClick={() => handleEdit(item.id, item.title)}>
                  Edit
                </button>
              </span>
              <span className="button">
                <button
                  disabled={!item.completed}
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
              </span>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}
