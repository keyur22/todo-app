import todosActionTypes from './todos-actionTypes';

export const addTodo = (todo) => ({
  type: todosActionTypes.ADD_TODO,
  payload: todo
});

export const deleteTodo = (todo) => ({
  type: todosActionTypes.DELETE_TODO,
  payload: todo
});
