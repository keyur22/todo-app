import todosActionTypes from './todos-actionTypes';
import {
  addTodo,
  editTodo,
  deleteTodoWithBucketId,
  deleteTodo,
  changeCompletedStatus
} from './todos-utils';

const INITIAL_STATE = {
  todoList: []
};

const todosReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case todosActionTypes.ADD_TODO:
      return { ...state, todoList: addTodo(state.todoList, action.payload) };
    case todosActionTypes.EDIT_TODO:
      return { ...state, todoList: editTodo(state.todoList, action.payload) };
    case todosActionTypes.DELETE_TODO_WITH_BUCKET_ID:
      return { ...state, todoList: deleteTodoWithBucketId(state.todoList, action.payload) };
    case todosActionTypes.DELETE_TODO:
      return { ...state, todoList: deleteTodo(state.todoList, action.payload) };
    case todosActionTypes.CHANGE_COMPLETED_STATUS:
      return { ...state, todoList: changeCompletedStatus(state.todoList, action.payload) };
    default:
      return state;
  }
};

export default todosReducer;
