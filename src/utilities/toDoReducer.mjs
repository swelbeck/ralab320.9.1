import ACTION from "./toDoReducerActions.mjs";

export default function reducer(state, action) {
  console.log(...state);
  switch (action.type) {
    case ACTION.ADDTODO:
      return [action.payload, ...state];
    case ACTION.DELETETODO:
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
}
