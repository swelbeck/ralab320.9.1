import ACTIONS from "../utilities/toDoReducerActions.mjs";

export default function ToDoItem({ toDoList, dispatch }) {
  function handleDelete(id) {
    dispatch({ type: ACTIONS.DELETE_TODO, payload: id });
  }

  function handleEdit(id) {}

  function handleToggle(id) {
    dispatch({ type: ACTIONS.TOGGLE_TODO, payload: id });
  }

  return (
    <ul>
      {toDoList.map((item) => (
        <li key={item.id}>
          <button onClick={()=> handleToggle(item.id)}>Toggle</button>
          <span style={{ color: item.complete ? "green" : "#000" }}>
            {item.title}
          </span>

          <button>Edit</button>
          <button onClick={() => handleDelete(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
