import { Add_Todo, Delete_Todo, Toggle_Todo } from "./ActionType";

export const addTodo = (todo) => {
  return {
    type: Add_Todo,
    todo,
  };
};

export const deleteTodo = (id) => {
  return {
    type: Delete_Todo,
    id,
  };
};
export const toggleTodo = (id) => {
  return {
    type: Toggle_Todo,
    id,
  };
};
