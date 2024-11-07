import { useState } from "react";

export default function ToDoListForm(){
    const [formData, setFormData] = useState('');
    function handleSubmit(e){
        e.preventDefault()
    }

    function handleChange(e){
        setFormData(
          [e.target.name] = e.target.value,
        );
    }

    return (
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="Type Todo here..."
        />
        <button type="submit">Add ToDo</button>
      </form>
    );
}