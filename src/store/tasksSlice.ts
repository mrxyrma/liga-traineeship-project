import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { INewTask, IEditTask } from './taskSlice.types';
import { TasksState } from 'types/taskType';

const initialState: TasksState = {
  tasks: [
    { info: 'Сверстать страницу', isImportant: false, isCompleted: false, id: 1 },
    { info: 'Сверстать другую страницу', isImportant: false, isCompleted: false, id: 2 },
    { info: 'Добавить стили', isImportant: true, isCompleted: false, id: 3 },
  ],
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask(state, action: PayloadAction<INewTask>) {
      state.tasks.push({
        info: action.payload.pureText,
        isImportant: action.payload.importance,
        isCompleted: false,
        id: state.tasks.length + 1,
      });
    },
    editTask(state, action: PayloadAction<IEditTask>) {
      state.tasks = state.tasks.map((task) => {
        if (task.id === action.payload.id) {
          task.info = action.payload.newInfo;
        }
        return task;
      });
    },
    deleteTask(state, action: PayloadAction<number>) {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    searchTask(state, action: PayloadAction<string>) {
      const data = state.tasks;
      const foundTasks = data.filter((task) => task.info.toLowerCase().includes(action.payload.toLowerCase()));
      state.tasks = foundTasks;
    },
  },
});

export const { addTask, editTask, deleteTask, searchTask } = tasksSlice.actions;
export default tasksSlice.reducer;
