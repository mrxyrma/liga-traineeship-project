import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { visibleTasks, Task } from 'types/taskType';

const initialState: visibleTasks = {
  visibleTasks: [],
};

const visibleTasksSlice = createSlice({
  name: 'visibleTasks',
  initialState,
  reducers: {
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
  },
});

export const { updateTasks, setVisibleTasks } = visibleTasksSlice.actions;
export default visibleTasksSlice.reducer;
