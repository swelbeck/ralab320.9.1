import ACTIONS from "./toDoReducerActions.mjs";

export default function reducer(todos, action) {
  // console.log(...state);
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [action.payload, ...todos];
    case ACTIONS.DELETE_TODO:
      return todos.filter((item) => item.id !== action.payload);
    case ACTIONS.EDIT_TODO:
      return;
    case ACTIONS.TOGGLE_TODO:
      return todos.map((item) => {
        if (item.id === action.payload) {
          return { ...item, complete: !item.complete };
        }
        return item;
      });
    default:
      return todos;
  }
}
