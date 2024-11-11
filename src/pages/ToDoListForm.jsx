import { useState, useReducer } from "react";
import ToDoItem from "../components/ToDoItem";
import toDoReducer from "../utilities/toDoReducer.mjs";
import ACTION from "../utilities/toDoReducerActions.mjs";

export default function ToDoListForm() {
  const [toDoList, dispatch] = useReducer(toDoReducer, []);
  const [formData, setFormData] = useState({
    title: "",
    completed: false,
  });

  function handleSubmit(e) {
    e.preventDefault();

    if (!formData.title.trim()) {
      return;
    }
    const newToDo = { ...formData, id: Date.now() };
    dispatch({ type: ACTION.ADDTODO, payload: newToDo });

    setFormData({ title: "", completed: false });
  }

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Todo:{" "}
          <input
            onChange={handleChange}
            type="text"
            name="title"
            value={formData.title}
            placeholder="Type Todo here..."
          />
        </label>
        <button type="submit">Add ToDo</button>
        <ToDoItem toDoList={toDoList} dispatch={dispatch} />
      </form>
    </>
  );
}
