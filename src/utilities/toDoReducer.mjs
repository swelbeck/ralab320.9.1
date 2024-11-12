import ACTIONS from "./toDoReducerActions.mjs";

export default function reducer(todos, action) {
  console.log(action);
  console.log(todos);
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [action.payload, ...todos];

    case ACTIONS.DELETE_TODO:
      return todos.filter((item) => item.id !== action.payload);

    case ACTIONS.EDIT_TODO:
      return todos.map((item) =>
        item.id === action.payload.id
          ? { ...item, title: action.payload.title }
          : item
      );
    case ACTIONS.TOGGLE_TODO:
      return todos.map((item) =>
        item.id === action.payload
          ? { ...item, completed: !item.completed }
          : item
      );
    default:
      return todos;
  }
}
