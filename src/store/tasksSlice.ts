import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { INewTask } from './taskSlice.types';
import { TasksState } from 'types/taskType';

const initialState: TasksState = {
  tasks: [
    { name: 'Имя', info: 'Сверстать страницу', isImportant: false, isCompleted: false, id: 1 },
    { name: 'Имя', info: 'Сверстать другую страницу', isImportant: false, isCompleted: false, id: 2 },
    { name: 'Имя', info: 'Добавить стили', isImportant: true, isCompleted: false, id: 3 },
  ],
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask(state, action: PayloadAction<INewTask>) {
      state.tasks.push({
        name: action.payload.name,
        info: action.payload.info,
        isImportant: action.payload.isImportant,
        isCompleted: action.payload.isCompleted,
        id: state.tasks.length + 1,
      });
    },
    editTask(state, action: PayloadAction<INewTask>) {
      state.tasks = state.tasks.map((task) => {
        if (task.id === action.payload.id) {
          task.name = action.payload.name;
          task.info = action.payload.info;
          task.isImportant = action.payload.isImportant;
          task.isCompleted = action.payload.isCompleted;
        }
        return task;
      });
    },
    deleteTask(state, action: PayloadAction<number>) {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    toggleImportanceTask(state, action: PayloadAction<number>) {
      state.tasks = state.tasks.map((task) => {
        if (task.id === action.payload) {
          task.isImportant = !task.isImportant;
        }
        return task;
      });
    },
    toggleCompleteTask(state, action: PayloadAction<number>) {
      state.tasks = state.tasks.map((task) => {
        if (task.id === action.payload) {
          task.isCompleted = !task.isCompleted;
        }
        return task;
      });
    },
  },
});

export const { addTask, editTask, deleteTask, toggleImportanceTask, toggleCompleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;
