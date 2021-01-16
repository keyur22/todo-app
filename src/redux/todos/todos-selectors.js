import {createSelector} from 'reselect';

const getTodos = (state) => state.todos;

export const getTodoList = createSelector(getTodos, (todos) => todos.todoList);
