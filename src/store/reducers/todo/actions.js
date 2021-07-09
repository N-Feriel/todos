export const addToDo = (data) => ({
  type: "ADD_TODO",
  data,
});
export const getToDos = (data) => ({
  type: "GET_TODOS",
  data,
});
export const EditToDo = (item) => ({
  type: "EDIT_TODO",
  item,
});
export const removeToDo = (item) => ({
  type: "REMOVE_TODO",
  item,
});
export const completeToDo = () => ({
  type: "COMPLETE_TODO",
});

export const clearTodoList = () => ({
  type: "CLEAR_LIST",
});
export const completedList = (data) => ({
  type: "COMPLETE_LIST_TODO",
  data,
});
