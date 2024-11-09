export default function ToDoItem({ toDoList, setToDoList }) {
  return (
    <ul>
      {toDoList.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
}
