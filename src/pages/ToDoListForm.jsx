import { useState } from "react";
import ToDoItem from "../components/ToDoItem";

export default function ToDoListForm() {
  const [toDoList, setToDoList] = useState([]);
  const [formData, setFormData] = useState({
    id: 0,
    title: "",
    completed: false,
  });

  function handleSubmit(e) {
    e.preventDefault();
    const newToDo = { ...formData, id: Date.now() };
    setToDoList((prevList) => [newToDo, ...prevList]);
    setFormData({ ...formData, title: "" });
  }

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }
  //   console.log(formData.title);

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
        <ToDoItem setToDoList={setToDoList} toDoList={toDoList} />
      </form>
    </>
  );
}
