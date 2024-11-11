import ACTION from "../utilities/toDoReducerActions.mjs";

export default function ToDoItem({ toDoList, dispatch }) {
  function handleDelete(id) {
    dispatch({ type: ACTION.DELETETODO, payload: id });
  }

  return (
    <ul>
      {toDoList.map((item) => (
        <li key={item.id}>
          {item.title}
          <button onClick={() => handleDelete(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
