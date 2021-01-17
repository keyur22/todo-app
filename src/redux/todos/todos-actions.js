import todosActionTypes from './todos-actionTypes';

export const addTodo = (todo) => ({
  type: todosActionTypes.ADD_TODO,
  payload: todo
});

export const deleteTodo = (id) => ({
  type: todosActionTypes.DELETE_TODO,
  payload: id
});

export const editTodo = (todo) => ({
  type: todosActionTypes.EDIT_TODO,
  payload: todo
});

export const deleteTodoWithBucketId = (id) => ({
  type: todosActionTypes.DELETE_TODO_WITH_BUCKET_ID,
  payload: id
});

export const changeCompletedStatus = (id) => ({
  type: todosActionTypes.CHANGE_COMPLETED_STATUS,
  payload: id
});
