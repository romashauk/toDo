let nextTodoId = 0;

export const addToDo = (title, value) => ({
  type: 'ADD_TODO',
  counter: nextTodoId++,
  title,
});
export const removeTodo = id => ({
  type: 'REMOVE_TODO',
  id,
});
export const editToDo = (id, value) => ({
  type: 'EDIT_TODO',
  id,
  value,
});
export const ResolveToDO = id => ({
  type: 'RESOLVE_TODO',
  id,
});
