import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { INewTask, ITaskSliceState } from './taskSlice.types';
import { Task } from 'types/taskType';

const initialState: ITaskSliceState = {
  tasks: [],
  visibleTasks: [],
  initialVisibleTasks: [],
  loading: false,
  error: null,
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
    updateTasks(state, action: PayloadAction<Task[]>) {
      const update: Task[] = [];
      state.visibleTasks.forEach((visibleTask) => {
        const updateTask = action.payload.find((item) => {
          return item.id === visibleTask.id;
        });
        if (typeof updateTask !== 'undefined') update.push(updateTask);
      });
      state.visibleTasks = update;
    },
    setVisibleTasks(state, action: PayloadAction<Task[]>) {
      state.visibleTasks = action.payload;
    },
    setInitialVisibleTasks(state, action: PayloadAction<Task[]>) {
      state.initialVisibleTasks = action.payload;
    },
    setLoading(state) {
      state.loading = true;
      state.error = null;
    },
    setTasks(state, action: PayloadAction<Task[]>) {
      const validTasks: Task[] = [];
      action.payload.forEach((item) => {
        if (
          item.id &&
          item.name &&
          item.info &&
          typeof item.isCompleted === 'boolean' &&
          typeof item.isImportant === 'boolean'
        ) {
          validTasks.push(item);
        }
      });
      validTasks.reverse();
      state.loading = false;
      state.tasks = validTasks;
      state.visibleTasks = validTasks;
    },
    setError(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  addTask,
  editTask,
  deleteTask,
  toggleImportanceTask,
  toggleCompleteTask,
  updateTasks,
  setVisibleTasks,
  setInitialVisibleTasks,
  setLoading,
  setTasks,
  setError,
} = tasksSlice.actions;
export default tasksSlice.reducer;
