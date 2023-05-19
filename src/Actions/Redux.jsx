import { Add_Todo, Delete_Todo, Toggle_Todo } from "./ActionType";

let initialState = [];

const Redux = (state = initialState, action) => {
  switch (action.type) {
    case Add_Todo:
      return [...state, { todo: action.todo, completed: false }];
    case Delete_Todo:
      return state.filter((ele, i) => i !== action.id);
    case Toggle_Todo:
      return state.map((ele) => [
        ...state,
        { ...ele, completed: !ele.completed },
      ]);
    default:
      break;
  }
};

export default Redux;
