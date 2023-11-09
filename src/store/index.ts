import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './tasksSlice';
import searchReducer from './searchSlice';

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    searching: searchReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
