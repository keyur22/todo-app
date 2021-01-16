import todosActionTypes from './todos-actionTypes';
import TODOS_DATA from './todos-data';
import { addTodo } from './todos-utils';

const INITIAL_STATE = {
  todoList: TODOS_DATA
};

const todosReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case todosActionTypes.ADD_TODO:
      return { ...state, todoList: addTodo(state.todoList, action.payload) };

    default:
      return state;
  }
};

export default todosReducer;
