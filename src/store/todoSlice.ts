import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [
      { info: 'Сверстать страницу', isImportant: false, isCompleted: false, id: 1 },
      { info: 'Сверстать другую страницу', isImportant: false, isCompleted: false, id: 2 },
      { info: 'Добавить стили', isImportant: true, isCompleted: false, id: 3 },
    ],
  },
  reducers: {
    addTodo(state, action) {
      console.log(state);
      console.log(action);

      state.todos.push({
        info: action.payload.info,
        isImportant: false,
        isCompleted: false,
        id: state.todos.length,
      });
    },
    // editTodo(state, action) {},
    // deleteTodo(state, action) {},
    // markCompletedTodo(state, action) {}
  },
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
