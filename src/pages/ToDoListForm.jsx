import { useState, useReducer } from "react";
import initialToDos from "../utilities/data.mjs";
import ToDoItem from "../components/ToDoItem";
import toDoReducer from "../utilities/toDoReducer.mjs";
import ACTIONS from "../utilities/toDoReducerActions.mjs";

export default function ToDoListForm() {
  const [toDoList, dispatch] = useReducer(toDoReducer, initialToDos);
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
    dispatch({ type: ACTIONS.ADD_TODO, payload: newToDo });

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
          <input
            onChange={handleChange}
            type="text"
            name="title"
            value={formData.title}
            placeholder="Type Todo here..."
          />
        </label>{" "}
        <button className="add-button" type="submit">
          Add ToDo
        </button>
      </form>
      <ToDoItem toDoList={toDoList} dispatch={dispatch} />
    </>
  );
}
